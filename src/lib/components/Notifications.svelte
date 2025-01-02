<script>
	import { fly } from 'svelte/transition';
	import { notify } from '$stores';

	export let timeout = 3000;

	$: if ($notify.length > 0) {
		setTimeout(() => {
			notify.remove();
		}, timeout);
	}
</script>

{#if $notify.length > 0}
	<div class="container" transition:fly={{ x: 100, duration: 2000 }}>
		{#key $notify}
			{#each $notify as ntf, i (i)}
				<div class="notification {ntf?.success ? 'success' : 'error'}">
					<span>{ntf?.success ? ntf?.success : ntf?.error}</span>
				</div>
			{/each}
		{/key}
	</div>
{/if}

<style>
	.container {
		position: fixed;
		top: 1rem;
		right: -2rem;
		z-index: 100;
	}
	.notification {
		margin-bottom: 0.5rem;
		padding: 1.5rem 3rem;
		min-width: 50rem;
		border-radius: 2.5rem;
		border: 1px solid var(--color-secondary);
		font-size: 2.1rem;
	}
	.success {
		background-color: var(--color-success);
	}
	.error {
		background-color: var(--color-error);
	}
</style>
