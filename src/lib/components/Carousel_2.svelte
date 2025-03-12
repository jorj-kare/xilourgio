<script>
	import Icon from '@iconify/svelte';
	import { fade } from 'svelte/transition';

	export let images;
	export let autoplay = false;
	export let arrows = false;
	export let indicators = false;
	export let numbered = false;
	export let sec = 10000;
	let currentImg = 0;

	function changeImg(i) {
		currentImg = i;
	}

	function nextImg() {
		if (currentImg == images.length - 1) {
			currentImg = 0;
		} else {
			currentImg++;
		}
	}

	function previousImg() {
		if (currentImg == 0) {
			currentImg = images.length - 1;
		} else {
			currentImg--;
		}
	}

	$: if (autoplay) {
		setInterval(() => {
			nextImg();
		}, sec);
	}
</script>

<div class="container">
	{#each [images[currentImg]] as image (currentImg)}
		{#if arrows}
			<button id="btn-left" on:click={previousImg}>
				<Icon icon="iconamoon:arrow-up-2-thin" />
			</button>
		{/if}
		<img transition:fade={{ duration: 1000 }} src={image} />
		{#if arrows}
			<button id="btn-right" on:click={nextImg}> <Icon icon="iconamoon:arrow-up-2-thin" /> </button>
		{/if}
	{/each}
	{#if indicators}
		<div class="box">
			{#each images as img, i}
				<button on:click={() => changeImg(i)} class:current={i == currentImg} class="indicator"
				></button>
			{/each}
		</div>
	{/if}
	{#if numbered}
		<div class="box box--number">
			{#each images as img, i}
				<button on:click={() => changeImg(i)} class:current={i == currentImg} class="number"
					>{i + 1}</button
				>
			{/each}
		</div>
	{/if}
</div>

<style>
	:global(.iconify--iconamoon) {
		font-size: 8rem;
	}
	.container {
		display: grid;
		grid-template-columns: repeat(3, 1fr);
		grid-template-rows: repeat(3, 1fr);
		width: 100%;
		height: 100%;
		background-color: var(--color-primary);
	}
	img {
		grid-column: 1/-1;
		grid-row: 1/4;
		width: 100%;
		height: 100%;
		object-fit: cover;
	}
	button {
		position: relative;
		justify-self: center;
		background-color: transparent;
		border: none;
		outline: none;
		color: var(--color-secondary);
		z-index: 10;
	}

	#btn-right {
		grid-column: 3/4;
		grid-row: 2/3;
		right: -1rem;
		transform: rotate(90deg);
	}
	#btn-left {
		grid-column: 1/2;
		grid-row: 2/3;
		left: -1rem;

		transform: rotate(-90deg);
	}
	.box {
		grid-column: 2/3;
		grid-row: 3/4;
		justify-self: center;
		align-self: center;
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
	.box--number {
		padding: 1.5rem 0;
		border-radius: 40px;
	}
	.number {
		width: 5rem;
		height: 5rem;
		border: 2px solid var(--color-secondary);
		border-radius: 50%;
		font-size: 2rem;
	}
</style>
