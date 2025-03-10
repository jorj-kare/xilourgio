<script>
	import { onMount } from 'svelte';
	import Carousel_2 from '$lib/components/Carousel_2.svelte';
	import Contact from '../../lib/components/Contact.svelte';
	import Icon from '@iconify/svelte';
	import { lng, mainHeader, secondaryHeader } from '$stores';
	import carouselImg1 from '$lib/media/carousel-1/benjamin-sow-64TjoOAj61w-unsplash.jpg';
	import carouselImg2 from '$lib/media/carousel-1/khanh-do-bPUECAYreos-unsplash.jpg';
	import carouselImg3 from '$lib/media/carousel-1/sanju-pandita-5BIcH2kzlEU-unsplash.jpg';
	import carousel2Img1 from '$lib/media/carousel-2/austin-ramsey-nmXi-HCD_F8-unsplash.jpg';
	import carousel2Img2 from '$lib/media/carousel-2/dominik-scythe-3cIvvzjE6Lk-unsplash.jpg';
	import carousel2Img3 from '$lib/media/carousel-2/paul-trienekens-mLO6ILUbADA-unsplash.jpg';
	import imgWood4 from '$lib/media/stanislav-churikov-R-dqzxCYgOM-unsplash.jpg';
	import imgWood5 from '$lib/media/clem-onojeghuo-hdW4rZPHe2g-unsplash.jpg';
	import video from '$lib/media/166808-835670743.mp4';

	let innerWidth;
	const imgArr = [carousel2Img1, carousel2Img2, carousel2Img3];
	const images = [carouselImg1, carouselImg2, carouselImg3];
	const infoImg = [imgWood5, '', imgWood4];
	const infoIcon = [
		'fluent-emoji-high-contrast:hammer-and-pick',
		'academicons:ideas-repec',
		'file-icons:renovate'
	];

	onMount(() => {
		if (innerWidth > 768) {
			const videoEl = document.querySelector('video');
			if (videoEl)
				videoEl.addEventListener('timeupdate', function () {
					if (this.currentTime >= 8) {
						this.currentTime = 0.0;
					}
				});
		}
	});
</script>

<svelte:window bind:innerWidth />
<div class="container">
	<header>
		{#if innerWidth > 768}
			<video playsinline autoplay muted loop preload="true" poster={images[2]}>
				<source src={video} type="video/webm" />
				Your browser does not support the video tag.
			</video>
			<div class="title-box">
				<h1>{$lng == 'gr' ? $mainHeader.title.gr : $mainHeader.title.en}</h1>
				<p>
					{$lng == 'gr' ? $mainHeader.text.gr : $mainHeader.text.en}
				</p>
			</div>
		{:else}
			<div class="background-img">
				<Carousel_2 {images} autoplay={true} indicators={true} arrows={true} />
			</div>
			<div class="title-box">
				<p>
					{$lng == 'gr' ? $mainHeader.text.gr : $mainHeader.text.en}
				</p>
			</div>
		{/if}
	</header>

	{#each infoIcon as icon, i}
		<section>
			<div class={`carousel-box  carousel-box--${i + 1}`}>
				{#if i == 1}<Carousel_2 images={imgArr} autoplay={true} indicators={true} sec={3000} />
				{:else}
					<img src={infoImg[i]} alt="" />
				{/if}
			</div>
			<div class={`info info--${i + 1}`}>
				<Icon {icon} />
				<h1>
					{$lng == 'gr'
						? $secondaryHeader[`column${i + 1}`]?.title.gr
						: $secondaryHeader[`column${i + 1}`]?.title.en}
				</h1>
				<div>
					{#each Array(3) as _, j}
						<p>
							{$lng == 'gr'
								? $secondaryHeader[`column${i + 1}`].text[`p${j + 1}`]?.gr
								: $secondaryHeader[`column${i + 1}`].text[`p${j + 1}`]?.en}
						</p>
					{/each}
				</div>
			</div>
		</section>
	{/each}
	<footer class="footer">
		<Contact />
	</footer>
</div>

<style>
	.container {
		height: 100vh;
		scroll-snap-type: y mandatory;
		overflow-y: scroll;
		scrollbar-width: none;
		-ms-overflow-style: none;
		overflow-x: hidden;
	}
	header {
		display: grid;
		grid-template-columns: 50% 1fr;
		align-items: flex-end;
		justify-content: start;
		height: 100%;
		width: 100%;
		scroll-snap-align: start;
	}

	video {
		grid-column: 1/-1;
		grid-row: 1/2;
		height: 100vh;
		width: 100vw;
		object-fit: cover;
		filter: brightness(60%);
	}

	.title-box {
		grid-column: 1/2;
		grid-row: 1/2;
		width: 100%;
		padding: 2rem;
		margin-left: 3rem;
		margin-bottom: 5rem;
		border-radius: 0.5rem;
		font-weight: 300;
		font-size: 2.2rem;
		z-index: 10;
		& h1 {
			margin-bottom: 3px;
			font-weight: 900;
			font-size: 5rem;
			border-bottom: 2px solid var(--color-secondary);
		}
	}

	section,
	footer {
		position: relative;
		display: grid;
		grid-template-columns: 35% 1fr;
		grid-auto-rows: 100%;
		width: 100vw;
		height: 100vh;
		scroll-snap-align: center;
		scroll-snap-stop: always;
		z-index: 11;
	}
	.carousel-box {
		background-color: var(--color-primary);
		grid-row: 1/-1;
	}
	.carousel-box--1 {
		grid-column: 1/2;
	}
	.carousel-box--2 {
		grid-column: 2/3;
	}
	.carousel-box--3 {
		grid-column: 1/2;
	}

	.carousel-box img {
		height: 100%;
		width: 100%;
		object-fit: cover;
	}
	.info {
		grid-row: 1/-1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		padding: 4rem;
		border-left: 3px solid var(--color-secondary);
		background-color: var(--color-primary);
		color: var(--color-secondary);
		font-size: 2.2rem;
		font-weight: 200;
	}
	.info h1 {
		margin-bottom: 2rem;
		text-align: center;
		font-size: 3.5rem;
		font-weight: 400;
	}

	.info p {
		max-width: 60ch;
		padding-bottom: 1.5rem;
	}
	.info--1 {
		grid-column: 2/3;
	}
	.info--2 {
		grid-column: 1/2;
	}
	.info--3 {
		grid-column: 2/3;
	}
	.info--3 p:last-child {
		display: none;
	}
	:global(.info svg) {
		align-self: center;
		height: 70px;
		width: 70px;
		padding: 5px;
		border: 2px solid var(--color-secondary);
		border-radius: 50%;
		flex-shrink: 0;
	}

	/* -------------MEDIA-QUERIES-------------- */
	@media (min-width: 1601px) {
		.title-box {
			margin-bottom: 3rem;
		}
	}

	@media (max-width: 992px) {
		header {
			display: grid;
			grid-template-columns: 65% 1fr;
		}
		.info {
			align-items: start;
		}
		.info h1 {
			text-align: start;
		}
		.title-box h1 {
			line-height: 6rem;
			padding-bottom: 1rem;
		}
	}
	@media (max-width: 768px) {
		.container {
			scroll-snap-type: none;
			height: auto;
		}
		header {
			grid-template-rows: 80vh max-content;
			margin-top: 12rem;
			height: 100%;
		}
		.background-img {
			grid-column: 1/-1;
			grid-row: 1/2;
			width: 100%;
			height: 100%;
		}

		.title-box {
			grid-column: 1/-1;
			grid-row: 2/3;
			justify-items: center;
			width: 100%;
			height: 100%;
			padding: 4rem 3rem;
			margin: 0;
			border-top: 1px solid var(--color-secondary);
			border-radius: 0;
			background-color: var(--color-primary);
			font-size: 2.2rem;
			font-weight: 200;
		}
		.title-box p {
			max-width: 60rem;
		}

		section,
		footer {
			display: block;
			height: max-content;
		}

		.carousel-box {
			height: 50vh;
		}
		.carousel-box--2 {
			height: 70vh;
		}
		.carousel-box--3 {
			height: 40vh;
		}

		.carousel-box img {
			height: 100%;
			width: 100%;
			object-fit: cover;
		}
		.info {
			border: none;
			border-top: 1px solid var(--color-secondary);
			align-items: center;
			padding: 5rem;
			font-size: 2.2rem;
			height: max-content;
		}
		.info h1 {
			padding-block: 1rem;
			text-align: center;
			font-size: 3rem;
			font-weight: 300;
		}
		.info p {
			padding-bottom: 1.5rem;
			max-width: 60rem;
		}

		:global(.info svg) {
			height: 60px;
			width: 60px;
			padding: 5px;
			border: 2px solid var(--color-secondary);
			border-radius: 50%;
			flex-shrink: 0;
		}
	}
	@media (max-width: 640px) {
		.title-box {
			font-size: 2rem;
		}
		.info {
			padding: 5rem 3rem;
			font-size: 2rem;
		}
		.info h1 {
			font-size: 2.8rem;
			font-weight: 300;
			margin-bottom: 1rem;
		}
		.info p {
			padding-bottom: 0.8rem;
		}
		.carousel-box {
			height: 30vh;
		}
		.carousel-box--2 {
			height: 50vh;
		}
		:global(.info svg) {
			height: 55px;
			width: 55px;
		}
	}
</style>
