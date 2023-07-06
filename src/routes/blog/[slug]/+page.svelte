<script type="ts">
	import { Project } from '$lib/global';
	export let data;
</script>

<svelte:head>
	<title>{Project} blog - {data.post.title}</title>
</svelte:head>

<h1>{data.post.title}</h1>
<div>{@html data.post.content}</div>
