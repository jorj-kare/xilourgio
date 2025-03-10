<script>
	import Icon from '@iconify/svelte';
	import MdMoreVert from 'svelte-icons/md/MdMoreVert.svelte';
	import { fade } from 'svelte/transition';
	import { lng, navText, mainHeader } from '$stores';

	let hidden = true;
	let innerWidth;

	function toggleMenu(e) {
		if (e.target.id == 'lng') return;
		else if (e.target.closest('a')) {
			setTimeout(() => {
				hidden = !hidden;
			}, 50);
		} else hidden = !hidden;
	}
</script>

<svelte:window bind:innerWidth />
<nav>
	{#if innerWidth <= 768}
		<a class="logo-s" href="/">{$lng == 'gr' ? $mainHeader.title.gr : $mainHeader.title.en} </a>

		<button type="button" class="menu-btn" on:click={toggleMenu} transition:fade={{ duration: 0 }}>
			<span class="line"></span><span class="line"></span><span class="line"></span>
		</button>

		{#if !hidden}
			<ul on:click={toggleMenu}>
				<li in:fade={{ delay: 50, duration: 300 }} out:fade={{ delay: 350, duration: 300 }}>
					<a href="/"
						><Icon icon="heroicons:home" />
						<span>
							{$lng == 'gr' ? 'Αρχική' : 'Home'}
						</span>
					</a>
				</li>
				<li in:fade={{ delay: 100, duration: 300 }} out:fade={{ delay: 300, duration: 300 }}>
					<a href="/kouzines-ntoulapes"
						><Icon icon="mdi:closet-outline" />
						<span>
							{$lng == 'gr' ? $navText.gr[0] : $navText.en[0]}
						</span>
					</a>
				</li>

				<li in:fade={{ delay: 200, duration: 300 }} out:fade={{ delay: 200, duration: 300 }}>
					<a href="/epipla-eidikes_kataskeues"
						><Icon icon="hugeicons:cabinet-03" /><span>
							{$lng == 'gr' ? $navText.gr[2] : $navText.en[2]}</span
						></a
					>
				</li>
				<li in:fade={{ delay: 250, duration: 300 }} out:fade={{ delay: 150, duration: 300 }}>
					<a href="/metallikes_kataskeues"
						><Icon icon="mdi:eiffel-tower" /><span>
							{$lng == 'gr' ? $navText.gr[3] : $navText.en[3]}</span
						></a
					>
				</li>
				<li in:fade={{ delay: 150, duration: 300 }} out:fade={{ delay: 250, duration: 300 }}>
					<a href="/koufomata"
						><Icon icon="bi:door-open-fill" /><span>
							{$lng == 'gr' ? $navText.gr[1] : $navText.en[1]}</span
						></a
					>
				</li>

				<li in:fade={{ delay: 300, duration: 300 }} out:fade={{ delay: 100, duration: 300 }}>
					<a href="/epikoinonia">
						<Icon icon="majesticons:phone-retro-line" /><span
							>{$lng == 'gr' ? $navText.gr[4] : $navText.en[4]}</span
						>
					</a>
				</li>
				<li
					id="lng-box"
					in:fade={{ delay: 350, duration: 300 }}
					out:fade={{ delay: 50, duration: 300 }}
				>
					<Icon icon="material-symbols-light:language" />
					<select name="lng" id="lng" bind:value={$lng}>
						<option value="gr">Ελληνικά</option>
						<option value="en">English</option>
					</select>
				</li>
			</ul>
		{/if}
	{:else}
		<a id="logo-box" href="/">
			<img
				id="logo"
				src="https://res.cloudinary.com/dqn25bn8q/image/upload/v1726864132/xilourgio/rvhzddqjubrp1o1nybuq.png"
				alt="logo"
			/></a
		>

		<a href="/kouzines-ntoulapes"
			><Icon icon="mdi:closet-outline" />{#if $lng == 'gr'}
				<span>Ντουλάπες-<br />Κουζίνες</span>
			{:else}
				<span>Kitchens-<br />Wardrobes</span>
			{/if}
		</a>

		<a href="/epipla-eidikes_kataskeues"
			><Icon icon="hugeicons:cabinet-03" />
			{#if $lng == 'gr'}
				<span>Έπιπλα-Ειδικές<br />κατασκευές</span>
			{:else}
				<span>{$navText.en[2]}</span>
			{/if}</a
		>

		<a href="/metallikes_kataskeues"
			><Icon icon="mdi:eiffel-tower" />{#if $lng == 'gr'}
				<span>Μεταλλικές<br />κατασκευές</span>
			{:else}
				<span>Metal<br />construction</span>
			{/if}</a
		>
		<a href="/koufomata"
			><Icon icon="bi:door-open-fill" /><span>{$lng == 'gr' ? $navText.gr[1] : $navText.en[1]}</span
			></a
		>

		<a href="/epikoinonia">
			<Icon icon="majesticons:phone-retro-line" />
			<span>{$lng == 'gr' ? $navText.gr[4] : $navText.en[4]}</span>
		</a>
		<div class="box-select">
			<Icon icon="material-symbols-light:language" />
			<span id="icon-more"><MdMoreVert /></span>
			<select name="lng" id="lng" bind:value={$lng}>
				<option value="gr">GR</option>
				<option value="en">EN</option>
			</select>
		</div>
	{/if}
</nav>
<slot></slot>

<style>
	:global(.iconify-icon) {
		display: inline-block;
		width: 1em;
		height: 1em;
	}
	:global(.iconify) {
		font-size: 3.6rem;
	}

	nav {
		position: absolute;
		top: 0;
		display: grid;
		grid-template-columns: 12rem repeat(5, 1fr) 12rem;
		grid-auto-rows: 11rem;
		justify-items: center;
		justify-content: center;
		align-items: center;
		align-content: center;
		width: 100vw;
		background-color: rgba(5, 5, 5, 0.488);
		border-bottom: 1px solid var(--color-secondary);
		font-weight: 300;
		font-style: normal;
		z-index: 10;
	}

	a {
		position: relative;
		display: inline-flex;
		align-items: center;
		height: 100%;
		font-size: 2.1rem;
		text-decoration: none;
		transition: all 0.4s;
	}
	a:hover {
		text-shadow: 5px 5px 15px var(--color-secondary);
	}
	a span {
		padding-left: 0.8rem;
		line-height: 1;
	}

	#logo {
		position: relative;
		height: 7rem;
		width: 7rem;
		border: 1px solid var(--color-secondary);
		border-radius: 50%;
		transition: all 0.4s;
	}
	#logo:hover {
		filter: drop-shadow(0px 0px 10px rgba(249, 248, 248, 0.4));
	}
	#icon-more {
		display: none;
	}

	span {
		padding-left: 0.8rem;
	}
	.box-select {
		display: inline-flex;
		align-items: center;
		margin-right: 2rem;
	}
	select {
		color: var(--color-secondary);
		background: transparent;
		border: none;
		outline: none;
		font-size: 1.8rem;
		opacity: 1;
	}
	:global(.box-select .iconify) {
		flex-shrink: 0;
	}

	select * {
		background-color: var(--color-primary);
	}

	/* -------------MEDIA-QUERIES-------------- */
	@media (max-width: 1280px) {
		nav {
			grid-template-columns: 10rem repeat(5, 1fr) 10rem;
		}
	}
	@media (max-width: 1024px) {
		nav {
			grid-template-columns: 10rem repeat(5, 1fr) 4rem;
		}

		#icon-more {
			position: absolute;
			right: 0;
			transform: translateX(-50%);
			display: block;
			width: 3.5rem;
		}
		.box-select select {
			position: relative;
			appearance: none;
			width: 100%;
			cursor: pointer;
			color: transparent;
		}
		.box-select select option {
			color: var(--color-secondary);
		}
		:global(.iconify--material-symbols-light) {
			display: none;
		}
	}
	@media (max-width: 992px) {
		:global(.iconify) {
			display: none;
		}

		a span {
			white-space: nowrap;
		}

		#logo {
			height: 6.5rem;
			width: 6.5rem;
		}
		#icon-more {
			position: absolute;
			right: -1rem;
		}
	}
	@media (max-width: 768px) {
		:global(.iconify) {
			display: inline-block;
		}

		nav {
			position: absolute;
			top: 0;
			width: 100%;
			height: 12rem;
			padding-top: 1rem;
			padding-bottom: 2rem;
			border: none;
			background-color: var(--color-primary);
			z-index: 11;
		}

		a {
			align-items: flex-end;
			padding-bottom: 1px;
			font-size: 2.2rem;
			line-height: 1.2;
			border-bottom: 1px solid var(--color-secondary);
		}

		a span {
			padding-left: 0.8rem;
		}
		.menu-btn {
			grid-column: 6/-1;
			justify-self: end;
			align-self: center;
			display: flex;
			flex-direction: column;
			align-items: flex-end;
			margin-right: 3rem;
			background-color: transparent;
			border: none;
		}
		.line {
			height: 3px;
			background-color: var(--color-secondary);
			margin-bottom: 1rem;
			width: 5rem;
		}

		ul {
			position: absolute;
			top: 11rem;
			width: 100%;
			padding: 2rem;
			background-color: var(--color-primary);
		}

		li {
			list-style: none;
			margin-top: 1rem;
			font-weight: 200;
		}

		#lng-box {
			display: inline-flex;
			align-items: center;
			border-bottom: 1px solid var(--color-secondary);
		}
		#lng {
			padding: 0;
		}

		select:lang(en) {
			font-size: 2.2rem;
		}

		.logo-s {
			grid-column: 1/6;
			grid-row: 1/2;
			font-weight: 900;
			font-size: 3.5rem;
			align-self: center;
			align-items: center;
			border-bottom: none;
			padding-left: 4rem;
			word-spacing: 1000px;
		}
		.logo-s:hover {
			text-shadow: none;
		}
		.logo-s:active {
			text-shadow: 5px 5px 15px var(--color-secondary);
		}
	}
	@media (max-width: 640px) {
		.menu-btn {
			margin-right: 1rem;
		}
		.line {
			height: 2px;
		}
		.logo-s {
			padding-left: 2rem;
		}
	}
</style>
