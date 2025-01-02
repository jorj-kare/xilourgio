<script>
	import Notifications from '$lib/components/Notifications.svelte';
	import { notify } from '$stores';
	import { page } from '$app/stores';

	if ($page.form?.error) {
		notify.error($page.form?.message);
	}
</script>

<Notifications />

<div class="container">
	<form method="POST">
		<label for="username">Όνομα χρήστη</label>
		<input class="input" id="username" name="username" type="text" required />
		<label for="password">Κωδικός</label>
		<input class="input" id="password" name="password" type="password" required />
		<button class="btn-submit" type="submit">Σύνδεση</button>
	</form>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: var(--color-primary);
	}
	form {
		display: flex;
		flex-flow: column nowrap;
		font-size: 2.2rem;
	}
	input {
		margin-bottom: 1rem;
	}

	button {
		margin-top: 1.5rem;
	}
</style>
