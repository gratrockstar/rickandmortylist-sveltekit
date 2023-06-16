<script>
  export let info, loadNewPage;
</script>

<style lang="scss">
  .pagination {
    ul {
      width: 100%;
      display: flex;
      gap: 1em;
      justify-content: center;
      li {
        button {
          font-family: sans-serif;
          font-size: 2rem;
          color: #fff;
          cursor: pointer;
          appearance: none;
          border: none;
          outline: none;
          background: transparent;
          &.disabled {
            color: rgba(#fff,.5);
            cursor: default;
          }
        }
      }
    }
  }
</style>

<div class="pagination">
  <ul>
    <li>
      <button
        on:click={() => info.prev ? loadNewPage(info.prev) : null}
        class={info.prev? '' : 'disabled'}
        data-prev={info.prev}
      >
        &lt;
    </button>
    </li>
    <li>
      <button
        on:click={() => info.next ? loadNewPage(info.next) : null}
        class={info.next ? '' : 'disabled'}
        data-next={info.next}
      >
        &gt;
    </button>
    </li>
  </ul>
</div>