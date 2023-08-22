<script>
	import Header from '$lib/Header/Header.svelte';
	export let data;
</script>

<Header title="الفهرس" backBtn={false} />
<main>
	<ul>
		{#each data.playlist as { title, id }}
			<li><a href="/sura/{id}">{id} - {title}</a></li>
		{/each}
	</ul>
</main>

<style>
	ul li {
		border-color: #ddd;
		background-color: #fff;
		color: #444;
		position: relative;
		z-index: 2;
		display: block;
		margin: -1px;
		border-width: 1px;
		border-style: solid;
		font-size: 16px;
	}

	ul li a {
		display: block;
		width: 100%;
		padding: 16px 49px 16px 16px;
		color: #444;
		text-decoration: none;
		line-height: 20px;
	}
</style>
