<script>
	import PreviewImgInput from '$lib/PreviewImgInput.svelte';
	import SortingImages from '$lib/SortingImages.svelte';
	import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';
	import { Pulse } from 'svelte-loading-spinners';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	let timeout = 5000;
	let submitting = false;
	let files;
	let fileInput;
	console.log($page);

	$: if ($page.form?.success && submitting) {
		notifier.success('Η καταχώρηση δημιουργήθηκε επιτυχώς.');
		submitting = false;
		files = '';
	} else if ($page.form?.error && submitting) {
		notifier.danger($page.form.error);
		submitting = false;
	}
</script>

<NotificationDisplay {timeout} />

{#if submitting}
	<div class="spinn"><Pulse color="blue"></Pulse></div>
{/if}
<div class="container">
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
			<option value="epipla">Έπιπλα</option>
			<option value="metallikes_kataskeues">Μεταλλικές κατασκευές</option>
			<option value="eidikes_kataskeues">Ειδικές κατασκευές</option>
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
		<input
			id="imgUploader"
			name="img"
			type="file"
			multiple
			required
			bind:files
			bind:this={fileInput}
		/>

		<button type="submit" disabled={submitting}>Καταχώρηση</button>
	</form>

	{#key files}
		<PreviewImgInput {files} />
		<SortingImages {files} />
	{/key}
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		/* align-items: center;
		justify-items: center; */
		padding: 10rem;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1px;
		width: 50%;
		padding: 5rem;
		border: 1px solid #eee;
	}
	label {
		margin-top: 1.5rem;
	}
	button[type='submit'] {
		margin-top: 2.5rem;
		width: 50%;
		align-self: center;
		padding: 1rem 0;
		border: none;
		border-radius: 5px;
		transition:
			background-color 0.5s,
			color 0.7s;
	}
	button[type='submit']:hover {
		color: #eee;
		background-color: rgba(14, 152, 14, 0.933);
	}

	.spinn {
		position: absolute;
		left: 0;
		right: 0;
		margin-inline: auto;
		width: fit-content;
		z-index: 1;
	}
	.submitting {
		opacity: 0.5;
		pointer-events: none;
	}
</style>
