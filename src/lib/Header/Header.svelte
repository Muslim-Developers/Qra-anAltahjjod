<script>
	export let title;
	export let backBtn = true;
	// export let backBtn_value = 'الفهرس';
</script>

<svelte:head>
	<title>{title}</title>
</svelte:head>

<header class="header">
	<h1 class="sura-name">{title}</h1>
	{#if backBtn}
		<a class="back-btn" href="/playlist">
			<span>الفهرس</span>
			<span class="material-symbols-outlined icon"> arrow_back_ios </span>
		</a>
	{/if}
</header>

<style>
	.header {
		background-color: #404040;
		color: #ddd;
		width: 100%;
		padding: 5px;
		display: flex;
		justify-content: left;
		position: relative;
		height: 50px;
	}

	.sura-name {
		display: block;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		font-size: 17px;
		line-height: 44px;
	}

	.back-btn {
		display: flex;
		justify-content: center;
		align-items: center;
		color: #ddd;
		text-decoration: none;
		margin-left: 15px;
		font-size: 15px;
	}

	.back-btn .icon {
		font-size: 18px;
		font-weight: 600;
	}
</style>
