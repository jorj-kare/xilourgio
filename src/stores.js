import { readable, writable } from 'svelte/store';

function notifier() {
	const { subscribe, set, update } = writable([]);
	function success(msg) {
		update((items) => {
			const newArr = [{ success: msg }, ...items];
			return newArr;
		});
	}
	function error(msg) {
		update((items) => {
			const newArr = [{ error: msg }, ...items];
			return newArr;
		});
	}
	function remove() {
		update((items) => {
			const newArr = [...items];
			newArr.pop();
			return newArr;
		});
	}
	function reset() {
		set([]);
	}
	return { subscribe, error, success, remove, reset };
}
export const notify = notifier();
export const lng = writable('gr');

export const navText = readable({
	en: ['Wardrobes-Kitchens', 'Frames', 'Furniture', 'Metal constructions', 'Contact'],
	gr: [
		'Ντουλάπες-Κουζίνες',
		'Κουφώματα',
		`Έπιπλα-Ειδικές κατασκευές`,
		'Μεταλλικές κατασκευές',
		'Επικοινωνία'
	]
});
export const mainHeader = readable({
	title: { en: 'Apostilis Perdikis', gr: 'Αποστόλης Περιδίκης' },
	text: {
		en: "If you love wood as much as we do, then you've come to the right place! In our carpentry workshop we make everything out of wood with passion and imagination. Whether you need something small or a larger structure, we are here to make it exactly how you want it!",
		gr: 'Αν αγαπάτε το ξύλο όσο κι εμείς, τότε είστε στο σωστό μέρος! Στο ξυλουργείο μας φτιάχνουμε τα πάντα από ξύλο με μεράκι και φαντασία. Είτε χρειάζεστε κάτι μικρό, είτε μια μεγαλύτερη κατασκευή, είμαστε εδώ για να το φτιάξουμε όπως ακριβώς το θέλετε!'
	}
});

export const secondaryHeader = readable({
	column1: {
		title: { en: 'Upon order constructions:', gr: 'Επί παραγγελία κατασκευές:' },
		text: {
			p1: {
				en: 'Furniture, closets, shelves, kitchens and everything else you can imagine – all made with our hands ',
				gr: 'Επί παραγγελία κατασκευές: Έπιπλα, ντουλάπες, ράφια, κουζίνες και ό,τι άλλο φανταστείτε – όλα φτιαγμένα με τα χέρια μας και με μεγάλη προσοχή στη λεπτομέρεια.'
			},
			p2: {
				en: 'Repairs & renovations: Do you have any old furniture that needs renewal? We bring it back to life!',
				gr: 'Επισκευές & ανακαινίσεις: Έχετε κάποιο παλιό έπιπλο που χρειάζεται ανανέωση; Εμείς το φέρνουμε ξανά στη ζωή!'
			},
			p3: {
				en: ' Finally, because we aim for your comprehensive service, we provide you with our cooperation and support even after the sale.',
				gr: 'Τέλος επειδή στοχεύουμε στην ολοκληρωμένη εξυπηρέτηση σας, σας παρέχουμε τη συνεργασία και την υποστήριξή μας ακόμα και μετά την πώληση.'
			}
		}
	},
	column2: {
		title: { en: 'Why you should choose us', gr: 'Γιατί να μας επιλέξετε' },
		text: {
			p1: {
				en: 'Personality quality: Our every work is made with attention and materials that last.',
				gr: 'Ποιότητα με προσωπικότητα: Κάθε έργο μας είναι φτιαγμένο με προσοχή και υλικά που διαρκούν.'
			},
			p2: {
				en: 'Imagination and experience: We have years of experience and many ideas to make your home or office stand out.',
				gr: 'Φαντασία και εμπειρία: Έχουμε χρόνια εμπειρίας και πολλές ιδέες για να κάνουμε το σπίτι σας ή το γραφείο σας να ξεχωρίσει.'
			},
			p3: {
				en: ' Open to ideas: We are always open to listening to your ideas and working together for the best result.',
				gr: 'Ανοιχτοί σε ιδέες: Είμαστε πάντα ανοιχτοί να ακούσουμε τις ιδέες σας και να δουλέψουμε μαζί για το καλύτερο αποτέλεσμα.'
			}
		}
	},
	column3: {
		title: { en: 'Give new life to your place', gr: 'Δώστε ζωή στον χώρο σας' },
		text: {
			p1: {
				en: 'If you are looking for someone to build or renovate your space with love and care, do not hesitate to contact us. We are ready to give life to your plans!',
				gr: 'Αν ψάχνετε κάποιον να φτιάξει ή να ανακαινίσει τον χώρο σας με αγάπη και φροντίδα, μη διστάσετε να επικοινωνήσετε μαζί μας. Είμαστε έτοιμοι να δώσουμε ζωή στα σχέδιά σας!'
			},
			p2: {
				en: 'Each solution we propose combines functionality, ergonomics and aesthetics without missing the quality at the same time.',
				gr: 'Η κάθε λύση που προτείνουμε συνδυάζει λειτουργικότητα, εργονομία και αισθητική χωρίς να της λείπει ταυτόχρονα και η ποιότητα.'
			}
		}
	}
});

export const contact = readable({
	title: { en: 'Contact our Woodhouse', gr: 'Επικοινωνία με το Ξυλουργείο μας' },
	text: {
		en: 'We are at your disposal for any question or request regarding our carpentry services. Whether you need construction, repair or adaptation of wooden objects, our specialized staff is ready to help you.',
		gr: 'Είμαστε στη διάθεσή σας για οποιαδήποτε ερώτηση ή αίτημα σχετικά με τις ξυλουργικές υπηρεσίες μας. Είτε χρειάζεστε κατασκευή, επισκευή ή προσαρμογή ξύλινων αντικειμένων, το εξειδικευμένο προσωπικό μας είναι έτοιμο να σας βοηθήσει.'
	}
});
