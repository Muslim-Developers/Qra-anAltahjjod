<script>
    import "../css/style.css"
    import "../css/playlists.css"
    import "../css/side-menu.css"
    import Navber from "../lib/components/navber.svelte";
    import { openSideBar } from '$lib/general-functions';
    import sideMenu from "$lib/sideMenu.json"
    let sideMenuItems = Object.entries(sideMenu).map(([key, value]) => ({ key, value }));

</script>

<main>
    <div class="cover" on:click={() => openSideBar(true)}></div>
    <slot></slot>
</main>
<sub>
    <Navber title = "" burgerMenu = {false}/>
    <div class="list">
        {#each sideMenuItems as item}
            <div class="item">
                <a class="item-content no-hover" href={ item.value } on:click={() => openSideBar(true)}>
                    { item.key }
                </a>
            </div>
        {/each}
    </div>
</sub>