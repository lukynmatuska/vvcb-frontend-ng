<script>
  // core components
  import CardResultCreate from "../../components/Cards/CardResultCreate.svelte";
  import CardResultTemplatesTable from "../../components/Cards/CardResultTemplatesTable.svelte";
  export let location;
  // fetch("https://api.vvcb.cz/result-template")
  //   .then((response) => response.json())
  //   .then((data) => console.log(data));
  const res = (async () => {
    const response = await fetch("https://api.vvcb.cz/result-template");
    return await response.json();
  })();
  let container;
</script>

<div bind:this={container}>
  <div class="flex flex-wrap">
    <div class="w-full px-4">
      {#await res}
        <p>...waiting</p>
      {:then results}
        <CardResultTemplatesTable {results} {container} />
      {:catch error}
        <p>An error occurred!</p>
      {/await}
    </div>
  </div>
</div>
