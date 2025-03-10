<script>
	import Carousel from '$lib/components/Carousel.svelte';
	export let data;
</script>

<div>
	<Carousel path="/epipla-eidikes_kataskeues" images={data.products} indicators={true} />
</div>
