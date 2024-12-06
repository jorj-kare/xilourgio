<script>
	import GiPhone from 'svelte-icons/gi/GiPhone.svelte';
	import MdEmail from 'svelte-icons/md/MdEmail.svelte';
</script>

<main>
	<div class="container">
		<h1>Επικοινωνία με το Ξυλουργείο μας</h1>
		<h2>
			Είμαστε στη διάθεσή σας για οποιαδήποτε ερώτηση ή αίτημα σχετικά με τις ξυλουργικές υπηρεσίες
			μας. Είτε χρειάζεστε κατασκευή, επισκευή ή προσαρμογή ξύλινων αντικειμένων, το εξειδικευμένο
			προσωπικό μας είναι έτοιμο να σας βοηθήσει.
		</h2>
		<div class="border"></div>
		<div class="contact">
			<div>
				<div class="icon"><GiPhone /></div>
				<span>6942823945</span>
			</div>
			<div>
				<div class="icon"><MdEmail /></div>
				<a href="mailto:perdikisAE@gmail.com">perdikisAE@gmail.com</a>
			</div>
		</div>
	</div>
</main>

<style>
	main {
		display: flex;
		align-items: flex-end;
		justify-content: start;
		width: 100%;
		min-height: 100vh;
		color: #e9e6e6;
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url(../../../lib/media/hero_img.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	.container {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: start;
		width: 55%;
		padding: 5rem;
		border-radius: 5px;
		/* background-color: rgba(35, 35, 35, 0.764); */
	}
	.contact {
		align-self: flex-start;
		gap: 5rem;
		display: flex;
		padding: 2rem 0px;
		font-size: 2.2rem;
	}
	.contact div {
		display: inline-flex;
	}
	.contact a {
		text-decoration: none;
		color: #e9e6e6;
	}

	h1 {
		width: 90%;
		margin-bottom: 1rem;
		color: #e9e6e6;
		font-weight: 700;
		word-spacing: -5px;
		border-bottom: 1px solid #e9e6e6;
	}
	h2 {
		font-weight: 300;
		font-size: 2.2rem;
		word-spacing: -3px;
	}
	.icon {
		width: 50px;
		padding-right: 1rem;
		color: rgb(209, 99, 65);
	}
</style>
