<script lang="ts">
  let count = 0;
</script>

<div class="counter">
  <div>
    <button on:click={() => (count -= 1)}>-</button>
    {count}
    <button on:click={() => (count += 1)}>+</button>
  </div>
</div>
