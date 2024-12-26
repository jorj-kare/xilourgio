<script>
	import { fade } from 'svelte/transition';
	import IoIosMenu from 'svelte-icons/io/IoIosMenu.svelte';
	import Icon from '@iconify/svelte';
	import IoIosCloseCircleOutline from 'svelte-icons/io/IoIosCloseCircleOutline.svelte';
	import { lng, navText } from '$stores';

	let hidden = true;
	let innerWidth;

	function toggleMenu() {
		hidden = !hidden;
	}
</script>

<svelte:window bind:innerWidth />
<nav>
	{#if innerWidth < 1440}
		{#if hidden}
			<button
				type="button"
				class="menu-icon icon-btn"
				on:click={toggleMenu}
				transition:fade={{ duration: 0 }}
			>
				<IoIosMenu></IoIosMenu>
			</button>
		{/if}

		{#if !hidden}
			<button
				type="button"
				class="close-icon icon-btn"
				on:click={toggleMenu}
				transition:fade={{ duration: 0 }}
			>
				<IoIosCloseCircleOutline></IoIosCloseCircleOutline>
			</button>
			<ul>
				<li in:fade={{ delay: 100, duration: 300 }} out:fade={{ delay: 300, duration: 300 }}>
					<a href="/kouzines-ntoulapes"
						><Icon icon="mdi:closet-outline" style="font-size: 30px" /><span>
							{$lng == 'gr' ? $navText.gr[0] : $navText.en[0]}
						</span>
					</a>
				</li>
				<li in:fade={{ delay: 200, duration: 300 }} out:fade={{ delay: 400, duration: 300 }}>
					<a href="/koufomata"
						><Icon icon="bi:door-open-fill" style="font-size: 30px" /><span>
							{$lng == 'gr' ? $navText.gr[1] : $navText.en[1]}</span
						></a
					>
				</li>
				<li in:fade={{ delay: 300, duration: 300 }} out:fade={{ delay: 300, duration: 300 }}>
					<a href="/epipla-eidikes_kataskeues"
						><Icon icon="hugeicons:cabinet-03" style="font-size: 30px" /><span>
							{$lng == 'gr' ? $navText.gr[2] : $navText.en[2]}</span
						></a
					>
				</li>
				<li in:fade={{ delay: 400, duration: 300 }} out:fade={{ delay: 200, duration: 300 }}>
					<a href="/metallikes_kataskeues"
						><Icon icon="mdi:eiffel-tower" style="font-size: 30px" /><span>
							{$lng == 'gr' ? $navText.gr[3] : $navText.en[3]}</span
						></a
					>
				</li>

				<li in:fade={{ delay: 600, duration: 300 }} out:fade={{ delay: 0, duration: 300 }}>
					<a href="/epikoinonia">
						<Icon icon="majesticons:phone-retro-line" style="font-size: 30px" /><span
							>{$lng == 'gr' ? $navText.gr[4] : $navText.en[4]}</span
						>
					</a>
				</li>
			</ul>
			<select name="lng" id="lng" bind:value={$lng}>
				<option value="gr" selected>gr</option>
				<option value="en">en</option>
			</select>
		{/if}
	{:else}
		<a href="/">
			<img
				src="https://res.cloudinary.com/dqn25bn8q/image/upload/v1726864132/xilourgio/rvhzddqjubrp1o1nybuq.png"
				alt="logo"
			/></a
		>

		<a href="/kouzines-ntoulapes"
			><Icon icon="mdi:closet-outline" style="font-size: 40px" />{#if $lng == 'gr'}
				<span>Ντουλάπες-<br />Κουζίνες</span>
			{:else}
				<span>{$navText.en[0]}</span>
			{/if}
		</a>
		<a href="/koufomata"
			><Icon icon="bi:door-open-fill" style="font-size: 40px" /><span
				>{$lng == 'gr' ? $navText.gr[1] : $navText.en[1]}</span
			></a
		>
		<a href="/epipla-eidikes_kataskeues"
			><Icon icon="hugeicons:cabinet-03" style="font-size: 40px" />
			{#if $lng == 'gr'}
				<span>Έπιπλα-Ειδικές<br />κατασκευές</span>
			{:else}
				<span>{$navText.en[2]}</span>
			{/if}</a
		>
		<a href="/metallikes_kataskeues"
			><Icon icon="mdi:eiffel-tower" style="font-size: 40px" />{#if $lng == 'gr'}
				<span>Μεταλλικές<br />κατασκευές</span>
			{:else}
				<span>Metal<br />construction</span>
			{/if}</a
		>

		<a href="/epikoinonia">
			<Icon icon="majesticons:phone-retro-line" style="font-size: 40px" /><span
				>{$lng == 'gr' ? $navText.gr[4] : $navText.en[4]}</span
			>
		</a>
		<select name="lng" id="lng" bind:value={$lng}>
			<option value="gr" selected>GR</option>
			<option value="en">EN</option>
		</select>
	{/if}
</nav>
<slot></slot>
<footer></footer>

<style>
	iconify-icon {
		display: inline-block;
		width: 1em;
		height: 1em;
	}

	nav {
		position: absolute;
		display: flex;
		top: 0;
		width: 100vw;
		height: 9rem;
		font-weight: 400;
		font-style: normal;
		z-index: 10;
	}

	a {
		display: inline-flex;
		align-items: flex-end;
		padding-bottom: 1px;
		color: #fafafa;
		font-size: clamp(18px, 2vw, 28px);
		line-height: 1.2;
		text-decoration: none;
		border-bottom: 2px solid #fafafa;
	}

	a span {
		padding-left: 8px;
		word-spacing: -3px;
	}
	.icon-btn {
		border: none;
		background: transparent;
	}

	.menu-icon {
		color: #fafafa;
		transition: all 0.4s;
		width: 4.5rem;
		margin: 15px;
		margin-left: 5px;
	}
	.menu-icon:hover {
		filter: drop-shadow(0px 5px 5px rgba(249, 248, 248, 0.4));
	}
	.close-icon {
		color: #fafafa;
		width: 4.5rem;
		margin: 15px;
		margin-left: 5px;
	}
	ul {
		position: absolute;
		top: 9rem;
		width: max-content;
		padding: 20px;
		padding-left: 5px;
		background-color: rgba(15, 16, 16, 0.805);
		border-radius: 5px;
	}

	li {
		list-style: none;
		margin-top: 8px;
		transition: all 0.5s;
		/* tex-shadow 0.7s; */
	}
	li:hover {
		transform: translateX(5px);
	}

	@media (min-width: 1440px) {
		nav {
			display: grid;
			grid-template-columns: 12rem repeat(5, 1fr) 10rem;
			justify-items: center;
			align-items: center;
			align-content: center;
			height: 9rem;
			padding: 0 10px;
			background-color: rgba(5, 5, 5, 0.488);
			border-bottom: 1px solid #eee;
		}

		a {
			justify-content: baseline;
			align-items: center;
			position: relative;
			color: #d4d2d2;
			font-size: clamp(16px, 1.5vw, 22px);
			border: none;
			transition: all 0.4s;
		}
		a span {
			padding-left: 8px;
			line-height: 1;
		}
		a:hover {
			color: #fafafa;
			text-shadow: 5px 5px 15px #fafafa;
		}

		img {
			position: relative;
			right: 2rem;
			height: 75px;
			width: 75px;
			border: 1px solid #d4d2d2;
			border-radius: 50%;
			transition: all 0.4s;
		}
		img:hover {
			filter: drop-shadow(0px 0px 10px rgba(249, 248, 248, 0.4));
		}
	}
	select {
		background: transparent;
		padding: 1rem;
		border: none;
		outline: none;
		color: #fefdfd;
		font-size: 2.1rem;
		opacity: 1;
	}
	select * {
		background-color: black;
	}
</style>
