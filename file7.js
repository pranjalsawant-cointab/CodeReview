function escapeHtml(value) {
  if (value == null) {
    return "";
  }

  const str = String(value);

  return str.replace(/[&<>"']/g, (char) => {
    switch (char) {
      case "&": return "&amp;";
      case "<": return "&lt;";
      case ">": return "&gt;";
      case '"': return "&quot;";
      case "'": return "&#39;";
      default: return char;
    }
  });
}

function greet(name) {
  const safeName = escapeHtml(name && String(name).trim());

  return "Hello, " + (safeName || "Guest");
}

console.log(greet("World"));
