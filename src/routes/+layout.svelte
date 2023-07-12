<script lang="ts">
  import { base } from '$app/paths';
  import '../app.css';
  let mode = 'light';

  function setMode(mode: string) {
    document.querySelector('html')?.setAttribute('data-theme', mode);
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Noto+Sans+JP:wght@300;400;500;700&display=swap" />
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Sharp:opsz,wght,FILL,GRAD@48,400,1,0" />
</svelte:head>

<div class="px-5 lg:px-10 prose max-w-none prose-sm md:prose-lg">
  <nav class="pt-2 pb-3 flex flex-row">
    <div class="flex-auto">
      <a href="{base}/">home</a>
      <a href="{base}/blog">blog</a>
      <a href="{base}/about">about</a>
    </div>
    <div>
      <button
        class="material-symbols-sharp micx"
        on:click={() => {
          mode = mode === 'dark' ? 'light' : 'dark';
          setMode(mode);
        }}>dark_mode</button
      >
    </div>
  </nav>

  <slot />
</div>

<style>
  .micx {
    font-size: 125%;
    @apply p-0 m-0 align-text-bottom;
  }
</style>
