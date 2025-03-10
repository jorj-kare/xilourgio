<script>
	import { fade } from 'svelte/transition';
	import { PUBLIC_CLOUDINARY_URL } from '$env/static/public';
	import { lng } from '$stores';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
	import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';

	export let images;
	export let indicators = false;
	export let path = '/';

	let currentSlideItem = 0;
	function nextImage() {
		currentSlideItem = (currentSlideItem + 1) % images.pictures.length;
	}

	function prevImage() {
		if (currentSlideItem != 0) {
			currentSlideItem = (currentSlideItem - 1) % images.pictures.length;
		} else {
			currentSlideItem = images.pictures.length - 1;
		}
	}

	function changeImg(i) {
		currentSlideItem = i;
	}
</script>

<figure transition:fade={{ duration: 150 }}>
	<div class="box-go-back-btn">
		<a href={path}>X</a>
	</div>
	{#each [images.pictures[currentSlideItem]] as item (currentSlideItem)}
		<img
			in:fade={{ duration: 1000 }}
			src={PUBLIC_CLOUDINARY_URL + item}
			alt={$lng == 'gr' ? images.description : images.descriptionEn}
			width={1000}
			height={600}
		/>
	{/each}
	{#if indicators}
		<div class="box-indicators">
			{#each images.pictures as img, i}
				<button
					on:click={() => changeImg(i)}
					class:current={i == currentSlideItem}
					class="indicator"
				></button>
			{/each}
		</div>
	{/if}
	<div class="carousel-buttons">
		<button class="btn-left" on:click={() => prevImage()}><FaArrowLeft /></button>
		<button class="btn-right" on:click={() => nextImage()}><FaArrowRight /></button>
	</div>
	{#if $lng == 'gr'}
		<p>{images.description}</p>
	{:else if $lng == 'en' && images.descriptionEn}
		<p>{images.descriptionEn}</p>
	{/if}
</figure>

<style>
	figure {
		display: grid;
		grid-template-columns: 100%;
		grid-template-rows: repeat(3, auto) max-content 8rem;
		align-items: center;
		justify-content: center;
		height: 100vh;
		width: 100vw;
		background-color: var(--color-primary);
	}

	img {
		grid-column: 1/2;
		grid-row: 2/4;
		justify-self: center;
		width: 80%;
		height: 100%;
		object-fit: contain;
		overflow: hidden;
	}

	.carousel-buttons {
		grid-row: 4/5;
		grid-column: 1/2;
		justify-self: center;
		align-self: center;
		display: flex;
		gap: 3rem;
	}
	button {
		width: 5rem;
		height: 2.5rem;
		margin: 2.5rem 0px;
		color: var(--color-secondary);
		background-color: transparent;
		border: none;
		transition: all 0.5s;
	}
	.btn-right:hover {
		transform: translateX(3px);
		color: var(--color-success);
	}
	.btn-left:hover {
		transform: translateX(-3px);
		color: var(--color-success);
	}
	p {
		grid-row: 5/6;
		max-width: 120ch;
		justify-self: center;
		font-size: 2rem;
		font-weight: 200;
		padding-bottom: 2rem;
	}
	.box-go-back-btn {
		grid-column: 1/2;
		grid-row: 1/2;
		margin: 4rem;
		& a {
			text-decoration: none;
			font-size: 2.5rem;
			font-weight: 300;
			-webkit-tap-highlight-color: transparent;
			transition: all 0.5s;
			&:hover {
				color: var(--color-error);
			}
		}
	}

	.box-indicators {
		grid-column: 1/2;
		grid-row: 3/4;
		justify-self: center;
		align-self: flex-start;
		display: flex;
		color: var(--color-primary);
		z-index: 10;
		gap: 3rem;
	}
	.indicator {
		width: 1.5rem;
		height: 1.5rem;
		border-radius: 100%;
		background-color: var(--color-secondary);
	}
	.current {
		background-color: rgba(5, 5, 5, 0.488);
	}
	@media (max-width: 992px) {
		.carousel-buttons {
			align-self: flex-start;
		}
		img {
			width: 90%;
		}
		.box-go-back-btn {
			margin: none;
			margin-left: 3rem;
		}
	}
	@media (max-width: 640px) {
		figure {
			grid-template-rows: 10rem repeat(2, auto) max-content 8rem;
		}
		img {
			width: 95%;
		}
		p {
			padding-inline: 1rem;
			text-align: center;
			padding-bottom: 4rem;
		}
		.box-go-back-btn {
			margin: 2rem;
		}
	}
</style>
