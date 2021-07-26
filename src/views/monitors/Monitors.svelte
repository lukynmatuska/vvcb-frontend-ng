<script>
    import ResultsTableMonitors from "../../components/Results/ResultsTableMonitors.svelte";

    // export let location;
    export let race = {
        name: "VCB Rudice 2020",
        categories: [
            {
                category: {
                    name: "Muži",
                },
                results: [
                    {
                        team: {
                            name: "RC",
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
                    {
                        team: {
                            name: "Praha",
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
                    {
                        team: {
                            name: "VranOFF",
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
                    {
                        team: {
                            name: "Brno",
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
                    {
                        team: {
                            name: "Blansko",
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
                    {
                        team: {
                            name: "Hostěrádky-Rešov",
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
                ],
            },
            {
                category: {
                    name: "Ženy",
                },
                results: [
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
                ],
            },
            {
                category: {
                    name: "Veteráni",
                },
                results: [
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
                ],
            },
            {
                category: {
                    name: "Dorostenci",
                },
                results: [
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
                ],
            },
        ],
    };
</script>

<div
    class="flex flex-wrap items-center justify-between"
    style="align-items: stretch;"
>
    {#each race.categories as obj}
        <div class="w-full flex-1 mx-auto p-2">
            <ResultsTableMonitors
                title={obj.category.name}
                results={obj.results}
            />
        </div>
    {/each}
</div>
