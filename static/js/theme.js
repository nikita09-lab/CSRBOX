(function () {
  const saved = localStorage.getItem("mediscan-theme") || "dark";
  document.documentElement.setAttribute("data-theme", saved);

  function toggleTheme() {
    const current = document.documentElement.getAttribute("data-theme") || "dark";
    const next = current === "dark" ? "light" : "dark";
    document.documentElement.setAttribute("data-theme", next);
    localStorage.setItem("mediscan-theme", next);

    const btn = document.getElementById("themeBtn");
    if (btn) btn.textContent = next === "dark" ? "🌙 Dark" : "☀ Light";
  }

  // attach to theme button if present
  document.addEventListener("DOMContentLoaded", () => {
    const btn = document.getElementById("themeBtn");
    if (btn) {
      const current = document.documentElement.getAttribute("data-theme") || "dark";
      btn.textContent = current === "dark" ? "🌙 Dark" : "☀ Light";
      btn.addEventListener("click", toggleTheme);
    }
  });
})();
