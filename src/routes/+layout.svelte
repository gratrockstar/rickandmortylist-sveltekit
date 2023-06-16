<script>
  import { navigating } from '$app/stores';
  import Loader from '$lib/components/Loader.svelte';
</script>

<style lang="scss">
  main {
    max-width: 1080px;
    margin: 0 auto;
  }
</style>

<main>
  {#if $navigating}
  <Loader />
  {:else}
  <slot />
  {/if}
</main>