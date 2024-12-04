<script>
	import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';
	import { page } from '$app/stores';
	$: if ($page.form?.success) {
		notifier.success('Έυγε νεαρέ, μόλις δημιούργησες μια νέα καταχώρηση στην βάση δεδομένων.');
	} else if ($page.form?.error) {
		notifier.danger($page.form.error);
	}
	let timeout = 10000;
</script>

<div class="container">
	<NotificationDisplay {timeout} />
	<form method="POST">
		<label for="username">Όνομα χρήστη</label>
		<input id="username" name="username" type="text" required />
		<label for="password">Κωδικός</label>
		<input id="password" name="password" type="password" required />
		<button type="submit">Σύνδεση</button>
	</form>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		height: 100vh;
		background-color: black;
	}
	form {
		display: flex;
		flex-flow: column nowrap;
		color: aliceblue;
		font-size: 22px;
	}
	input {
		margin-bottom: 15px;
		padding: 2.5px;
		border-radius: 12px;
		border: none;
		outline: transparent;
		font-size: 20px;
	}
	button {
		margin-top: 15px;
		border-radius: 12px;
		padding: 2.5px;
	}
</style>
