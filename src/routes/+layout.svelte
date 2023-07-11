<script>
  import { base } from '$app/paths';
  import '../app.css';
</script>

<nav>
  <a href="{base}/">home</a>
  <a href="{base}/blog">blog</a>
  <a href="{base}/about">about</a>
</nav>

<slot />
