<script>
	import { PUBLIC_CLOUDINARY_URL } from '$env/static/public';
	import { page } from '$app/stores';

	export let data;
	let productIndex;
	let carousel = false;

	function getIndex(e) {
		productIndex = e.target.dataset.index;
		// carousel = true;
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
					alt={product.description}
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
		align-self: flex-end;
		width: 100%;
		font-weight: 600;
	}

	.container {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(230px, 1fr));
		grid-template-rows: 80px auto;
		grid-gap: 50px;
		justify-items: center;
		align-items: center;
		position: relative;
		width: 100vw;
		min-height: 100vh;
		padding: 110px;
		background-color: rgb(5, 5, 5);
	}
	.grid-item {
		width: 100%;
		border: 1px solid #e9e6e6;
		border-radius: 5px;
	}
	.grid-item img {
		display: block;
		max-width: 100%;
		height: auto;
		padding: 2px;
		border: 4px solid rgb(5, 5, 5);
		border-radius: 5px;
		color: #e9e6e6;

		/* border-bottom: 2px solid #e9e6e6; */
		transition: all 0.5s;
	}
	.grid-item img:hover {
		filter: brightness(130%);
		/* transform: scale(1.01); */
		cursor: pointer;
	}
</style>
