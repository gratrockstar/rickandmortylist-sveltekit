<script>
  import Card from '$lib/components/Card.svelte';
  export let characters;
</script>

<style lang="scss">
  .characters-list {
    ul {    
      list-style-type: none;
      @media (min-width: 768px) {
        display: flex;
        flex-wrap: wrap;
        gap: 1rem;
      }
      li {
        margin-bottom: 1rem;
        text-align: center;
        @media (min-width: 768px) {
          width: calc( 50% - 16px);
          margin-bottom: 0;
        }
        @media (min-width: 992px) {
          max-width: calc( 33% - 16px);
        }
      }
    }
  }
</style>

<div class="characters-list">
  {#if characters}
    <ul>
    {#each characters as character}
      <li>
        <Card {character} />
      </li>
    {/each}
    </ul>
  {/if}
  </div>