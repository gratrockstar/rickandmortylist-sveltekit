<script>
  export let character;
</script>

<style lang="scss">
  .card {
    padding: .5rem;
    background: #06b0c7;
    border-radius: 10px;
    box-shadow: 0px 0px 5px 3px rgba(185,245,158,1);
    position: relative;
    transition: all 250ms ease-out;

    &:hover {
      transform: scale(1.02);
    }

    img {
      max-width: 100%;
    }

    h2 {
      text-align: center;

      a {
        text-decoration: none;
        color: black;
        transition: color 250ms ease-out;
        &:hover {
          color: rgba(185,245,158,1);
        }
        &:after {
          content: '';
          position: absolute;
          height: 100%;
          width: 100%;
          left: 0;
          top: 0;
        }
      }

    }

  }
</style>

<div class="card">
  <img
    src={character.image}
    width='300'
    height='300'
    alt={character.name}
  />
  <h2>
    <a href="characters/{character.id}">{character.name}</a> 
  </h2>
</div>