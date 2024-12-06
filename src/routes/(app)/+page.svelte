<script>
	import video from '$lib/media/166808-835670743.mp4';
	import AnimateHeader from '../../lib/AnimateHeader.svelte';
	const imgArr = [
		'https://res.cloudinary.com/dqn25bn8q/image/upload/v1727470059/xilourgio/56dBO1Niw2nQIQYTRukrk.jpg',
		'https://res.cloudinary.com/dqn25bn8q/image/upload/v1727469634/xilourgio/8DEnGdTULgwPTiyaU3y-b.jpg',
		'https://res.cloudinary.com/dqn25bn8q/image/upload/v1727469634/xilourgio/2qD__zLmvqeRN6eMyAZLa.jpg'
	];
</script>

<div class="container">
	<header>
		<video playsinline autoplay muted loop>
			<source src={video} type="video/webm" />
			Your browser does not support the video tag.
		</video>
		<div class="title-box">
			<h1>Αποστόλης Περιδίκης</h1>
			<p>
				Αν αγαπάτε το ξύλο όσο κι εμείς, τότε είστε στο σωστό μέρος! Στο ξυλουργείο μας φτιάχνουμε
				τα πάντα από ξύλο με μεράκι και φαντασία. Είτε χρειάζεστε κάτι μικρό, είτε μια μεγαλύτερη
				κατασκευή, είμαστε εδώ για να το φτιάξουμε όπως ακριβώς το θέλετε!
			</p>
		</div>
	</header>
	<section>
		<AnimateHeader imgPathArr={imgArr}>
			<div class="info">
				<div>
					<h2>Τι κάνουμε</h2>
					<ul>
						<li>
							Επί παραγγελία κατασκευές: Έπιπλα, ντουλάπες, ράφια, κουζίνες και ό,τι άλλο
							φανταστείτε – όλα φτιαγμένα με τα χέρια μας και με μεγάλη προσοχή στη λεπτομέρεια.
						</li>
						<li>
							Επισκευές & ανακαινίσεις: Έχετε κάποιο παλιό έπιπλο που χρειάζεται ανανέωση; Εμείς το
							φέρνουμε ξανά στη ζωή!
						</li>
					</ul>
					<p>
						Τέλος επειδή στοχεύουμε στην ολοκληρωμένη εξυπηρέτηση σας, σας παρέχουμε τη συνεργασία
						και την υποστήριξή μας ακόμα και μετά την πώληση.
					</p>
				</div>

				<div>
					<h2>Γιατί να μας επιλέξετε</h2>
					<ul>
						<li>
							Ποιότητα με προσωπικότητα: Κάθε έργο μας είναι φτιαγμένο με προσοχή και υλικά που
							διαρκούν.
						</li>
						<li>
							Φαντασία και εμπειρία: Έχουμε χρόνια εμπειρίας και πολλές ιδέες για να κάνουμε το
							σπίτι σας ή το γραφείο σας να ξεχωρίσει.
						</li>
						<li>
							Γρήγορα και άμεσα: Η δουλειά μας ολοκληρώνεται στην ώρα της, χωρίς να χάνουμε την
							ποιότητα.
						</li>
						<li>
							Ανοιχτοί σε ιδέες: Είμαστε πάντα ανοιχτοί να ακούσουμε τις ιδέες σας και να δουλέψουμε
							μαζί για το καλύτερο αποτέλεσμα.
						</li>
					</ul>
				</div>
				<div>
					<h2>Δώστε ζωή στον χώρο σας</h2>
					<p>
						Αν ψάχνετε κάποιον να φτιάξει ή να ανακαινίσει τον χώρο σας με αγάπη και φροντίδα, μη
						διστάσετε να επικοινωνήσετε μαζί μας. Είμαστε έτοιμοι να δώσουμε ζωή στα σχέδιά σας!
					</p>
					<p>
						Η κάθε λύση που προτείνουμε συνδυάζει λειτουργικότητα, εργονομία και αισθητική χωρίς να
						της λείπει ταυτόχρονα και η ποιότητα.
					</p>
				</div>
			</div>
		</AnimateHeader>
	</section>
</div>

<style>
	.container {
		scroll-snap-type: y mandatory;
		height: 100vh;
		overflow-y: scroll;
		word-spacing: -2px;
	}
	header {
		display: grid;
		grid-template-columns: 50% 1fr;
		align-items: flex-end;
		justify-content: start;
		height: 100%;
		width: 100vw;
		scroll-snap-align: start;
	}

	video {
		grid-column: 1/-1;
		grid-row: 1/2;
		height: 100vh;
		width: 100vw;
		object-fit: cover;
		filter: brightness(60%);
	}
	.title-box {
		grid-column: 1/2;
		grid-row: 1/2;
		width: 100%;
		padding: 2rem;
		margin-left: 3rem;
		margin-bottom: 50px;
		border-radius: 5px;
		color: #ffffff;
		font-weight: 300;
		font-size: 2rem;
		z-index: 10;
	}
	.title-box h1 {
		font-weight: 300;
		font-size: 4rem;
		border-bottom: 2px solid #f3f2f2;
	}
	section {
		position: relative;
		z-index: 11;
	}
	.info {
		display: flex;
		grid-template-columns: 1fr 1fr 1fr;
		align-items: flex-end;
		align-content: end;
		gap: 4rem;
		padding: 30px;
		height: 100vh;
		border-top: 2px solid #f3f2f2;
		background-size: cover;
		background-repeat: no-repeat;
		background-position: center;
		scroll-snap-align: start;
		z-index: 11;
	}
	.info div {
		color: #f3f2f2;
		font-size: 2rem;
		padding: 15px;
	}
	.info h2 {
		font-size: 3rem;
		font-weight: 700;
		word-spacing: -6px;
		border-bottom: 1px solid #f3f2f2;
	}

	ul {
		padding: 1rem;
	}
	.info p {
		padding-top: 5px;
	}
</style>
