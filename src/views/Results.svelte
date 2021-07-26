<script>
    // core components
    import AuthNavbar from "../components/Navbars/AuthNavbar.svelte";
    import Footer from "../components/Footers/Footer.svelte";
    import ResultsTable from "../components/Results/ResultsTable.svelte";

    export let location;
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
                            name: "OC",
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
    document.title = `${race.name} | Výsledky Velké Ceny Blanenska`;
</script>

<div>
    <AuthNavbar />
    <main>
        <div
            class="relative pt-32 pb-32 flex content-center items-center justify-center"
            style="min-height: 35vh;"
        >
            <div
                class="absolute top-0 w-full h-full bg-center bg-cover"
                style="background-image: url(/assets/img/20170820130354_IMG_6505.jpeg);"
            >
                <span
                    id="blackOverlay"
                    class="w-full h-full absolute opacity-50 bg-black"
                />
            </div>
            <div class="container relative mx-auto">
                <div class="items-center flex flex-wrap">
                    <div
                        class="w-full lg:w-6/12 px-4 ml-auto mr-auto text-center"
                    >
                        <div class="pr-12">
                            <h1 class="text-white font-semibold text-5xl">
                                {race.name}
                            </h1>
                            <p class="mt-4 text-lg text-blueGray-200">
                                Rychle a přehledně na jednom místě.
                            </p>
                        </div>
                    </div>
                </div>
            </div>
            <div
                class="top-auto bottom-0 left-0 right-0 w-full absolute pointer-events-none overflow-hidden h-70-px"
                style="transform: translateZ(0);"
            >
                <svg
                    class="absolute bottom-0 overflow-hidden"
                    xmlns="http://www.w3.org/2000/svg"
                    preserveAspectRatio="none"
                    version="1.1"
                    viewBox="0 0 2560 100"
                    x="0"
                    y="0"
                >
                    <polygon
                        class="text-blueGray-200 fill-current"
                        points="2560 0 2560 100 0 100"
                    />
                </svg>
            </div>
        </div>

        <section class="pb-20 bg-blueGray-200 -mt-24">
            <div class="container mx-auto px-4">
                {#each race.categories as obj}
                    <div class="flex flex-wrap mt-4">
                        <div class="w-full mb-12 px-4">
                            <ResultsTable
                                title={obj.category.name}
                                results={obj.results}
                            />
                        </div>
                    </div>
                {/each}
            </div>
        </section>
    </main>
    <Footer />
</div>
