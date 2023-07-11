<script>
  import { base } from '$app/paths';
  import '../app.css';
</script>

<div class="px-5 lg:px-10">
  <nav>
    <a href="{base}/">home</a>
    <a href="{base}/blog">blog</a>
    <a href="{base}/about">about</a>
  </nav>

  <slot />
</div>
