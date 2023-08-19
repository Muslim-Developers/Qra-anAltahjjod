<script>
    import Navber from "$lib/components/navber.svelte";
    import Modal from "$lib/components/modal.svelte";
    // Get surah number from the link
    export let data;
    let surahNum = data.number;
    
    // Get surah data from lib/quran.json
    import quran from "$lib/quran.json"
    let name = quran[`${surahNum}`]["name"];
    let arr = quran[`${surahNum}`]["content"]
    
    // Get tafseer from lib/tafseer.json
    import tafseer from "$lib/tafseer.json"
    let fromModal;
    let toModal;
    let tafseerModal;
    let note;
    let titleModal;
    let open = [false]
    async function openModal(title) {
        if (title.indexOf("from") < 2) return;
        titleModal = title;
        note = await localStorage.getItem(title) || '';
        let from = "";
        let to = "";
        let endFrom = false
        for (let i = title.indexOf('m'); i < title.length; i++) {
            if (title[i] === 't') endFrom = true;
            if (!endFrom) from += title[i].replace("m", '');
            else to += title[i].replace("t", '').replace("o", '');
        }

        fromModal = from;
        toModal = to;
        tafseerModal = tafseer[title];
        document.querySelector("body").style.overflow = "hidden";
        open[0] = true;
    }

</script>

<Navber title={name} back={true}/>
<Modal title = {titleModal} from = {fromModal} to = {toModal} tafseer = {tafseerModal} open = {open} note = {note}/>
<div view-title={surahNum} class="surah-container">
    <div style="direction:rtl">
        <!-- If condition because of سورة التوبة لا تبدأ بالبسملة-->
        {#if surahNum!=='9'} 
            <center>
                <h2>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ{surahNum==='1' ? '﴿1﴾' : ''}</h2>
            </center>            
        {/if}
            {#each arr as ayat}
                <b style={`background-color:#${ayat["id"]};`} id={ayat["id"]}
                on:click={() => {openModal(ayat["title"])}}>
                    { ayat["ayat"] }    
                </b>
            {/each}
  
        </div>
    </div> 
