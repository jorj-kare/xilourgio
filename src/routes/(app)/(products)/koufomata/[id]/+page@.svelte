<script>
	import Carousel from '$lib/components/Carousel.svelte';
	export let data;
</script>

<div>
	<Carousel path="/koufomata" images={data.products}></Carousel>
</div>
