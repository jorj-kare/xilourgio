<script>
	import '../css/reset.css';
</script>

<nav>
	<a href="/"> Αρχική σελίδα</a>
	<a href="/epipla"> Έπιπλα</a>
	<a href="/kouzines"> Κουζίνες</a>
	<a href="/koufomata"> Κουφώματα</a>
	<a href="/epikoinonia"> Επικοινωνία</a>
</nav>
<slot></slot>

<style>
	@import url('https://fonts.googleapis.com/css2?family=Ubuntu+Mono:ital,wght@0,400;0,700;1,400;1,700&display=swap');
	:global(body) {
		font-family: 'Ubuntu Mono', monospace;
	}
	nav {
		position: fixed;
		top: 0;
		display: flex;
		width: 100vw;
		justify-content: center;
		font-weight: 400;
		font-style: normal;
	}
	a {
		color: #fafafa;
		text-decoration: none;
		padding: 10px 30px;
		font-size: clamp(18px, 2.5vw, 32px);
	}
</style>
