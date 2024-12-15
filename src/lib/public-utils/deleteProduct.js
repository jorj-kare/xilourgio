import { notifier } from '@beyonk/svelte-notifications';
import { invalidateAll } from '$app/navigation';
export async function deleteProduct(productId) {
	if (confirm('Εισαι σίγουρος οτι θέλεις να διαγράψεις αυτήν την καταχώρηση?') == false) return;
	const res = await fetch(`/api/product/${productId}`, {
		method: 'DELETE'
	});
	if (!res.ok) {
		notifier.warning('Κάτι πήγε στραβά, προσπάθησε ξανά αργότερα.');
	}

	invalidateAll();
	notifier.success('Η καταχώριση διαγράφηκε επιτυχώς');
}
