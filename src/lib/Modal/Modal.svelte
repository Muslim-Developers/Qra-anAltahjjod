<script>
	import { onMount } from 'svelte';

	export let title;
	export let closeModal;
	export let location;
	export let meaning;

	let note = '';
	function bgClickHandler(e) {
		if (e.target === this) {
			closeModal();
		}
	}

	onMount(() => {
		if (!localStorage.getItem(location)) return;
		note = localStorage.getItem(location);
	});

	function saveNoteHandler() {
		localStorage.setItem(location, note);
		// alert(`"${note}" \n your note is saved`);
		closeModal();
	}
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div class="modal-backdrop" on:click={bgClickHandler}>
	<div class="modal-backdrop-bg" />

	<div class="modal-wrapper">
		<div class="modal">
			<header class="modal-header">
				<button on:click={closeModal}> رجوع </button>
				<h1 class="title">{title}</h1>
			</header>
			<div class="modal-content">
				<div class="card">
					<div class="item item-text-wrap">
						<div class="list">
							<label>
								<p>التّفْصيْلُ الموضوعِي {title}:<br />{meaning}</p>
								<!-- <br /> -->
								<h2>ملاحظاتك:<br /> {note}</h2>
								<span class="input-label">إضافة ملاحظة</span>
								<input bind:value={note} type="text" placeholder="اكتـب ملاحـظتك" ng-model="note" />
							</label>
							<button class="button button-full button-positive" on:click={saveNoteHandler}>
								حفظ
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	</div>
</div>

<style>
	.modal-backdrop,
	.modal-backdrop-bg {
		position: fixed;
		top: 0;
		left: 0;
		z-index: 5;
		width: 100%;
		height: 100%;
	}

	.modal-backdrop-bg {
		transition: opacity 300ms ease-in-out;
		background-color: #000;
		pointer-events: none;
	}

	.modal-backdrop-bg {
		opacity: 0.5;
	}

	.modal {
		width: 50%;
		height: 50%;
		min-width: 400px;
		margin: auto;
		background-color: #414042;
		border-radius: 10px;
		box-shadow: 5px 5px 8px #414042;
		z-index: 10;
		position: absolute;
		top: 0;
		right: 0;
		bottom: 0;
		left: 0;
		overflow: auto;
	}

	@media only screen and (max-width: 425px) {
		/*Small smartphones [0px -> 425px]*/
		.modal {
			min-width: 90%;
		}
	}

	.modal-header {
		background: #404040;
		color: #ddd;
		padding: 5px;
		display: flex;
		justify-content: right;
		height: 50px;
		position: sticky;
		top: 0;
	}

	.modal-header .title {
		display: block;
		position: absolute;
		top: 0;
		left: 50%;
		transform: translateX(-50%);
		font-size: 17px;
		line-height: 44px;
	}

	.modal-header button {
		font-weight: bolder;
		margin-right: 2%;
		border-color: transparent;
		background: none;
		box-shadow: none;
		color: #ddd;
		font-size: 17px;
		padding-right: 2px;
		padding-left: 2px;
		line-height: 32px;
	}

	.modal-content .card .item .list .button {
		background: #414042;
		padding: 1%;
		color: #fcfcfc;
		max-width: 35%;
		margin: auto;
		font-size: 24px;
		border-radius: 10px;
	}

	.modal-content .card .item .list .button:hover {
		background: none;
		color: #414042;
		box-shadow: 5px 5px 8px #414042;
	}

	.modal-content .card .item .list .button {
		background: #414042;
		padding: 1%;
		color: #fcfcfc;
		max-width: 35%;
		width: 100%;
		margin: auto;
		font-size: 24px;
		border-radius: 10px;
	}

	.modal-content .card .item .list .button:hover {
		background: none;
		color: #414042;
		box-shadow: 5px 5px 8px #414042;
	}

	.card {
		/* overflow: hidden; */
		margin: 5px 10px 10px;
		border-radius: 2px;
		background-color: #fff;
		box-shadow: 0 1px 3px rgba(0, 0, 0, 0.3);
	}
	.card .item {
		border-left: 0;
		border-right: 0;
	}
	.card .item:first-child {
		border-top: 0;
	}
	.card .item:last-child {
		border-bottom: 0;
	}

	.list h2 {
		background: #000;
		color: #fff;
		padding: 10px;
	}

	.list label {
		display: block;
	}

	.list label p {
		margin-bottom: 25px;
	}

	.list button {
		display: block;
		font-family: '-apple-system', 'Helvetica Neue', 'Roboto', 'Segoe UI', sans-serif;
	}

	.list input {
		width: 100%;
		height: 40px;
		border: 0;
		outline: 0;
		font-size: 16px;
		font-weight: normal;
		font-family: '-apple-system', 'Helvetica Neue', 'Roboto', 'Segoe UI', sans-serif;
		line-height: 1.2;
		margin-bottom: 30px;
	}
	.list input:focus-visible {
		border-bottom: #ccc 1px solid;
	}
	.card .item {
		padding: 16px;
	}

	.item p {
		color: #666;
		font-size: 14px;
		margin-bottom: 2px;
	}

	.item h2 {
		margin: 0 0 2px 0;
		font-size: 16px;
		font-weight: normal;
		font-family: '-apple-system', 'Helvetica Neue', 'Roboto', 'Segoe UI', sans-serif;
		line-height: 1.2;
	}

	.input-label {
		display: table;
		padding: 7px 10px 7px 0px;
		max-width: 200px;
		color: #444;
		font-size: 14px;
	}
</style>
