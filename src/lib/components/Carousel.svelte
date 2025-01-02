<script>
	import { PUBLIC_CLOUDINARY_URL } from '$env/static/public';
	import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
	import { fade } from 'svelte/transition';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
	import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';
	import { lng } from '$stores';
	export let images;

	let currentSlideItem = 0;
	const nextImage = () => {
		currentSlideItem = (currentSlideItem + 1) % images.pictures.length;
	};
	const prevImage = () => {
		if (currentSlideItem != 0) {
			currentSlideItem = (currentSlideItem - 1) % images.pictures.length;
		} else {
			currentSlideItem = images.pictures.length - 1;
		}
	};
</script>

<div class="box">
	<figure transition:fade={{ duration: 150 }}>
		{#each [images.pictures[currentSlideItem]] as item (currentSlideItem)}
			<button class="close-icon" on:click>
				<IoIosClose></IoIosClose>
			</button>
			<img
				in:fade={{ duration: 1000 }}
				src={PUBLIC_CLOUDINARY_URL + item}
				alt={$lng == 'gr' ? images.description : images.descriptionEn}
				width={1000}
				height={600}
			/>
		{/each}
		<div class="carousel-buttons">
			<button class="btn-left" on:click={() => prevImage()}><FaArrowLeft /></button>
			<button class="btn-right" on:click={() => nextImage()}><FaArrowRight /></button>
		</div>
	</figure>
	{#if $lng == 'gr'}
		<p>{images.description}</p>
	{:else if $lng == 'en' && images.descriptionEn}
		<p>{images.descriptionEn}</p>
	{/if}
</div>

<style>
	.box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		min-height: 100vh;
		background-color: var(--color-primary);
	}
	figure {
		position: relative;
		display: grid;
		grid-template-columns: 1fr 4rem;
		grid-template-rows: auto auto;
		align-items: center;
		justify-content: center;
		height: 85vh;
		width: 65vw;
		margin-top: 1.5rem;
		border-radius: 1.5rem;
		border: 3px solid var(color-secondary);
	}

	img {
		grid-column: 1/2;
		grid-row: 1/2;
		width: 100%;
		height: 100%;
		padding-top: 5rem;
		padding-left: 1.5rem;
		object-fit: contain;
		overflow: hidden;
	}

	p {
		padding: 1rem 2rem;
		max-width: 120ch;
		margin-top: 0.5rem;
	}
	.carousel-buttons {
		grid-row: 2/3;
		grid-column: 1/2;
		justify-self: center;
		align-self: center;
	}
	button {
		width: 5rem;
		height: 2.5rem;
		margin: 2.5rem 0px;
		color: var(--color-secondary);
		background-color: transparent;
		border: none;
		border-radius: 50%;
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
	.close-icon {
		grid-column: 2/3;
		grid-row: 1/2;
		align-self: flex-start;
		justify-self: end;
		width: 5.5rem;
		height: auto;
		margin: 0.5rem;
		background-color: transparent;
		border: none;
		outline: none;
		color: var(--color-secondary);
		transition: all 0.5s;
		&:hover {
			transform: rotate(180deg);
			color: var(--color-error);
		}
	}
</style>
