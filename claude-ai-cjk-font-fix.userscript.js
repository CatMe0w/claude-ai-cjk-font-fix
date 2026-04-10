// ==UserScript==
// @name         Claude.ai CJK Font Fix
// @namespace    https://catme0w.org/
// @version      1.0.0
// @description  修复 Claude.ai 错误的日语优先 CJK 字体栈
// @author       catme0w
// @license      MIT
// @match        https://claude.ai/*
// @grant        GM_addStyle
// @run-at       document-start
// ==/UserScript==

(function () {
  'use strict';

  GM_addStyle(`
    :root {
      --font-anthropic-serif:
        "Anthropic Serif", Georgia, "Times New Roman", serif !important;
    }
  `);
})();
