/* Language switcher injected into the article header.
 *
 * Read the Docs serves every project under /<language>/<version>/..., so the
 * other language is the same path with the first segment swapped. Doing it in
 * the browser keeps the link correct for every version and every page without
 * templating anything per page.
 */
(function () {
  var parts = window.location.pathname.split("/").filter(Boolean);
  var lang = parts[0];
  if (lang !== "en" && lang !== "zh-cn") return;

  var target = lang === "en" ? "zh-cn" : "en";
  parts[0] = target;
  var href = "/" + parts.join("/") + window.location.search;

  function add() {
    var bar = document.querySelector(".article-header-buttons");
    if (!bar || bar.querySelector(".lang-switch")) return;

    var link = document.createElement("a");
    link.className = "btn btn-sm nav-link pst-navbar-icon lang-switch";
    link.href = href;
    link.title = target === "zh-cn" ? "切换到中文" : "Switch to English";
    link.setAttribute("aria-label", link.title);
    link.innerHTML =
      '<span style="font-size:.78rem;font-weight:600;letter-spacing:.02em">' +
      (target === "zh-cn" ? "中文" : "EN") +
      "</span>";

    bar.insertBefore(link, bar.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", add);
  } else {
    add();
  }
})();
