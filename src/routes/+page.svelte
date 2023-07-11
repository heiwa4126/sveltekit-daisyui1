<script lang="ts">
  import { Project } from '$lib/global';
  import Counter from './Counter.svelte';
  let value = 50;
</script>

<svelte:head>
  <title>{Project} - home</title>
</svelte:head>

<h1>Welcome to SvelteKit + daisyUI</h1>
<Counter />

<div class="pt-5">
  <div>value={value}</div>
  <input type="range" min={0} max={100} bind:value class="range w-48" />
</div>

<p class="text-left md:text-center">
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
