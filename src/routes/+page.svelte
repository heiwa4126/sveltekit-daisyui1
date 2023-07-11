<script lang="ts">
  import { Project } from '$lib/global';
  import Counter from './Counter.svelte';
  let value = 50;
</script>

<svelte:head>
  <title>{Project} - home</title>
</svelte:head>

<h1 class="text-3xl font-bold">Welcome to SvelteKit + daisyUI</h1>
<Counter />

<div>
  <div>value={value}</div>
  <input type="range" min={0} max={100} bind:value class="range w-48" />
</div>

<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
