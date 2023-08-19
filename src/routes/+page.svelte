<script>
    import Navber from "../lib/components/navber.svelte";
    import quran from "$lib/quran.json"
    import "../css/playlists.css"
    const getName = (surahNum) => quran[`${surahNum}`]["name"];
</script>

<Navber title={"الفهرس"}/>
<div class="list">
    {#each [...Array(114)] as _, surahNum}
        <div class="item">
            <a class="item-content" href={`/${surahNum + 1}`}>
                { surahNum + 1} - { getName(surahNum + 1) }
            </a>
        </div>
    {/each}
</div>