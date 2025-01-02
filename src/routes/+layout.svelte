<script>
	import '../css/reset.css';
	import '../css/variables.css';
	import '../css/elements.css';
	import { lng } from '$stores';
	import { browser } from '$app/environment';
	$: if (browser) {
		if ($lng == 'gr') {
			document.documentElement.setAttribute('lang', 'gr');
		} else {
			document.documentElement.setAttribute('lang', 'en');
		}
	}
</script>

<slot></slot>

<style>
	:global(body:lang(en)) {
		font-family: 'Lato', serif;
	}
	:global(body:lang(gr)) {
		font-family: 'Ubuntu Mono', monospace;
	}
</style>
