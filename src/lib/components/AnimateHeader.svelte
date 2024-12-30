<script>
	import { onMount } from 'svelte';

	export let imgPathArr = [];
	onMount(() => {
		const backgroundImages = document.querySelectorAll('.background-img');
		const showing = `
		opacity: 1;
		z-index: -1;
		transition: none;
		`;

		let imageIndex = 0;
		backgroundImages[imageIndex].style.cssText = showing;
		function changeBackgroundImg() {
			backgroundImages[imageIndex].removeAttribute('style');
			imageIndex++;
			if (imageIndex >= backgroundImages.length) {
				imageIndex = 0;
			}
			backgroundImages[imageIndex].style.cssText = showing;
		}
		setInterval(changeBackgroundImg, 3000);
	});
</script>

<header>
	<slot></slot>
	<div class="container">
		{#each imgPathArr as path}
			<img class="background-img" src={path} alt="background img " />
		{/each}
	</div>
</header>

<style>
	header {
		position: relative;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
	}
	header::before {
		content: '';
		position: absolute;
		width: 100%;
		height: 100%;
		background-color: #000;
		opacity: 0.6;
		z-index: -1;
	}
	.container {
		position: absolute;
		width: 100%;
		height: 100%;
		z-index: -5;
	}
	.background-img {
		position: absolute;
		width: 100%;
		height: 100%;
		object-fit: cover;
		opacity: 0;
		transition: opacity 1s ease-in-out;
	}
</style>
