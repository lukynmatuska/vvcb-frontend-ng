<script>
  // can be one of light or dark
  export let color = "light";

  // Table title
  export let title = "Muži";

  export let results = [
    {
      team: {
        name: "Rudice",
      },
      time: {
        left: "10,00",
        right: "10,01",
        final: "N",
      },
      media: {
        youtube: "https://youtu.be/S9nv-kwQOLQ/",
      },
    },
    {
      team: {
        name: "Ostrov u Macochy",
      },
      time: {
        left: "10,10",
        right: "11,11",
        final: "11,11",
      },
      media: {
        youtube: "https://youtu.be/IFel31pllfQ",
      },
    },
  ];
  let i = 1;
</script>

<div
  class="relative flex flex-col flex-1 min-w-0 break-words w-full mb-auto shadow-lg rounded {color ===
  'light'
    ? 'bg-white'
    : 'bg-red-800 text-white'}"
>
  <div class="rounded-t mb-0 px-4 py-3 border-0">
    <div class="flex flex-wrap items-center">
      <div class="relative w-full px-4 max-w-full flex-grow flex-1">
        <h3
          class="font-semibold text-2xl {color === 'light'
            ? 'text-blueGray-700'
            : 'text-white'}"
        >
          {title}
        </h3>
      </div>
    </div>
  </div>
  <div class="block w-full overflow-x-auto">
    <!-- Projects table -->
    <table class="items-center w-full bg-transparent border-collapse">
      <thead>
        <tr>
          <th
            class="px-1 align-middle border border-solid py-1 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            &nbsp;
          </th>
          <th
            class="px-6 align-middle border border-solid py-1 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            Tým
          </th>
          <th
            class="px-2 align-middle border border-solid py-1 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            LP
          </th>
          <th
            class="px-2 align-middle border border-solid py-1 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            PP
          </th>
          <th
            class="px-2 align-middle border border-solid py-1 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            V
          </th>
          <th
            class="px-2 align-middle border border-solid py-1 text-base uppercase border-l-0 border-r-0 whitespace-nowrap font-semibold text-left {color ===
            'light'
              ? 'bg-blueGray-50 text-blueGray-500 border-blueGray-100'
              : 'bg-red-700 text-red-200 border-red-600'}"
          >
            B
          </th>
        </tr>
      </thead>
      <tbody>
        {#each results as result}
          <tr>
            <td
              class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1 text-right text-base"
            >
              {i++}.
            </td>
            <th
              class="border-t-0 px-6 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-1 text-left text-base"
            >
              <span
                class="font-bold {color === 'light'
                  ? 'btext-blueGray-600'
                  : 'text-white'}"
              >
                {result.team.name}
              </span>
            </th>
            <td
              class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-base"
            >
              {result.time.left}
            </td>
            <td
              class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-base"
            >
              {result.time.right}
            </td>
            <td
              class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-base"
            >
              {result.time.final}
            </td>
            <td
              class="border-t-0 px-2 align-middle border-l-0 border-r-0 text-xs whitespace-nowrap p-2 text-base"
            >
              x
            </td>
          </tr>
        {/each}
      </tbody>
    </table>
  </div>
</div>
