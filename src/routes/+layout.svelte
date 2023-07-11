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
  <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@24,100..700,0..1,-50..200" />
</svelte:head>

<div class="px-5 lg:px-10 prose max-w-none prose-sm md:prose-lg">
  <nav>
    <a href="{base}/">home</a>
    <a href="{base}/blog">blog</a>
    <a href="{base}/about">about</a>
    <button
      class="material-symbols-outlined symbols-fill micx"
      on:click={() => {
        mode = mode === 'dark' ? 'light' : 'dark';
        setMode(mode);
      }}>dark_mode</button
    >
  </nav>

  <slot />
</div>

<style>
  .micx {
    font-size: 125%;
    vertical-align: text-top;
  }
</style>
