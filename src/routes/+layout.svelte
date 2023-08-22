<script>
	import { linear } from 'svelte/easing';
	import { slide, fly } from 'svelte/transition';

	export let data;

	let dir = -1;
	$: if (data.url === '/playlist') {
		dir = 1;
	} else dir = -1;

	// $: console.log(dir);
	// function transition(node, { delay = 0, duration = 300, easing = linear }) {
	// 	return {
	// 		delay,
	// 		duration,
	// 		easing,
	// 		css: (t, u) => {
	// 			return `
	// 			transform: translateX(${u * 100 * dir}%);
	// 		`;
	// 		}
	// 	};
	// }
</script>

<svelte:head>
	<link
		rel="stylesheet"
		href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined:opsz,wght,FILL,GRAD@48,400,0,0"
	/>
</svelte:head>

<!-- {#key data.url}
	<div in:fly={{ x: -300 * dir, delay: 0, duration: 1000 }} out:fly={{ x: 300 * dir, duration: 0 }}> -->
<slot />

<!-- </div>
{/key} -->

<style>
	@import url('https://fonts.googleapis.com/css2?family=Cairo&display=swap');

	:global(*) {
		margin: 0;
		padding: 0;
		border: 0;
		vertical-align: baseline;
		font: inherit;
		font-size: 100%;
		box-sizing: border-box;
		font-family: inherit;
	}

	:global(html) {
		overflow-x: hidden;
		font-family: 'Cairo', sans-serif;
	}

	/* div {
		width: 100vw;
		height: 100vh;
	} */
</style>
