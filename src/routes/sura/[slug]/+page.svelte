<script>
	import { fade } from 'svelte/transition';

	import Header from '$lib/Header/Header.svelte';
	import Modal from '$lib/Modal/Modal.svelte';
	import Loader from '$lib/Loader/Loader.svelte';
	import './sura.css';
	export let data;

	let showModal = false;

	let sura = data.sura; // To hold the imported data

	let modalTitle = 'title';
	let location;
	let meaning;

	function openModal(data) {
		showModal = true;
		modalTitle = data['from-to'].join('-');
		location = data.location;
		meaning = data.meaning;
	}

	function closeModal() {
		showModal = false;
	}
</script>

{#if sura}
	<Header title={sura.name} />
	{#if showModal}
		<div in:fade={{ duration: 150 }} out:fade={{ duration: 300 }}>
			<Modal title={modalTitle} {location} {meaning} {closeModal} />
		</div>
	{/if}
	<main>
		<h2 class="basmalah">
			{sura.id === 1 ? 'بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ﴿1﴾' : 'بسم الله الرحمن الرحيم'}
		</h2>
		<div class="sura-ayat">
			{#each sura.parts as part}
				<!-- svelte-ignore a11y-no-static-element-interactions -->
				<!-- svelte-ignore a11y-click-events-have-key-events -->
				<b id={part.id} on:click={() => openModal(part)} style="background-color: {part.color};">
					{part.content}
				</b>
			{/each}
		</div>
	</main>
{:else}
	<div class="center">
		<Loader color="#444" size="70" />
	</div>
{/if}

<style>
	.center {
		position: absolute;
		width: 100%;
		height: 100%;
		display: flex;
	}
</style>
