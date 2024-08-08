<script>
	import Carousel from '$lib/Carousel.svelte';

	const images = [
		{
			url: 'https://res.cloudinary.com/dqn25bn8q/image/upload/v1722539902/furniture_1.jpg',
			description: 'furniture_1'
		},
		{
			url: 'https://res.cloudinary.com/dqn25bn8q/image/upload/v1722539902/furniture_2.jpg',
			description: 'furniture_2'
		},
		{
			url: 'https://res.cloudinary.com/dqn25bn8q/image/upload/v1722539902/furniture_3.jpg',
			description: 'furniture_3'
		},
		{
			url: 'https://res.cloudinary.com/dqn25bn8q/image/upload/v1722539902/furniture_4.jpg',
			description: 'furniture_4'
		},
		{
			url: 'https://res.cloudinary.com/dqn25bn8q/image/upload/v1722539902/furniture_5.jpg',
			description: 'furniture_5'
		}
	];
</script>

<div class="container">
	<Carousel {images}></Carousel>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		height: 100vh;
		background-color: #000;
	}
	img {
		width: 100px;
	}
</style>
