<script>
	import FaRegArrowAltCircleLeft from 'svelte-icons/fa/FaRegArrowAltCircleLeft.svelte';
	export let path = '#';
	export let color = '#eee';
	export let width = '40px';
</script>

<a style:color style:width href={path}><FaRegArrowAltCircleLeft /></a>

<style>
	a {
		position: absolute;
		top: 4rem;
		left: 4rem;
		z-index: 100;
		transition: all 0.5s;
		&:hover {
			transform: translateX(-0.5rem);
		}
	}
</style>
