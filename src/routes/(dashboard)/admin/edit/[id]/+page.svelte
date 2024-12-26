<script>
	import { PUBLIC_CLOUDINARY_URL } from '$env/static/public';
	import PreviewImgInput from '$lib/PreviewImgInput.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import FaArrowAltCircleRight from 'svelte-icons/fa/FaArrowAltCircleRight.svelte';
	import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';
	import { Pulse } from 'svelte-loading-spinners';
	import { page } from '$app/stores';
	import { enhance } from '$app/forms';
	import { goto } from '$app/navigation';

	export let data;
	let submitting = false;
	const timeout = 3000;
	let files;
	let selectEl = [];
	let orderedImgs = [...data.products.pictures];
	let category = data.products.category;
	let subCategory = data.products.subCategory;
	let description = data.products.description;
	let descriptionEn = data.products.descriptionEn;

	$: if ($page.form?.success && submitting) {
		notifier.success('Η καταχώρηση ενημερώθηκε επιτυχώς.');
		submitting = false;
	} else if ($page.form?.error && submitting) {
		notifier.danger($page.form.error);
		submitting = false;
	}

	async function addImg() {
		submitting = true;
		const formData = new FormData();

		for (let i = 0; i < files.length; i++) {
			formData.append('newImg', files[i]);
		}

		const res = await fetch(`/api/product/${$page.params.id}`, {
			method: 'PATCH',
			body: formData
		});

		if (!res.ok) {
			const resJson = await res.json();
			console.log(resJson);
			notifier.danger(resJson.message);
			submitting = false;
		}
		submitting = false;
		files = '';
		goto($page.url.pathname, { invalidateAll: true });
		notifier.success('Οι φωτογραφίες αποθηκεύτηκαν επιτυχώς');
	}

	async function deleteImg(imgName) {
		submitting = true;
		const formData = new FormData();
		formData.append('deletedImg', imgName);
		const res = await fetch(`/api/product/${$page.params.id}`, {
			method: 'PATCH',
			body: formData
		});

		if (!res.ok) {
			const resJson = await res.json();
			console.log(resJson);

			notifier.danger(resJson.message);
			submitting = false;
		}
		submitting = false;
		goto($page.url.pathname, { invalidateAll: true });
		notifier.success('Η φωτογραφία διαγράφηκε επιτυχώς');
	}

	async function orderImages() {
		submitting = true;
		const formData = new FormData();
		for (let i = 0; i < orderedImgs.length; i++) {
			formData.append('orderedImgs', orderedImgs[i]);
		}
		const res = await fetch(`/api/product/${$page.params.id}`, {
			method: 'PATCH',
			body: formData
		});
		if (!res.ok) {
			const resJson = await res.json();
			notifier.danger(resJson.message);
			submitting = false;
		}
		submitting = false;
		goto($page.url.pathname, { invalidateAll: true });

		notifier.success('Οι φωτογραφίες άλλαξαν σειρά επιτυχώς');
	}
	$: {
		if (data.products.pictures.length != orderedImgs.length) {
			orderedImgs = [...data.products.pictures];
		}
		selectEl.forEach((value, index) => {
			let temp;
			if (value != index) {
				temp = orderedImgs[index];
				orderedImgs[index] = orderedImgs[value];
				orderedImgs[value] = temp;
				selectEl[index] = index;
			}
		});
	}
</script>

<NotificationDisplay {timeout} />
{#if submitting}
	<div class="spinn"><Pulse color="blue"></Pulse></div>
{/if}

<div class="form-box">
	<form
		method="POST"
		action="?/edit"
		class:submitting
		use:enhance={() => {
			submitting = true;
		}}
	>
		{#key data}
			<fieldset>
				<legend>Περιγραφή</legend>
				<label for="category">Κατηγορία</label>
				<select bind:value={category} id="category" name="category">
					<option value="ntoulapes">Ντουλάπα</option>
					<option value="kouzines">Κουζίνα</option>
					<option value="koufomata">Κουφώματα</option>
					<option value="epipla">Έπιπλα</option>
					<option value="metallikes_kataskeues">Μεταλλικές κατασκευές</option>
					<option value="eidikes_kataskeues">Ειδικές κατασκευές</option>
				</select>
				<label for="subCategory">Υποκατηγορία</label>
				<select bind:value={subCategory} id="subCategory" name="subCategory">
					<option value="">Καμία</option>
					<option value="ntoulapa">Ντουλάπα</option>
					<option value="trapezi">Τραπέζι</option>
					<option value="rafia">Ράφια</option>
					<option value="bibliothiki">Βιβλιοθήκη</option>
					<option value="krebati">Κρεβάτι</option>
				</select>
				<label for="description">Περιγραφή</label>
				<textarea bind:value={description} name="description" id="description" rows="3"></textarea>
				<label for="description">Περιγραφή(Αγγλικά)</label>
				<textarea bind:value={descriptionEn} name="descriptionEn" id="descriptionEn" rows="3"
				></textarea>
				<button type="submit">Καταχώρηση</button>
			</fieldset>
		{/key}
	</form>
	<form class:submitting>
		<fieldset>
			<legend>Προσθήκη Φωτογραφιών</legend>
			<input type="file" id="img" name="img" bind:files multiple required />
			{#key files}<PreviewImgInput {files} />{/key}
			<button on:click={addImg}>Προσθήκη</button>
		</fieldset>
	</form>

	<form class:submitting>
		<fieldset>
			<legend>Ταξινόμηση/Διαγραφή</legend>
			<div class="image-box">
				{#key orderedImgs}
					{#each orderedImgs as path, index}
						<!-- svelte-ignore a11y-click-events-have-key-events -->
						<!-- svelte-ignore a11y-no-static-element-interactions -->
						<div class="grid-item">
							<img
								src={PUBLIC_CLOUDINARY_URL + path}
								alt={data.products.description}
								data-index={index}
								title={data.products.description}
							/>

							<select id="selectOrder" bind:value={selectEl[index]}>
								{#each orderedImgs as path, i (i)}
									<option value={i} selected={i == index ? true : false}>{i + 1}</option>
								{/each}
							</select>

							<button type="button" id="deleteImg" on:click={deleteImg(path)}><MdDelete /></button>
						</div>
					{/each}
				{/key}

				<button id="orderBtn" on:click={orderImages}><FaArrowAltCircleRight /> </button>
			</div>
		</fieldset>
	</form>
</div>

<style>
	.form-box {
		display: flex;
		flex-direction: column;
		justify-content: start;
		align-content: start;
		width: 100vw;
		padding: 10rem;
	}
	form {
		display: flex;
		flex-direction: column;
		gap: 1px;
		max-height: 90%;
		padding: 10px;
	}
	fieldset {
		display: flex;
		flex-direction: column;
	}
	legend {
		font-size: 3rem;
	}
	label {
		margin-top: 4rem;
		font-size: 2rem;
	}
	input,
	select,
	textarea,
	button {
		max-width: 30%;
		border-radius: 5px;
		padding: 1rem;
	}
	button {
		margin: 4rem 0;
		padding: 1rem;
		border: none;
		transition:
			background-color 0.4s ease-in-out,
			color 0.3s ease-in-out;
	}
	button:hover {
		background-color: #127714;
		color: #eee;
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
	.image-box {
		display: grid;
		grid-template-columns: repeat(auto-fill, 10vw);
		grid-auto-rows: 10vw;
		grid-gap: 2rem;
		max-width: 100%;
		justify-items: center;
		align-items: center;
		padding-top: 3rem;
	}
	.grid-item {
		position: relative;
		width: 100%;
		height: 100%;
	}
	.grid-item img {
		width: 100%;
		height: 100%;
		filter: brightness(90%);
		object-fit: cover;
		transition: filter 0.2s ease-in-out;
	}

	#deleteImg {
		position: absolute;
		top: 0.5rem;
		right: 0;
		width: 6rem;
		padding: 0;
		margin: 0;
		border: none;
		background: transparent;
		color: #fefdfd;
		opacity: 1;
	}
	#deleteImg:hover {
		color: #d33340;
	}
	#selectOrder {
		position: absolute;
		top: 1rem;
		left: 0.5rem;
		border: 1px solid #fefdfd;
		background: #12121262;
		padding: 1rem 0;
		color: #fefdfd;
		opacity: 1;
	}
	#orderBtn {
		margin: 0;
		padding: 0;
		background: transparent;
		color: #fefdfd;
		transition: all 0.5s;
	}

	#orderBtn:hover {
		color: #127714;
		transform: translateX(1rem);
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
