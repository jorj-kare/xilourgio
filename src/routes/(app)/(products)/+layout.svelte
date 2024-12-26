<script>
	import { PUBLIC_CLOUDINARY_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import { lng } from '$stores';
	export let data;
	let productIndex;

	function getIndex(e) {
		productIndex = e.target.dataset.index;
	}
</script>

<div class="container">
	<div class="title-box"><slot></slot></div>
	{#each data.products as product, index}
		<!-- svelte-ignore a11y-click-events-have-key-events -->
		<!-- svelte-ignore a11y-no-static-element-interactions -->
		<div class="grid-item" on:click={getIndex}>
			<a href="{$page.url.pathname}/{product._id}">
				<img
					src={PUBLIC_CLOUDINARY_URL + product.pictures[0]}
					alt={$lng == 'gr' ? product.description : product.descriptionEn}
					data-index={index}
				/>
			</a>
		</div>
	{/each}
</div>

<style>
	.title-box {
		position: relative;
		grid-row: 1/2;
		grid-column: 1/-1;
		align-self: center;
		width: 100%;
		font-weight: 600;
	}

	.container {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fill, 22vw);
		grid-template-rows: 100px;
		grid-auto-rows: 22vw;
		grid-gap: 20px;
		justify-items: center;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100vw;
		min-height: 100vh;
		padding: 110px 40px;
		background: rgb(64, 64, 64);
		background: linear-gradient(
			0deg,
			rgba(64, 64, 64, 1) 0%,
			rgba(0, 0, 0, 1) 75%,
			rgba(0, 0, 0, 1) 100%
		);
	}
	.grid-item {
		width: 100%;
		height: 100%;
	}
	.grid-item img {
		display: block;
		width: 100%;
		height: 100%;
		color: #e9e6e6;
		object-fit: cover;
		transition: all 0.5s;
	}
	.grid-item img:hover {
		filter: brightness(60%);
		transform: scale(1.01);
		cursor: pointer;
	}
</style>
