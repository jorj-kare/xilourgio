<script>
	import GiPhone from 'svelte-icons/gi/GiPhone.svelte';
	import MdEmail from 'svelte-icons/md/MdEmail.svelte';
	import IoLogoInstagram from 'svelte-icons/io/IoLogoInstagram.svelte';
	import IoLogoFacebook from 'svelte-icons/io/IoLogoFacebook.svelte';
	import { lng, contact } from '$stores';
</script>

<main>
	<div class="contact-text">
		<h1>{$lng == 'gr' ? $contact.title.gr : $contact.title.en}</h1>
		<h2>
			{$lng == 'gr' ? $contact.text.gr : $contact.text.en}
		</h2>
	</div>
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
</main>

<style>
	main {
		display: flex;
		flex-direction: column;
		align-content: flex-end;
		justify-content: flex-end;
		width: 100vw;
		min-height: 100vh;
		background-image: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
			url(../../../lib/media/hero_img.jpg);
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
	}
	.contact-text {
		display: flex;
		flex-direction: column;
		justify-items: center;
		align-items: start;
		width: 55%;
		padding: 5rem;

		& h1 {
			width: 90%;
			margin-bottom: 0.5rem;
			border-bottom: 1px solid var(--color-secondary);
			font-size: 4rem;
			font-weight: 300;
		}
		& h2 {
			font-size: 2.2rem;
			font-weight: 300;
		}
	}

	.contact {
		display: flex;
		flex-wrap: wrap;
		gap: 5rem;
		padding: 0 5rem;
		padding-bottom: 5rem;
		font-size: 2rem;
		font-weight: 300;
		& div {
			display: inline-flex;
		}
		& a {
			text-decoration: none;
		}
	}

	.icon {
		width: 5rem;
		padding-right: 0.5rem;
		color: rgb(209, 99, 65);
		transition: all 0.2s;
	}
	a {
		transition: all 0.3s;
	}
	.link-box:hover .icon {
		transform: scale(1.05);
	}
	.link-box:hover a {
		text-shadow: 5px 5px 15px var(--color-secondary);
	}
	@media (max-width: 1024px) {
		.contact-text {
			padding: 5rem 3rem;
		}
		.contact {
			padding: 3rem;
		}
	}
	@media (max-width: 992px) {
		.contact-text {
			width: 80%;
		}
		.contact {
			gap: 1rem 3rem;
		}
		.icon {
			width: 4rem;
		}
	}
	@media (max-width: 768px) {
		.contact-text {
			justify-content: flex-end;
			height: 100vh;
			width: 100%;
			padding: 5rem 3rem;
		}
		.contact {
			flex-direction: column;
			gap: 1rem;
			padding: 3rem;
			border-block: 1px solid var(--color-secondary);
			background-color: var(--color-primary);
			font-size: 1.8rem;
		}
	}
</style>
