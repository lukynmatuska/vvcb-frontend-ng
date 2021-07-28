<script>
    import ResultsTableMonitors from "../../components/Results/ResultsTableMonitors.svelte";
    document.title = "Monitors | VVCB";

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
                            name: "Sychotín A",
                            district: "BK",
                        },
                        time: {
                            left: "17,45",
                            right: "17,39",
                            final: "17,45",
                        },
                        points: 25,
                    },
                    {
                        team: {
                            name: "Míchov",
                            district: "BK",
                        },
                        time: {
                            left: "17,25",
                            right: "17,55",
                            final: "17,55",
                        },
                        points: 22,
                    },
                    {
                        team: {
                            name: "Sychotín B",
                            district: "BK",
                        },
                        time: {
                            left: "18,19",
                            right: "17,60",
                            final: "18,19",
                        },
                        points: 20,
                    },
                    {
                        team: {
                            name: "Bořitov A",
                            district: "BK",
                        },
                        time: {
                            left: "18,98",
                            right: "18,1",
                            final: "18,98",
                        },
                        points: 18,
                    },
                    {
                        team: {
                            name: "Bořitov B",
                            district: "BK",
                        },
                        time: {
                            left: "18,97",
                            right: "19,43",
                            final: "19,43",
                        },
                        points: 17,
                    },
                    {
                        team: {
                            name: "Pamětice",
                            district: "BK",
                        },
                        time: {
                            left: "19,17",
                            right: "19,51",
                            final: "19,51",
                        },
                        points: 16,
                    },
                    {
                        team: {
                            name: "Kotvrdovice",
                            district: "BK",
                        },
                        time: {
                            left: "19,83",
                            right: "19,13",
                            final: "19,83",
                        },
                        points: 15,
                    },
                    {
                        team: {
                            name: "Ostrov u Macochy",
                            district: "BK",
                        },
                        time: {
                            left: "19,84",
                            right: "20,17",
                            final: "20,17",
                        },
                        points: 14,
                    },
                    {
                        team: {
                            name: "Březina",
                            district: "BK",
                        },
                        time: {
                            left: "29,70",
                            right: "25,18",
                            final: "29,70",
                        },
                        points: 13,
                    },
                    {
                        team: {
                            name: "Brumov",
                            district: "BK",
                        },
                        time: {
                            left: "19,77",
                            right: "33,77",
                            final: "33,77",
                        },
                        points: 12,
                    },
                    {
                        team: {
                            name: "Sudice",
                            district: "BK",
                        },
                        time: {
                            left: "39,81",
                            right: "39,08",
                            final: "39,81",
                        },
                        points: 11,
                    },
                    {
                        team: {
                            name: "Černovice",
                            district: "BK",
                        },
                        time: {
                            left: "50,21",
                            right: "52,74",
                            final: "52,74",
                        },
                        points: 10,
                    },
                    {
                        team: {
                            name: "Pohodlí",
                            district: "SY",
                        },
                        time: {
                            left: "N",
                            right: "N",
                            final: "N",
                        },
                        points: 0,
                    },
                    {
                        team: {
                            name: "Jabloňany",
                            district: "BK",
                        },
                        time: {
                            left: "N",
                            right: "21,01",
                            final: "N",
                        },
                        points: 0,
                    },
                    {
                        team: {
                            name: "Žernovník",
                            district: "BK",
                        },
                        time: {
                            left: "N",
                            right: "N",
                            final: "N",
                        },
                        points: 0,
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
<div class="sponsors">
    <p class="text-center text-2xl">Sponzoři</p>
    <div class="flex flex-wrap items-center justify-center">
        <img src="/assets/img/sponsors/bas.png" alt="BAS Rudice" class="p-6" />
        <img
            src="/assets/img/sponsors/sawtronics.svg"
            alt="SAWTRONICS"
            class="px-6 flex-1"
        />
        <img src="/assets/img/sponsors/list.png" alt="Sponzoři VCB" />
    </div>
</div>

<style>
    .sponsors {
        position: absolute;
        bottom: 0px;
        padding-bottom: 0.5vh; /*max-height: 13vh;*/
        width: 100vw;
        background-color: rgba(255, 255, 255, 0.55);
    }

    .sponsors img {
        max-height: 10vh;
    }
</style>
