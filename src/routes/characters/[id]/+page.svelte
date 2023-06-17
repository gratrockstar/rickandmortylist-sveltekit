<script>
  export let data;
  const { character } = data.data;
</script>

<style lang="scss">
  .character-detail {
    background: #06b0c7;
    padding: 1rem;
    border-radius: 10px;
    @media (min-width: 768px) {
      display: flex;
      gap: 2rem;
    }
    .episode {
      margin-bottom:.5em;
    }
  }
  .backlink {
    text-align: center;
    padding: 1em;
  }
  .backlinkitem {
    color: #fff;
    text-decoration: none;
    &:hover {
      text-decoration: underline;
    }
  }
</style>

<svelte:head>
  <title>{character.name} | Ricknmorty</title>
</svelte:head>

<div class="backlink">
  <a class="backlinkitem" href="/">Back to List</a>
</div>

<div class="character-detail">
  <div class="thumbnail">
    <img
      src={character.image}
      width='300'
      height='300'
      alt={character.name}
    />
  </div>
  <div class="content">
    <h1>Name: {character.name}</h1>
    <p>{character.species}, {character.gender}</p>
    {#if character.location?.name}
      <p>Location: {character.location.name}</p>
    {/if}
    {#if character.origin?.name}
      <p>Origin: {character.origin.name}</p>
    {/if}
    <p>Status: {character.status}</p>
    {#if character.episode.length}
    <div class="episodes">
      <h2>Episodes:</h2>
      <ul>
      {#each character.episode as episode}
        <li class="episode">
          {episode.episode} | {episode.name}<br />Airdate: {episode.air_date}
        </li>
      {/each}
      </ul>
    </div>
    {/if}
  </div>
</div>

<div class="backlink">
  <a class="backlinkitem" href="/">Back to List</a>
</div>