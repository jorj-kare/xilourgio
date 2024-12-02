<script>
	import IoIosClose from 'svelte-icons/io/IoIosClose.svelte';
	import Carousel from '$lib/Carousel.svelte';

	import { goto } from '$app/navigation';
	export let data;
	function closeWindow() {
		goto('/metallikes_kataskeues');
	}
</script>

<div>
	<Carousel images={data.products[0]} on:click={closeWindow}></Carousel>
</div>
