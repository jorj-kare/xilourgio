<script>
	import { NotificationDisplay, notifier } from '@beyonk/svelte-notifications';
	import { invalidateAll } from '$app/navigation';
	import { PUBLIC_CLOUDINARY_URL } from '$env/static/public';
	import { page } from '$app/stores';
	import IoIosAdd from 'svelte-icons/io/IoIosAdd.svelte';
	import MdModeEdit from 'svelte-icons/md/MdModeEdit.svelte';
	import MdDelete from 'svelte-icons/md/MdDelete.svelte';
	export let data;

	const timeout = 3000;
	async function deleteProduct(productId) {
		if (confirm('Εισαι σίγουρος οτι θέλεις να διαγράψεις αυτήν την καταχώρηση?') == false) return;
		const res = await fetch(`/api/product/${productId}`, {
			method: 'DELETE'
		});
		if (!res.ok) {
			notifier.warning('Κάτι πήγε στραβά, προσπάθησε ξανά αργότερα.');
		}
		console.log(res);

		invalidateAll();
		notifier.success('Η καταχώριση διαγράφηκε επιτυχώς');
	}
</script>

<nav>new<a href="/admin/create"><IoIosAdd /></a></nav>
<div class="container">
	<NotificationDisplay {timeout} />
	{#each data.products as product, index}
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
				<button class="anchor" id="delete" on:click={deleteProduct(product._id)}>
					<MdDelete /></button
				>
			</div>
		</div>
	{/each}
</div>

<style>
	nav {
		grid-row: 1/2;
		position: relative;
		display: flex;
		align-items: center;
		justify-content: center;
		align-self: baseline;
		width: 7rem;
		height: 7rem;
		margin: 4rem;
		padding: 3rem;
		border: 1px solid #e9e6e6;
		color: rgb(22, 173, 22);
		border-radius: 50%;
		font-weight: 700;
		transition: all 1s;
	}
	nav a {
		position: absolute;
		bottom: -0.8rem;
		right: -3rem;
		display: inline-block;
		width: 6rem;
		color: #e9e6e6;
		transition: all 1s;
	}
	nav:hover {
		background-color: rgb(22, 173, 22);
		color: #e9e6e6;
	}
	nav a:hover {
		/* transform: rotate(360deg); */
		transform: scale(1.3);
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
		padding: 110px 4rem;
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
</style>
