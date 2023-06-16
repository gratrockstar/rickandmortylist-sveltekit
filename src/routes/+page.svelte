<script>
  import Loader from '$lib/components/Loader.svelte';
  import CharacterList from '$lib/components/CharacterList.svelte';
  import Pagination from '$lib/components/Pagination.svelte';
  import fetchCharacters from '$lib/fetchCharacters.js';
  export let data;

  let isLoading = false;
  let { results, info } = data;

  const loadNewPage = (page) => {
    isLoading = true;

    const newData = fetchCharacters(page, fetch).then((newData) => {
      results = newData.data?.characters?.results;
      info = newData.data?.characters?.info;
      isLoading = false;
    });

  }

</script>

<style lang="scss">
</style>

<svelte:head>
  <title>Character List | Ricknmorty</title>
</svelte:head>

<div class="characters-list-container">
{#if isLoading}
  <Loader />
{:else}
  <CharacterList characters={results} />
  <Pagination {info} {loadNewPage} />
{/if}
</div>