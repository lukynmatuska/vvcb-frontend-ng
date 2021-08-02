<script>
  export let result;
  // export let container;
  function addResult(result) {
    // const child = document.createElement("span");
    // child.textContent = result.time.left;
    console.log("add", result);
    // container.appendChild(child);
    /* <div class="flex flex-wrap">
  <div class="w-full px-4">
    <CardResultCreate title="Výsledek z časomíry" />
  </div>
</div> */
  }

  function deleteResultTemplate(id) {
    console.log("delete", id);
  }
</script>

<div>
  <button
    class="text-blueGray-500 background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button"
    on:click={addResult(result)}
  >
    <i class="fas fa-plus" />
  </button>
  <button
    class="text-red-500 background-transparent font-bold uppercase px-8 py-3 outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
    type="button"
    on:click={deleteResultTemplate(result.id)}
  >
    <i class="fas fa-trash" />
  </button>
</div>
