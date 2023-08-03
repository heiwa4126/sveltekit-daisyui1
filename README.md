# svelte-daisyui1

[Svelte](https://svelte.dev/) 4 (と SvelteKit と adapter-static) と
[Tailwind CSS](https://tailwindcss.com/docs/guides/sveltekit) と
[daisyUI](https://daisyui.com/docs/install/)
で SSG してみる練習。

GitHub Pages にもしてあります。 <https://heiwa4126.github.io/sveltekit-daisyui1>

## メモ

### Next.js 13 とちがうところ (規約以外)

- svelte.config.js が mjs (next.config.js は ejs)
- 依存が devDependencies だけで、Dependencies が無い。これはびっくり。
- static export への切り替えが方法がかなり違う。
- .d.ts (declaration file 定義ファイル)が動的に作られる式なので、クローン直後だと vscode でエラーだらけ。`dev`か`build`する。
