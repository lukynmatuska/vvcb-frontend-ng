<script>
  import ResultTemplatesTableActionBar from "../ActionBars/ResultTemplatesTableActionBar.svelte";
  import moment from "moment";
  import "moment/locale/cs";
  moment.locale("cs");
  export let title = "Seznam výsledků z časomíry";
  export let results = [
    {
      id: "6106ad0dd5423c001add5eb7",
      time: { left: 12.34, right: 56.78, final: 56.78 },
      date: "2021-08-01T14:17:24.885Z",
    },
    {
      id: "6106b72f36cb550019467376",
      time: { left: 960052, right: 960052 },
      date: "2021-08-01T15:01:03.686Z",
    },
  ];
  export let container;
</script>

<div
  class="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-lg rounded"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3 class="font-semibold text-xl text-blueGray-700">
          {title}
        </h3>
      </div>
    </div>
  </div>
  <div class="block w-full overflow-x-auto">
    <!-- Projects table -->
    <table class="items-center w-full bg-transparent border-collapse">
      <thead class="thead-light">
        <tr>
          <th
            class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
          >
            Datum
          </th>
          <th
            class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
          >
            Levý terč
          </th>
          <th
            class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
          >
            Pravý terč
          </th>
          <th
            class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
          >
            Výsledný čas
          </th>
          <th
            class="px-6 bg-blueGray-50 text-blueGray-500 align-middle border border-solid border-blueGray-100 py-3 text-xs uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left"
          >
            Akce
          </th>
        </tr>
      </thead>
      <tbody>
        {#each results as result}
          <tr
            class="border border-l-0 border-r-0 border-solid border-blueGray-100"
          >
            <td
              class="border-t-0 px-6 py-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap text-left"
            >
              {moment(result.date).calendar()}
            </td>
            <td
              class="border-t-0 px-6 py-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap"
            >
              {result.time.left}
            </td>
            <td
              class="border-t-0 px-6 py-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap"
            >
              {result.time.right}
            </td>
            <td
              class="border-t-0 px-6 py-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap"
            >
              {result.time.final || 0}
            </td>
            <td
              class="border-t-0 px-6 py-0 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap"
            >
              <ResultTemplatesTableActionBar {result} />
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
