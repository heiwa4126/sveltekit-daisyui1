<script lang="ts">
	import { Project } from '$lib/global';
	import Counter from './Counter.svelte';
</script>

<svelte:head>
	<title>{Project} - home</title>
</svelte:head>

<h1>Welcome to SvelteKit</h1>
<Counter />
<p>Visit <a href="https://kit.svelte.dev">kit.svelte.dev</a> to read the documentation</p>
