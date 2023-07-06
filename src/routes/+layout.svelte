<script>
	import { base } from '$app/paths';
	import Link from '$components/Link.svelte';
</script>

<nav>
	&lt;a&gt;
	<a href="{base}/">home</a>
	<a href="{base}/about">about</a>
	&lt;Link&gt;
	<Link href="/">home</Link>
	<Link href="/about">about</Link>
</nav>

<slot />
