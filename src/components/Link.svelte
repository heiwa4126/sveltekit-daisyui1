<!--
  コンポーネントにするとカッコいいけど、
  他にもhref書き換える必要があるエレメント結構ありそう...
  地道にやったほうがいいかも。
-->
<script>
	import { base } from '$app/paths';
	export let href;
</script>

<a href={base + href} {...$$props}>
	<slot />
</a>
