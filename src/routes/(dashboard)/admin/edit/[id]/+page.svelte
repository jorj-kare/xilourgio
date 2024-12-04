<script>
	import { PUBLIC_CLOUDINARY_URL } from '$env/static/public';
	export let data;

	let category = data.products[0].category;
	let subCategory = data.products[0].subCategory;
	let description = data.products[0].description;
	let pictures = data.products[0].pictures;
</script>

<div class="form-box">
	<form>
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
		<label for="imgUploader">Φωτογραφίες</label>
		<input id="imgUploader" type="file" name="img" required multiple />
		<button type="submit">Καταχώρηση</button>
	</form>
	<div class="image-box">
		{#each data.products[0].pictures as product, index}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="grid-item">
				<img
					src={PUBLIC_CLOUDINARY_URL + product}
					alt={product}
					data-index={index}
					title={product}
				/>
			</div>
		{/each}
	</div>
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
		width: 30vw;
		padding: 10px;
	}
	label {
		margin-top: 15px;
	}
	button {
		margin-top: 25px;
	}
	.image-box {
		display: grid;
		grid-template-columns: repeat(auto-fill, minmax(80px, 1fr));
		grid-gap: 50px;
		justify-items: center;
		align-items: center;
		width: 60vw;
		padding-top: 3rem;
	}
</style>
