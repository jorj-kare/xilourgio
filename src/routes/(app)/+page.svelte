<script>
	import video from '$lib/media/166808-835670743.mp4';
	import { onMount } from 'svelte';
	import AnimateHeader from '$lib/components/AnimateHeader.svelte';
	import { lng, mainHeader, secondaryHeader } from '$stores';

	const imgArr = [
		'https://res.cloudinary.com/dqn25bn8q/image/upload/v1727470059/xilourgio/56dBO1Niw2nQIQYTRukrk.jpg',
		'https://res.cloudinary.com/dqn25bn8q/image/upload/v1727469634/xilourgio/8DEnGdTULgwPTiyaU3y-b.jpg',
		'https://res.cloudinary.com/dqn25bn8q/image/upload/v1727469634/xilourgio/2qD__zLmvqeRN6eMyAZLa.jpg'
	];
	onMount(() => {
		const videoEl = document.querySelector('video');
		videoEl.addEventListener('timeupdate', function () {
			if (this.currentTime >= 8) {
				this.currentTime = 0.0;
			}
		});
	});
</script>

<div class="container">
	<header>
		<video playsinline autoplay muted loop preload="true" poster={imgArr[0]}>
			<source src={video} type="video/webm" />
			Your browser does not support the video tag.
		</video>
		<div class="title-box">
			<h1>{$lng == 'gr' ? $mainHeader.title.gr : $mainHeader.title.en}</h1>
			<p>
				{$lng == 'gr' ? $mainHeader.text.gr : $mainHeader.text.en}
			</p>
		</div>
	</header>
	<section>
		<AnimateHeader imgPathArr={imgArr}>
			<div class="info">
				<div>
					<h2>
						{$lng == 'gr' ? $secondaryHeader.column1.title.gr : $secondaryHeader.column1.title.en}
					</h2>
					<ul>
						<li>
							{$lng == 'gr'
								? $secondaryHeader.column1.text.p1.gr
								: $secondaryHeader.column1.text.p1.en}
						</li>
						<li>
							{$lng == 'gr'
								? $secondaryHeader.column1.text.p2.gr
								: $secondaryHeader.column1.text.p2.en}
						</li>
					</ul>
					<p>
						{$lng == 'gr'
							? $secondaryHeader.column1.text.p3.gr
							: $secondaryHeader.column1.text.p3.en}
					</p>
				</div>

				<div>
					<h2>
						{$lng == 'gr' ? $secondaryHeader.column2.title.gr : $secondaryHeader.column2.title.en}
					</h2>
					<ul>
						<li>
							{$lng == 'gr'
								? $secondaryHeader.column2.text.p1.gr
								: $secondaryHeader.column2.text.p1.en}
						</li>
						<li>
							{$lng == 'gr'
								? $secondaryHeader.column2.text.p2.gr
								: $secondaryHeader.column2.text.p2.en}
						</li>
						<li>
							{$lng == 'gr'
								? $secondaryHeader.column2.text.p3.gr
								: $secondaryHeader.column2.text.p3.en}
						</li>
					</ul>
				</div>
				<div>
					<h2>
						{$lng == 'gr' ? $secondaryHeader.column3.title.gr : $secondaryHeader.column3.title.en}
					</h2>
					<p>
						{$lng == 'gr'
							? $secondaryHeader.column3.text.p1.gr
							: $secondaryHeader.column3.text.p1.en}
					</p>
					<p>
						{$lng == 'gr'
							? $secondaryHeader.column3.text.p2.gr
							: $secondaryHeader.column3.text.p2.en}
					</p>
				</div>
			</div>
		</AnimateHeader>
	</section>
</div>

<style>
	.container {
		scroll-snap-type: y mandatory;
		height: 100vh;
		overflow-y: scroll;
		word-spacing: -0.5rem;
		scrollbar-width: none;
		-ms-overflow-style: none;
	}
	header {
		display: grid;
		grid-template-columns: 50% 1fr;
		align-items: flex-end;
		justify-content: start;
		height: 100%;
		width: 100vw;
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
		margin-bottom: 50px;
		border-radius: 5px;
		color: #ffffff;
		font-weight: 300;
		font-size: 2rem;
		z-index: 10;
	}
	.title-box h1 {
		font-weight: 300;
		font-size: 4rem;
		border-bottom: 2px solid #f3f2f2;
	}
	section {
		position: relative;
		z-index: 11;
	}
	.info {
		display: flex;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: flex-end;
		align-content: end;
		gap: 4rem;
		padding: 30px;
		height: 100vh;
		border-top: 2px solid #f3f2f2;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		scroll-snap-align: start;
		z-index: 11;
	}
	.info div {
		color: #f3f2f2;
		font-size: 2rem;
		padding: 15px;
	}
	.info h2 {
		font-size: 3rem;
		font-weight: 700;
		word-spacing: -6px;
		border-bottom: 1px solid #f3f2f2;
	}

	ul {
		padding: 1rem;
	}
	.info p {
		padding-top: 5px;
	}
</style>
