<script>
	import { PUBLIC_CLOUDINARY_URL } from '$env/static/public';
	import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
	import { fade } from 'svelte/transition';
	import FaArrowRight from 'svelte-icons/fa/FaArrowRight.svelte';
	import FaArrowLeft from 'svelte-icons/fa/FaArrowLeft.svelte';

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
			<div class="close-icon" on:click>
				<IoIosClose></IoIosClose>
			</div>
			<img
				in:fade={{ duration: 1000 }}
				src={PUBLIC_CLOUDINARY_URL + item}
				alt={images.description}
				width={1000}
				height={600}
			/>
		{/each}
		<div class="carousel-buttons">
			<button class="btn-left" on:click={() => prevImage()}><FaArrowLeft /></button>
			<button class="btn-right" on:click={() => nextImage()}><FaArrowRight /></button>
		</div>
	</figure>
	<p>{images.description}</p>
</div>

<style>
	.box {
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		width: 100vw;
		min-height: 100vh;
		background-color: rgb(5, 5, 5);
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
		margin-top: 15px;
		border-radius: 15px;
		color: #e9e6e6;
		border: 3px solid #e9e6e6;
	}
	p {
		padding: 10px 20px;
		max-width: 120ch;
		margin-top: 5px;

		color: #e9e6e6;
	}

	img {
		grid-column: 1/2;
		grid-row: 1/2;
		width: 100%;
		height: 100%;
		padding-top: 50px;
		padding-left: 15px;
		object-fit: contain;
		overflow: hidden;
	}
	.carousel-buttons {
		grid-row: 2/3;
		grid-column: 1/2;
		justify-self: center;
		align-self: center;
	}
	button {
		width: 50px;
		height: 25px;
		margin: 25px 0px;
		color: aliceblue;
		background-color: transparent;
		border: none;
		border-radius: 50%;
		transition: all 0.5s;
	}
	.btn-right:hover {
		transform: translateX(3px);
		color: #1c8437;
	}
	.btn-left:hover {
		transform: translateX(-3px);
		color: #1c8437;
	}
	.close-icon {
		grid-column: 2/3;
		grid-row: 1/2;
		align-self: flex-start;
		justify-self: end;
		width: 5.5rem;
		margin: 5px;
		color: #fafafa;
		transition: all 0.5s;
	}
	.close-icon:hover {
		transform: rotate(180deg);
		color: #660b0b;
	}
</style>
