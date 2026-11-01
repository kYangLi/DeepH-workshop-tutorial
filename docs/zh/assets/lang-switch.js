/* Language switcher for the readthedocs theme.
 *
 * Read the Docs serves each project under /<language>/<version>/..., so the
 * other language is the same path with the first segment swapped. The link sits
 * in the breadcrumb row next to "Edit on GitHub", where it is always visible -
 * the sidebar scrolls its own header out of view.
 */
(function () {
  var parts = window.location.pathname.split("/").filter(Boolean);
  var lang = parts[0];
  if (lang !== "en" && lang !== "zh-cn") return;

  var target = lang === "en" ? "zh-cn" : "en";
  var href = window.location.pathname
    .replace(/^\/(en|zh-cn)(?=\/|$)/, "/" + target) + window.location.search;

  function add() {
    var aside = document.querySelector(".wy-breadcrumbs-aside");
    if (!aside || aside.querySelector(".lang-switch")) return;

    var link = document.createElement("a");
    link.className = "lang-switch";
    link.href = href;
    link.title = target === "zh-cn" ? "切换到中文" : "Switch to English";
    link.innerHTML =
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" ' +
      'stroke="currentColor" stroke-width="2" stroke-linecap="round" ' +
      'style="vertical-align:-2px;margin-right:5px">' +
      '<circle cx="12" cy="12" r="9"></circle>' +
      '<path d="M3 12h18"></path>' +
      '<path d="M12 3c2.6 2.8 2.6 15.2 0 18"></path>' +
      '<path d="M12 3c-2.6 2.8-2.6 15.2 0 18"></path></svg>' +
      (target === "zh-cn" ? "中文" : "English");
    link.style.cssText =
      "display:inline-flex;align-items:center;margin-right:18px;font-size:14px";
    aside.insertBefore(link, aside.firstChild);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", add);
  } else {
    add();
  }
})();
