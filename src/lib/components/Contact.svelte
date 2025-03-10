<script>
	import GiPhone from 'svelte-icons/gi/GiPhone.svelte';
	import MdEmail from 'svelte-icons/md/MdEmail.svelte';
	import IoLogoInstagram from 'svelte-icons/io/IoLogoInstagram.svelte';
	import IoLogoFacebook from 'svelte-icons/io/IoLogoFacebook.svelte';
	import { lng, navText } from '$stores';
	import Icon from '@iconify/svelte';
</script>

<div class="contact">
	<h1>
		{$lng == 'gr' ? 'Επικοινωνία' : 'Contact'}
	</h1>
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
	<div class="link-box">
		<div class="icon"><GiPhone /></div>
		<span>+306951400110</span>
	</div>

	<div class="link-box">
		<div class="icon"><MdEmail /></div>
		<a href="mailto:apostolisper@gmail.com">apostolisper@gmail.com</a>
	</div>
</div>

<style>
	.contact {
		grid-column: 1/3;
		grid-row: 1/-1;
		display: flex;
		flex-direction: column;
		justify-content: center;
		gap: 3rem;
		padding: 5rem 10rem;
		border-left: 3px solid var(--color-secondary);
		background-color: var(--color-primary);
		& h1 {
			border-bottom: 1px solid var(--color-secondary);
			font-size: 4rem;
			font-weight: 200;
		}
	}

	.icon {
		width: 5rem;
		padding-right: 0.5rem;
		color: rgb(209, 99, 65);
		transition: all 0.2s;
	}
	.link-box {
		display: flex;
		align-items: center;
		gap: 1.5rem;
		width: max-content;
		font-size: 2rem;
		font-weight: 200;
	}
	.link-box a {
		text-decoration: none;
		transition: all 0.2s 0.1s;
	}
	.link-box:hover .icon {
		transform: scale(1.05);
	}
	.link-box:hover a {
		text-shadow: 5px 5px 15px var(--color-secondary);
	}
	@media (max-width: 992px) {
		.contact {
			padding: 5rem;
		}
	}
	@media (max-width: 768px) {
		.contact {
			border: none;
			border-top: 1px solid var(--color-secondary);
			gap: 1rem;
		}
		.contact h1 {
			display: none;
		}
		.icon {
			width: 4rem;
			padding-right: 0.5rem;
			color: rgb(209, 99, 65);
			transition: all 0.2s;
		}
	}
	@media (max-width: 640px) {
		.contact {
			padding: 3rem;
		}
		.link-box {
			font-size: 1.8rem;
		}
	}
</style>
