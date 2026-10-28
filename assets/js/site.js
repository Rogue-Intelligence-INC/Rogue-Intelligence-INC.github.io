(function () {
  var root = document.documentElement;
  var themeBtn = document.querySelector("[data-theme-toggle]");
  function label() {
    if (!themeBtn) return;
    var dark = root.getAttribute("data-theme") === "dark";
    themeBtn.textContent = dark ? "Light" : "Dark";
    themeBtn.setAttribute("aria-pressed", dark ? "true" : "false");
  }
  label();
  if (themeBtn) {
    themeBtn.addEventListener("click", function () {
      var next = root.getAttribute("data-theme") === "dark" ? "light" : "dark";
      root.setAttribute("data-theme", next);
      try { localStorage.setItem("ri-theme", next); } catch (e) {}
      label();
    });
  }

  var toggle = document.querySelector("[data-nav-toggle]");
  var nav = document.getElementById("site-nav");
  if (toggle && nav) {
    toggle.addEventListener("click", function () {
      var open = nav.classList.toggle("is-open");
      toggle.setAttribute("aria-expanded", open ? "true" : "false");
    });
  }

  var project = "all";
  var status = "all";
  function applyFilters() {
    document.querySelectorAll("[data-record]").forEach(function (row) {
      var okP = project === "all" || row.getAttribute("data-project") === project;
      var okS = status === "all" || row.getAttribute("data-status") === status;
      row.hidden = !(okP && okS);
    });
  }
  document.querySelectorAll("[data-filter]").forEach(function (btn) {
    btn.addEventListener("click", function () {
      var group = btn.getAttribute("data-filter-group");
      var value = btn.getAttribute("data-filter");
      document.querySelectorAll('[data-filter-group="' + group + '"]').forEach(function (other) {
        other.setAttribute("aria-pressed", other === btn ? "true" : "false");
      });
      if (group === "project") project = value;
      if (group === "status") status = value;
      applyFilters();
    });
  });
})();
