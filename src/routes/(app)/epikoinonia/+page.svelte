<script>
	import GiPhone from 'svelte-icons/gi/GiPhone.svelte';
	import MdEmail from 'svelte-icons/md/MdEmail.svelte';
	import IoLogoInstagram from 'svelte-icons/io/IoLogoInstagram.svelte';
	import IoLogoFacebook from 'svelte-icons/io/IoLogoFacebook.svelte';
	import { lng, contact } from '$stores';
</script>

<main>
	<div class="container">
		<h1>{$lng == 'gr' ? $contact.title.gr : $contact.title.en}</h1>
		<h2>
			{$lng == 'gr' ? $contact.text.gr : $contact.text.en}
		</h2>

		<div class="contact">
			<div>
				<div class="icon"><GiPhone /></div>
				<span>+306951400110</span>
			</div>
			<div class="link-box">
				<div class="icon"><MdEmail /></div>
				<a href="mailto:apostolisper@gmail.com">apostolisper@gmail.com</a>
			</div>
			<div class="link-box">
				<div class="icon"><IoLogoInstagram /></div>
				<a href="https://www.instagram.com/apostolisper">Instagram</a>
			</div>
			<div class="link-box">
				<div class="icon"><IoLogoFacebook /></div>
				<a
					target="_blank"
					href="https://www.facebook.com/people/%CE%95%CF%80%CE%B9%CF%80%CE%BB%CE%BF%CF%80%CE%BF%CE%B9%CE%B5%CE%AF%CE%BF-%CE%9F%CF%81%CE%B3%CE%B1%CE%BD%CE%BF%CF%80%CE%BF%CE%B9%CE%B5%CE%AF%CE%BF-%CE%91-%CE%A0%CE%B5%CF%81%CE%B4%CE%AF%CE%BA%CE%B7%CF%82/100064016025560/"
					>Facebook</a
				>
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
		border-radius: 0.5rem;
	}
	.contact {
		align-self: flex-start;
		display: flex;
		justify-content: flex-start;
		gap: 5rem;
		width: 70vw;
		padding: 2rem 0px;
		font-size: 2.2rem;
	}
	.contact div {
		display: inline-flex;
	}
	.contact a {
		text-decoration: none;
	}

	h1 {
		width: 90%;
		margin-bottom: 1rem;
		font-weight: 700;
		word-spacing: -5px;
		border-bottom: 1px solid var(--color-secondary);
		&:lang(en) {
			word-spacing: normal;
			font-weight: 400;
		}
	}
	h2 {
		font-weight: 300;
		font-size: 2.2rem;
		word-spacing: -3px;
		&:lang(en) {
			word-spacing: normal;
			font-weight: 400;
		}
	}
	.icon {
		width: 5rem;
		padding-right: 1rem;
		color: rgb(209, 99, 65);
		transition: all 0.2s;
	}
	.link-box a {
		transition: all 0.2s 0.1s;
	}
	.link-box:hover .icon {
		transform: scale(1.05);
	}
	.link-box:hover a {
		text-shadow: 5px 5px 15px var(--color-secondary);
	}
</style>
