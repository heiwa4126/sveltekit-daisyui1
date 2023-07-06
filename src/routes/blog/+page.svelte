<script>
  import { base } from '$app/paths';
  import { Project } from '$lib/global';
  export let data;
</script>

<svelte:head>
  <title>{Project} - blog</title>
</svelte:head>

<h1>blog</h1>

<ul>
  {#each data.summaries as { slug, title }}
    <li><a href="{base}/blog/{slug}">{title}</a></li>
  {/each}
</ul>
