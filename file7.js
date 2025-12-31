function escapeHtml(str) {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;");
}

function greet(name) {
  if (typeof name !== "string" || name.trim() === "") {
    name = "Guest";
  }

  const safeName = escapeHtml(name);
  return "Hello, " + safeName;
}

console.log(greet("World"));
