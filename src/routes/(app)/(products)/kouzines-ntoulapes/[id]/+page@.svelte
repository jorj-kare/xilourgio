<script>
	import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
	import Carousel from '$lib/Carousel.svelte';

	import { goto } from '$app/navigation';
	export let data;
	function closeWindow() {
		goto('/kouzines-ntoulapes');
	}
</script>

<div>
	<Carousel images={data.products} on:click={closeWindow}></Carousel>
</div>
