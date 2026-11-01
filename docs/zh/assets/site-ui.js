/* 2025 edition: language link in the breadcrumb row + an edition banner.
 *
 * Read the Docs serves /<language>/<version>/..., so the other language is the
 * same path with the first segment swapped. The banner lives at the top of the
 * content so readers landing on a chapter from a search engine still learn that
 * this is a snapshot and where the current edition is.
 */
(function () {
  var parts = window.location.pathname.split("/").filter(Boolean);
  var lang = parts[0];
  if (lang !== "en" && lang !== "zh-cn") return;

  var target = lang === "en" ? "zh-cn" : "en";
  var otherHref = window.location.pathname
    .replace(/^\/(en|zh-cn)(?=\/|$)/, "/" + target) + window.location.search;

  var copy = {
    langLabel: "English",
    banner: '<strong>2025 版快照</strong> — 本教程基于 DeepH-pack 1.0.6，内容保持当时讲授的原样。' +
      '最新文档：<a href="https://docs.deeph-pack.com/deeph-pack/">docs.deeph-pack.com</a>。' +
      '<a href="https://deeph-workshop-tutorial.readthedocs.io/zh-cn/2026/">2026 版教程 →</a>'
  };

  function addLangLink() {
    var aside = document.querySelector(".wy-breadcrumbs-aside");
    if (!aside || aside.querySelector(".lang-switch")) return;
    var link = document.createElement("a");
    link.className = "lang-switch";
    link.href = otherHref;
    link.title = target === "zh-cn" ? "切换到中文" : "Switch to English";
    link.innerHTML =
      '<svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" ' +
      'stroke-width="2" stroke-linecap="round" style="vertical-align:-2px;margin-right:5px">' +
      '<circle cx="12" cy="12" r="9"></circle><path d="M3 12h18"></path>' +
      '<path d="M12 3c2.6 2.8 2.6 15.2 0 18"></path><path d="M12 3c-2.6 2.8-2.6 15.2 0 18"></path></svg>' +
      copy.langLabel;
    link.style.cssText = "display:inline-flex;align-items:center;margin-right:18px;font-size:14px";
    aside.insertBefore(link, aside.firstChild);
  }

  function addBanner() {
    var content = document.querySelector(".wy-nav-content");
    if (!content || content.querySelector(".edition-banner")) return;
    try {
      if (sessionStorage.getItem("edition-banner-closed")) return;
    } catch (e) {}

    var bar = document.createElement("div");
    bar.className = "edition-banner";
    bar.style.cssText =
      "display:flex;align-items:flex-start;gap:12px;margin:0 0 20px;padding:10px 14px;" +
      "background:#fff8e1;border:1px solid #f0e0a8;border-radius:4px;" +
      "font-size:13px;line-height:1.6;color:#5c4a12";
    bar.innerHTML = '<div style="flex:1">' + copy.banner + "</div>";

    var close = document.createElement("button");
    close.type = "button";
    close.setAttribute("aria-label", "close");
    close.textContent = "\u00d7";
    close.style.cssText =
      "border:0;background:transparent;font-size:16px;line-height:1;color:#5c4a12;" +
      "cursor:pointer;padding:0 2px";
    close.addEventListener("click", function () {
      bar.remove();
      try { sessionStorage.setItem("edition-banner-closed", "1"); } catch (e) {}
    });
    bar.appendChild(close);

    var inner = content.querySelector(".rst-content") || content;
    content.insertBefore(bar, inner);
  }

  function start() {
    addLangLink();
    addBanner();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", start);
  } else {
    start();
  }
})();
