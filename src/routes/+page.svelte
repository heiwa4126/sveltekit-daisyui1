<script lang="ts">
  import { Project } from '$lib/global';
  import Counter from './Counter.svelte';
  import Circle from '$icon/Circle.svelte';
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

<div class="grid grid-cols-3 b1">
  <div class="border-1">1</div>
  <div class="border-1">2</div>
  <div class="border-1 text-right">3</div>
</div>

<div>
  <span class="material-symbols-outlined border-1">bed</span>
  <div class="material-symbols-outlined symbols-fill border-1">bed</div>
  <a href="https://www.google.com"><span class="material-symbols-outlined symbols-fill text-cyan-500 baseline-tb">check_circle</span></a>
  何かテキスト
</div>

<div>
  <Circle r={10} />
  <Circle r={20} />
  <Circle r={40} />
</div>

<p class="text-left md:text-center">
  Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation
</p>
