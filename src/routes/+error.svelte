<script>
	import { page } from '$app/stores';
</script>

<div class="container">
	<div class="error">
		<h1>{$page.status}</h1>
		<h2>{$page.error.message}</h2>
	</div>
</div>

<style>
	.container {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 100vw;
		height: 100vh;
	}
	.error {
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		width: 70%;
		padding: 50px 20px;

		border: 5px solid #e90707;
		border-radius: 15px;
	}
	h1 {
		font-size: 50px;
	}
	h2 {
		font-size: 40px;
	}
</style>
