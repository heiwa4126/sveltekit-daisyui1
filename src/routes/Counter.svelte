<script lang="ts">
  let count = 0;
</script>

<div class="flex align-middle">
  <button on:click={() => (count -= 1)}>-</button>
  <span class="text-lg px-1">{count}</span>
  <button on:click={() => (count += 1)}>+</button>
</div>

<style>
  button {
    @apply btn btn-xs rounded-md font-extrabold;
  }
</style>
