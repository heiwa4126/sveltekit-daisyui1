# svelte-ssg1

[Svelte](https://svelte.dev/) 4 (と SvelteKit と adapter-static) で SSG してみる練習。

home と about があって、home にカウンタが置いてあるサイトを
GitHub Pages にしてみた。

ここ➞ <https://heiwa4126.github.io/svelte-ssg1>

「gh-branchブランチにpushすると更新」方式。

## メモ

普通に`pnpm build`だと `./build`に出る。(`./build`はデフォルト値)。

layout.svelete で`<a>`に直書きしてる href、kit.paths.baseで処理してくれない。`<Link>`じゃないからしょうがない。カッコいい方法を調べる。

(続き)「カッコいい方法」はいまいち無い感じ。地道に `import { base } from '$app/paths';` して `<a href="{base}/about">about</a>` するしかなさそう。

kit.paths.base は空白値 または '/'で始まる必要がある。

`dev` でも `preview` でも ルートにアクセスすると kit.paths.base にリダイレクトしてくれる。便利。

## 参考

- [Static site generation • Docs • SvelteKit](https://kit.svelte.jp/docs/adapter-static)
- [Configuration • Docs • SvelteKit](https://kit.svelte.dev/docs/configuration#paths)
- [Variables - GitHub Docs](https://docs.github.com/en/actions/learn-github-actions/variables) - GITHUB_REPOSITORY 変数。この レポジトリだと `heiwa4126/svelte-ssg1` が入る。
- [metonym/sveltekit-gh-pages: Minimal SvelteKit set-up made deployable to GitHub Pages.](https://github.com/metonym/sveltekit-gh-pages) - 参考になった
