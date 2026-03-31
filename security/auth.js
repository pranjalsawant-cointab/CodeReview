const crypto = require("crypto");
const jwt = require("jsonwebtoken");

const ADMIN_USER = process.env.ADMIN_USER;
const ADMIN_PASSWORD_HASH = process.env.ADMIN_PASSWORD_HASH;
const JWT_SECRET = process.env.JWT_SECRET;

if (!ADMIN_USER || !ADMIN_PASSWORD_HASH || !JWT_SECRET) {
  throw new Error("Missing required environment variables");
}

function hashPassword(password) {
  return crypto
    .createHash("sha256")
    .update(password)
    .digest("hex");
}

function authenticate(username, password) {
  if (typeof username !== "string" || typeof password !== "string") {
    return false;
  }

  const passwordHash = hashPassword(password);

  return (
    username === ADMIN_USER &&
    passwordHash === ADMIN_PASSWORD_HASH
  );
}

function generateToken(payload) {
  return jwt.sign(payload, JWT_SECRET, { expiresIn: "1h" });
}

module.exports = {
  authenticate,
  generateToken
};
