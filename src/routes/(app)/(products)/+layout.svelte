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
	<div class="title-box"><h1><slot></slot></h1></div>
	{#each data.products as product, index}
		<button class="grid-item" on:click={getIndex}>
			<a href="{$page.url.pathname}/{product._id}">
				<img
					src={PUBLIC_CLOUDINARY_URL + product.pictures[0]}
					alt={$lng == 'gr' ? product.description : product.descriptionEn}
					data-index={index}
				/>
			</a>
		</button>
	{/each}
</div>

<style>
	.title-box {
		position: relative;
		grid-row: 1/2;
		grid-column: 1/-1;
		align-self: center;
		width: 100%;
	}
	h1 {
		font-weight: 400;
		word-spacing: -5px;
	}

	.container {
		position: relative;
		display: grid;
		grid-template-columns: repeat(auto-fill, 22vw);
		grid-template-rows: 100px;
		grid-auto-rows: 22vw;
		grid-gap: 2rem;
		justify-items: center;
		justify-content: center;
		align-items: center;
		position: relative;
		width: 100vw;
		min-height: 100vh;
		padding: 11rem 4rem;
		background-image: linear-gradient(
			155deg,
			hsl(0deg 0% 0%) 0%,
			hsl(30deg 30% 2%) 15%,
			hsl(31deg 14% 4%) 32%,
			hsl(31deg 8% 6%) 51%,
			hsl(30deg 5% 8%) 69%,
			hsl(30deg 4% 9%) 78%,
			hsl(30deg 3% 11%) 84%,
			hsl(30deg 3% 12%) 87%,
			hsl(30deg 3% 13%) 90%,
			hsl(30deg 3% 14%) 93%,
			hsl(30deg 2% 16%) 95%,
			hsl(30deg 2% 17%) 98%,
			hsl(30deg 2% 18%) 100%
		);
	}
	.grid-item {
		width: 100%;
		height: 100%;
		border: none;
		outline: none;
		padding: 0;
	}
	.grid-item img {
		display: block;
		width: 100%;
		height: 100%;
		object-fit: cover;
		transition: all 0.5s;
	}
	.grid-item img:hover {
		filter: brightness(60%);
		transform: scale(1.01);
		cursor: pointer;
	}
</style>
