// ==UserScript==
// @name        Force old genius.com layout
// @description Forces the old layout of genius.com lyrics pages
// @namespace   https://github.com/Sv443/force-genius-old-layout
// @match       https://genius.com/*
// @author      Sv443
// @version     1.0
// @license     MIT
// @grant       none
// @run-at      document-start
// @icon        https://www.google.com/s2/favicons?domain=genius.com
// @downloadURL https://raw.githubusercontent.com/Sv443/force-genius-old-layout/main/force-genius-old-layout.user.js
// @updateURL   https://raw.githubusercontent.com/Sv443/force-genius-old-layout/main/force-genius-old-layout.user.js
// ==/UserScript==


(() => {
  console.log(`Force old genius.com layout by Sv443\n${GM.info.script.namespace}`);
  const { href, search } = location;

  if(search.includes("react=1"))
    location.href = href.replace("react=1", "bagon=1");
  else if(!search.includes("bagon=1"))
    location.href = `${href}${href.includes("?") ? "&" : "?"}bagon=1`;
})();
