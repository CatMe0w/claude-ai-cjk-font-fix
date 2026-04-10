# Claude.ai CJK Font Fix

Claude.ai's web interface hardcodes a CJK font stack that prioritizes Japanese glyphs (`Hiragino Sans`, `Yu Gothic`, `Meiryo`, `Noto Sans CJK JP`) regardless of the user's locale or the `lang` attribute. This userscript overrides the `--font-anthropic-serif` CSS variable to restore a clean Western serif stack, letting the OS fall back to the correct regional CJK fonts naturally.

Claude.ai 的网页端将日语字形（`Hiragino Sans`、`Yu Gothic`、`Meiryo`、`Noto Sans CJK JP`）硬编码在全局 CJK 字体栈的优先位置，完全无视用户 locale 和页面 `lang` 属性，导致中文内容以日文字形渲染。本脚本覆盖 `--font-anthropic-serif` CSS 变量，恢复干净的西文衬线回退栈，由操作系统根据语言环境自动选择正确的 CJK 字形。

## Installation

[Greasyfork](https://greasyfork.org/scripts/573361-claude-ai-cjk-font-fix)

## License

MIT License
