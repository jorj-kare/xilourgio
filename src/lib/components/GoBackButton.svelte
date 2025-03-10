<script>
	import TiArrowLeft from 'svelte-icons/ti/TiArrowLeft.svelte';
	export let path = '#';
	export let color = '#eee';
</script>

<a style:color href={path}><TiArrowLeft /></a>

<style>
	a {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 5rem;
		z-index: 100;
		transition: all 0.5s;

		&:hover {
			transform: translateX(-0.5rem);
		}
	}
</style>
