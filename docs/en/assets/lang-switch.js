/* Language switcher for the readthedocs theme.
 *
 * Read the Docs serves each project under /<language>/<version>/..., so the
 * other language is the same path with the first segment swapped.
 */
(function () {
  var parts = window.location.pathname.split("/").filter(Boolean);
  var lang = parts[0];
  if (lang !== "en" && lang !== "zh-cn") return;

  var target = lang === "en" ? "zh-cn" : "en";
  parts[0] = target;
  var href = "/" + parts.join("/") + window.location.search;

  function add() {
    var box = document.querySelector(".wy-side-nav-search");
    if (!box || box.querySelector(".lang-switch")) return;

    var link = document.createElement("a");
    link.className = "lang-switch";
    link.href = href;
    link.textContent = target === "zh-cn" ? "中文" : "English";
    link.style.cssText =
      "display:block;margin-top:6px;font-size:13px;color:#fff;opacity:.9;text-decoration:underline";
    box.appendChild(link);
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", add);
  } else {
    add();
  }
})();
