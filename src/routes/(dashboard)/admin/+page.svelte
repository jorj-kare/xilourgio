<script>
	import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';

	import { PUBLIC_CLOUDINARY_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte';
	import MdModeEdit from 'svelte-icons/md/MdModeEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	import { goto } from '$app/navigation';

	export let data;
	let category;
	let products = data.products.slice();
	let selectElement = [];
	const timeout = 3000;
	let showSelect = false;

	export async function deleteProduct(productId) {
		if (confirm('Εισαι σίγουρος οτι θέλεις να διαγράψεις αυτήν την καταχώρηση?') == false) return;
		const res = await fetch(`/api/product/${productId}`, {
			method: 'DELETE'
		});
		if (!res.ok) {
			notifier.warning('Κάτι πήγε στραβά, προσπάθησε ξανά αργότερα.');
		}

		notifier.success('Η καταχώριση διαγράφηκε επιτυχώς');
	}

	function filterByCategory() {
		if (category) {
			let categoryArr = category.split(',');
			products = data.products.slice();
			products = products.filter((p) => {
				if (categoryArr.length > 1) {
					return p.category == categoryArr[0] || p.category == categoryArr[1];
				}
				return p.category == categoryArr[0];
			});
			showSelect = true;
		} else {
			showSelect = false;
			products = data.products.slice();
			selectElement = [];
		}
	}

	async function sortProducts() {
		for (let i = 0; i < products.length; i++) {
			console.log(products[i].categoryIndex, i + 1);

			if (products[i].categoryIndex != i + 1) {
				const formData = new FormData();
				formData.append('categoryIndex', i + 1);
				const res = await fetch(`/api/product/${products[i]._id}`, {
					method: 'PATCH',
					body: formData
				});
				if (!res.ok) {
					const resJson = await res.json();
					notifier.danger(resJson.message);
				}
			}
		}

		notifier.success('Η σειρά άλλαξε επιτυχώς');
		setTimeout(() => {
			goto(`${$page.url.pathname}/create`, { invalidateAll: true }).then(() => goto('/admin'));
		}, 3000);
	}

	async function deleteAndUpdate(productId) {
		deleteProduct(productId);
		products = products.filter((product) => product._id != productId);
		sortProducts();
	}

	$: selectElement.forEach((value, index) => {
		let temp;
		if (value != index) {
			temp = products[index];
			products[index] = products[value];
			products[value] = temp;
			selectElement[index] = index;
		}
	});
</script>

<NotificationDisplay {timeout} />
<nav>
	<button type="button" id="create">new<a href="/admin/create"><IoIosAdd /></a></button>
	<select id="category" bind:value={category} on:change={filterByCategory}>
		<option value="">Ολες οι κατηγορίες</option>
		<option value="ntoulapes,kouzines">Ντουλάπες-Κουζίνες</option>
		<option value="koufomata">Κουφώματα</option>
		<option value="eidikes_kataskeues,epipla">Επιπλα-Ειδικές κατασκευές</option>
		<option value="metallikes_kataskeues">Μεταλλικές κατασκευές</option>
	</select>
</nav>
<div class="container">
	<NotificationDisplay {timeout} />
	{#key products}
		{#each products as product, index}
			<!-- svelte-ignore a11y-click-events-have-key-events -->
			<!-- svelte-ignore a11y-no-static-element-interactions -->
			<div class="grid-item">
				<img
					src={PUBLIC_CLOUDINARY_URL + product.pictures[0]}
					alt={product.description}
					data-index={index}
				/>
				<div class="anchor-box">
					<a class="anchor" href="{$page.url.pathname}/edit/{product._id}"> <MdModeEdit /></a>
					<button class="anchor" id="delete" on:click={deleteAndUpdate(product._id)}
						><MdDelete /></button
					>
					{#if showSelect}
						<form>
							<select bind:value={selectElement[index]}>
								{#each products as p, i (i)}
									<option value={i} selected={index == i ? true : false}>{i + 1}</option>
								{/each}
							</select>
						</form>
					{/if}
				</div>
			</div>
		{/each}
	{/key}
	{#if showSelect}
		<button id="orderBtn" on:click={sortProducts}><span>SAVE</span> </button>
	{/if}
</div>

<style>
	nav {
		position: absolute;
		display: flex;
		align-items: center;
		top: 0;
		left: 0;
		width: 100%;
	}
	#create {
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		width: 7rem;
		height: 7rem;
		margin: 4rem;
		padding: 3rem;
		border: 2px solid #e9e6e6;
		background-color: rgb(5, 5, 5);
		border-radius: 50%;
		color: #e9e6e6;
		font-weight: 700;
		transition: all 1s;
	}
	#create a {
		position: absolute;
		bottom: -0.8rem;
		right: -3rem;
		display: inline-block;
		width: 6rem;
		color: #e9e6e6;
		transition: all 1s;
	}
	#create:hover {
		background-color: rgb(34, 132, 93);
		color: #e9e6e6;
	}
	#create a:hover {
		transform: scale(1.3);
		color: #e9e6e6;
	}
	#category {
		padding: 1rem;
		border-width: 2px;
	}

	.container {
		display: grid;
		grid-template-columns: repeat(auto-fill, 15vw);
		grid-auto-rows: 18vw;
		grid-gap: 2rem;
		justify-items: center;
		align-items: center;
		width: 100vw;
		min-height: 100vh;
		padding: 15rem 4rem;
		background-color: rgb(5, 5, 5);
	}
	.grid-item {
		display: flex;
		flex-direction: column;
		width: 100%;
		height: 100%;
		border: 1px solid #e9e6e6;
		border-radius: 5px;
	}

	.grid-item img {
		display: block;
		width: 100%;
		height: 80%;
		padding: 2px;
		border: 4px solid rgb(5, 5, 5);
		border-radius: 5px;
		color: #e9e6e6;
		object-fit: cover;
	}
	.anchor-box {
		display: flex;
		align-content: center;
		align-items: center;
		justify-content: center;
		gap: 3rem;
		padding: 1rem 2rem;
		border-top: 1px solid #e9e6e6;
	}
	.anchor-box button {
		border: none;
		background: transparent;
		padding: 0;
		color: inherit;
	}
	.anchor {
		display: block;
		width: 25px;
		color: #e9e6e6;
		transition: all 0.5s;
	}
	.anchor:hover {
		color: rgb(22, 173, 22);
		cursor: pointer;
	}
	#delete:hover {
		color: rgb(173, 22, 52);
	}
	select {
		background: #12121262;
		padding: 0.5rem 1rem;
		border: 1px solid #fefdfd;
		border-radius: 5px;
		color: #fefdfd;
		opacity: 1;
	}
	select * {
		background-color: black;
	}
	#orderBtn {
		position: relative;
		display: flex;
		align-items: end;
		justify-content: center;
		margin: 0;
		padding: 0;
		width: 18rem;
		height: 15rem;
		color: #0f0e0e;
		font-weight: 700;
		transition: all 1.3s;
		clip-path: polygon(50% 0%, 0% 100%, 100% 100%);
		cursor: pointer;
	}

	#orderBtn:hover {
		transform: rotate(-180deg);
	}

	#orderBtn:hover span {
		transform: translateY(-6rem);
		background-color: #ae1212;
	}

	#orderBtn span {
		position: absolute;
		bottom: -0.5rem;
		background-color: #0f0e0e;
		color: #e9e6e6;
		padding: 3rem 2rem;
		border-radius: 50%;
		transition: all 1s 1s;
	}
</style>
