<script>
	import { fade } from 'svelte/transition';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
	import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';
	import GoArrowSmallRight from 'svelte-icons/go/GoArrowSmallRight.svelte';
	import GoArrowSmallLeft from 'svelte-icons/go/GoArrowSmallLeft.svelte';
	export let images;

	let currentSlideItem = 0;
	const nextImage = () => {
		currentSlideItem = (currentSlideItem + 1) % images.length;
	};
	const prevImage = () => {
		if (currentSlideItem != 0) {
			currentSlideItem = (currentSlideItem - 1) % images.length;
		} else {
			currentSlideItem = images.length - 1;
		}
	};
</script>

<div class="box">
	<figure>
		{#each [images[currentSlideItem]] as item (currentSlideItem)}
			<img
				in:fade={{ duration: 1000 }}
				src={item.url}
				alt={item.description}
				width={1000}
				height={600}
			/>
		{/each}
	</figure>
	<div class="carousel-buttons">
		<button class="btn-left" on:click={() => prevImage()}><FaArrowLeft /></button>
		<button class="btn-right" on:click={() => nextImage()}><FaArrowRight /></button>
	</div>
</div>

<style>
	.box {
		display: flex;
		flex-direction: column;
		justify-content: end;
		align-items: center;
		width: 50vw;
		height: 70vh;
	}

	img {
		object-fit: contain;
		margin: 10px;
	}
	button {
		width: 50px;
		height: 25px;
		margin: 10px;
		color: aliceblue;
		background-color: transparent;
		border: none;
		border-radius: 50%;
		transition: transform 0.5s;
	}
	.btn-right:hover {
		transform: translateX(3px);
	}
	.btn-left:hover {
		transform: translateX(-3px);
	}
</style>
