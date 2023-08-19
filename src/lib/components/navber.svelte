<script>
    import "../../css/menu.css"
    export let title = "الفهرس";
    export let burgerMenu = true;
    export let back = false;
    import { openSideBar } from '$lib/general-functions';
</script>

<nav></nav>
<nav class="float-nav">
    <div class="containerr">
        <span class={`edge ${back ? "back-nav-button" : ""}`}><i></i></span>
        <p>{ title }</p>
        {#if burgerMenu && !back}
            <span class="edge" on:click={() => openSideBar(false)}><i class="fa-solid fa-bars"></i></span>
        {/if}
        {#if back}
            <a href="/" class="edge back-nav-button"> الفهرس <i class="fa-solid fa-chevron-left"></i></a>
        {/if}
    </div>
</nav>