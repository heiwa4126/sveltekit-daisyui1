<script>
  import { base } from '$app/paths';
  import '../app.css';
  import DarkMode from '$icon/DarkMode.svelte';
</script>

<div class="px-5 lg:px-10">
  <nav class="grid grid-cols-2">
    <div>
      <a href="{base}/">home</a>
      <a href="{base}/blog">blog</a>
      <a href="{base}/about">about</a>
    </div>
    <div class="text-right"><DarkMode /></div>
  </nav>

  <slot />
</div>
