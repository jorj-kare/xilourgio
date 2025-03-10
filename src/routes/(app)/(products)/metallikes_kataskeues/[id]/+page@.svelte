<script>
	import Carousel from '$lib/components/Carousel.svelte';
	export let data;
</script>

<div>
	<Carousel path="/metallikes_kataskeues" images={data.products} />
</div>
