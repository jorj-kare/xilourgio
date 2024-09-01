import { error, json } from '@sveltejs/kit';
import User from '$lib/server/models/admin';

export const POST = async ({ request }) => {
	try {
		const data = await request.json();

		if (!data.username || !data.password) {
			throw error(400, 'Παρακαλώ δώστε όνομα χρήστη και κωδικό');
		}
		const newUser = await User.create({
			username: data.username,
			password: data.password
		});
		if (!newUser) throw error(400, 'Κάτι πήγε στραβά, προσπαθήστε ξανά');
		return json(
			{
				data: { newUser }
			},
			{ status: 201, statusText: 'success' }
		);
	} catch (error) {
		throw error(error.status, error.message);
	}
};
