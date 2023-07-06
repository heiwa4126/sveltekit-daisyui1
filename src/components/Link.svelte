<!-- Linkはカッコいいけど、他にもhref必要なやつありそう... -->

<script>
	import { base } from '$app/paths';

	export let href;

	const url = base + href;
</script>

<a href={url} {...$$props}>
	<slot />
</a>
