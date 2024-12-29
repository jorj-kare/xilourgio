<script>
	import PreviewImgInput from '$lib/PreviewImgInput.svelte';
	import GoArrowSmallUp from 'svelte-icons/go/GoArrowSmallUp.svelte';
	import GoArrowSmallDown from 'svelte-icons/go/GoArrowSmallDown.svelte';
	import Notifications from '$lib/Notifications.svelte';
	import { notify } from '$stores';
	import { Pulse } from 'svelte-loading-spinners';
	import { enhance } from '$app/forms';
	import { page } from '$app/stores';

	let timeout = 5000;
	let submitting = false;
	let files;

	function changePosition(index, direction) {
		const dt = new DataTransfer();

		if (files) {
			for (let i = 0; i < files.length; i++) {
				if (i == index) {
					dt.items.add(files[i + direction]);
				} else if (i == index + direction) {
					dt.items.add(files[i - direction]);
				} else {
					dt.items.add(files[i]);
				}
			}
		}
		files = dt.files;
	}

	$: {
		if ($page.form?.success && submitting) {
			notify.success('Η καταχώρηση δημιουργήθηκε επιτυχώς.');
			submitting = false;
			files = '';
		} else if ($page.form?.error && submitting) {
			notify.error($page.form.error);
			submitting = false;
		}
	}
</script>

<Notifications {timeout} />

{#if submitting}
	<div class="spinn"><Pulse color="blue"></Pulse></div>
{/if}
<div class="container">
	<form
		method="POST"
		enctype="multipart/form-data"
		class:submitting
		use:enhance={(e) => {
			e.formData.delete('img');
			for (let i = 0; i < files.length; i++) {
				e.formData.append('img', files[i]);
			}

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
		<label for="description">Περιγραφή(Αγγλικά)</label>
		<textarea name="descriptionEn" id="descriptionEn" rows="3"></textarea>
		<label for="imgUploader">Φωτογραφίες</label>
		<input id="imgUploader" name="img" type="file" multiple required bind:files />
		{#if files}
			{#key files}
				<PreviewImgInput {files} />
				{#each Array.from(files) as file, i}
					<div id="sortImgs">
						<span>{i + 1}</span>
						<button
							type="button"
							id="btnUp"
							on:click={() => changePosition(i, -1)}
							class:disabled={i == 0}><GoArrowSmallUp /></button
						>
						<button
							type="button"
							id="btnDown"
							on:click={() => changePosition(i, 1)}
							class:disabled={i == files.length - 1}><GoArrowSmallDown /></button
						>
						<span>{file.name}</span>
					</div>
				{/each}
			{/key}
		{/if}

		<button type="submit" disabled={submitting}>Καταχώρηση</button>
	</form>
</div>

<style>
	.container {
		width: 100%;
		display: flex;
		flex-direction: column;
		padding: 10rem;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1px;
		padding: 5rem;
		border: 1px solid #eee;
	}
	label {
		margin-top: 1.5rem;
	}
	button[type='submit'] {
		margin-top: 2.5rem;
		width: 30rem;
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
	input,
	textarea,
	select {
		width: 50%;
	}
	select {
		background: #12121262;
		padding: 1rem;
		border: 1px solid #fefdfd;
		border-radius: 5px;
		color: #fefdfd;
		opacity: 1;
	}
	select * {
		background-color: black;
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
	#sortImgs {
		display: flex;
		align-items: center;
	}
	#sortImgs button {
		width: 3rem;
		margin: 0 0.2rem;
		display: inline-block;
		background-color: transparent;
		color: #eee;
		border: none;
		transition: all 0.5s;
	}
	#sortImgs button:hover {
		color: aquamarine;
	}
	.disabled {
		opacity: 0.5 !important;
		pointer-events: none;
	}

	#btnUp:hover {
		transform: translateY(-0.8rem);
	}
	#btnDown:hover {
		transform: translateY(0.8rem);
	}
	#sortImgs span {
		display: inline-block;
		margin: 1rem;
	}
</style>
