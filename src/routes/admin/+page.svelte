<script>
	import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';
	import { enhance } from '$app/forms';
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

	<form method="POST" enctype="multipart/form-data" use:enhance>
		<label for="category">Κατηγορία</label>
		<select id="category" name="category">
			<option value="eπιπλo">Έπιπλo</option>
			<option value="κουζίνα">Κουζίνα</option>
			<option value="κουφώματα">Κουφώματα</option>
			<option value="ειδικές κατασκευές">Ειδικές κατασκευές</option>
		</select>
		<label for="subCategory">Υποκατηγορία</label>
		<select id="subCategory" name="subCategory">
			<option value="">Καμία</option>
			<option value="ντουλάπα">Ντουλάπα</option>
			<option value="τραπέζι">Τραπέζι</option>
			<option value="ράφια">Ράφια</option>
		</select>
		<label for="material">Υλικό</label>
		<select id="material" name="material">
			<option value="ξύλο">Ξύλο</option>
			<option value="Μέταλλο">μέταλλο</option>
			<option value="ξύλο-μέταλλο">Ξύλο και μέταλλο</option>
		</select>
		<label for="description">Περιγραφή</label>
		<textarea name="description" id="description" rows="3"></textarea>

		<label for="imgUploader">Φωτογραφίες</label>
		<input id="imgUploader" type="file" name="img" required multiple />
		<button type="submit">Καταχώρηση</button>
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
</style>
