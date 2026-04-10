# Claude.ai CJK Font Fix

Claude.ai's web interface hardcodes a CJK font stack that prioritizes Japanese glyphs (`Hiragino Sans`, `Yu Gothic`, `Meiryo`, `Noto Sans CJK JP`) regardless of the user's locale or the `lang` attribute. This userscript overrides the `--font-anthropic-serif` CSS variable to restore a clean Western serif stack, letting the OS fall back to the correct regional CJK fonts naturally.

Claude.ai 的网页端将日语字形（`Hiragino Sans`、`Yu Gothic`、`Meiryo`、`Noto Sans CJK JP`）硬编码在全局 CJK 字体栈的优先位置，完全无视用户 locale 和页面 `lang` 属性，导致中文内容以日文字形渲染。本脚本覆盖 `--font-anthropic-serif` CSS 变量，恢复干净的西文衬线回退栈，由操作系统根据语言环境自动选择正确的 CJK 字形。

Claude.aiのWebインターフェースは、ユーザーのロケールやページの`lang`属性に関係なく、日本語グリフ（`Hiragino Sans`、`Yu Gothic`、`Meiryo`、`Noto Sans CJK JP`）をグローバルCJKフォントスタックの最優先位置にハードコードしています。これにより、中国語や韓国語のコンテンツが日本語グリフでレンダリングされてしまいます。このユーザースクリプトは`--font-anthropic-serif` CSS変数を上書きしてクリーンな欧文セリフフォールバックスタックを復元し、OSが言語環境に応じて適切なCJKグリフを自動的に選択できるようにします。

Claude.ai의 웹 인터페이스는 사용자의 로케일이나 페이지의 `lang` 속성과 무관하게 일본어 글리프(`Hiragino Sans`, `Yu Gothic`, `Meiryo`, `Noto Sans CJK JP`)를 전역 CJK 폰트 스택의 최우선 순위에 하드코딩하여, 한국어 콘텐츠가 일본어 글리프로 렌더링되는 문제를 야기합니다. 이 유저스크립트는 `--font-anthropic-serif` CSS 변수를 덮어써 깔끔한 서양 세리프 폴백 스택을 복원하고, 운영체제가 언어 환경에 따라 올바른 CJK 글리프를 자동으로 선택하도록 합니다.

## Installation

[Greasyfork](https://greasyfork.org/scripts/573361-claude-ai-cjk-font-fix)

## License

MIT License
