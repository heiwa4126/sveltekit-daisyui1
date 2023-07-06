# svelte-ssg1

[Svelte](https://svelte.dev/) 4 (と SvelteKit と adapter-static) で SSG してみる練習。

home と about があって、home にカウンタが置いてあるサイトを
GitHub Pages にしてみる。

## メモ

layout.svelete で`<a>`に直書きしてる href、base:で処理してくれない。
`<Link>`じゃないからしょうがない。カッコいい方法を調べる。

## 参考

- [Static site generation • Docs • SvelteKit](https://kit.svelte.jp/docs/adapter-static)
