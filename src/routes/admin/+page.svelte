<script>
	import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';
	import { Pulse } from 'svelte-loading-spinners';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';
	$: if ($page.form?.success) {
		notifier.success('Έυγε νεαρέ, μόλις δημιούργησες μια νέα καταχώρηση στην βάση δεδομένων.');
		submitting = false;
	} else if ($page.form?.error) {
		notifier.danger($page.form.error);
	}
	let timeout = 10000;
	let submitting = false;
</script>

<div class="container">
	<NotificationDisplay {timeout} />
	{#if submitting}
		<div class="spinn"><Pulse color="blue"></Pulse></div>
	{/if}
	<form
		method="POST"
		enctype="multipart/form-data"
		class:submitting
		use:enhance={() => {
			submitting = true;
		}}
	>
		<label for="category">Κατηγορία</label>
		<select id="category" name="category">
			<option value="ntoulapes">Ντουλάπα</option>
			<option value="kouzines">Κουζίνα</option>
			<option value="koufomata">Κουφώματα</option>
			<option value="ksilo&metallo">Ξύλο&Μεταλλο</option>
			<option value="metallikes-kataskeues">Μεταλλικές κατασκευές</option>
			<option value="eidikes-kataskeues">Ειδικές κατασκευές</option>
		</select>
		<label for="subCategory">Υποκατηγορία</label>
		<select id="subCategory" name="subCategory">
			<option value="">Καμία</option>
			<option value="ntoulapa">Ντουλάπα</option>
			<option value="trapezi">Τραπέζι</option>
			<option value="rafia">Ράφια</option>
			<option value="bibliothiki">Βιβλιοθήκη</option>
			<option value="krebati">Κρεβάτι</option>
		</select>
		<label for="description">Περιγραφή</label>
		<textarea name="description" id="description" rows="3"></textarea>
		<label for="imgUploader">Φωτογραφίες</label>
		<input id="imgUploader" type="file" name="img" required multiple />
		<button type="submit" disabled={submitting}>Καταχώρηση</button>
	</form>
</div>

<style>
	.container {
		display: flex;
		align-items: center;
		justify-content: center;
		width: 100vw;
		height: 100vh;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1px;
		padding: 10px;
	}
	label {
		margin-top: 15px;
	}
	button {
		margin-top: 25px;
	}
	.spinn {
		position: absolute;
		left: 0;
		right: 0;
		margin-inline: auto;
		width: fit-content;
	}
	.submitting {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
