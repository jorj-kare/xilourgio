<script>
	import Carousel from '$lib/components/Carousel.svelte';
	import { goto } from '$app/navigation';
	export let data;
	function closeWindow() {
		goto('/koufomata');
	}
</script>

<div>
	<Carousel images={data.products} on:click={closeWindow}></Carousel>
</div>
