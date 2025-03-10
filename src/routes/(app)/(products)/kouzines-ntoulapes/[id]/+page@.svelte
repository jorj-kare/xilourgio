<script>
	import Carousel from '$lib/components/Carousel.svelte';
	export let data;
</script>

<div>
	<Carousel path="/kouzines-ntoulapes" images={data.products}></Carousel>
</div>
