import User from '$lib/server/models/admin';
import { signToken } from '$lib/server/utils/jwt';
import { error, json } from '@sveltejs/kit';

export const POST = async ({ cookies, request }) => {
	try {
		const formData = await request.formData();

		const username = formData.get('username');
		const password = formData.get('password');

		if (!username || !password) {
			throw error(404, 'Παρακαλώ δώστε όνομα χρήστη και κωδικό.');
		}
		const user = await User.findOne({ username }).select('+password');

		const isPasswordCorrect = await user?.isPasswordCorrect(password, user.password);
		if (!user || !isPasswordCorrect) {
			throw error(404, 'Το όνομα χρήστη ή ο κωδικός είναι λάθος.');
		}
		user.password = '';
		const token = signToken(user._id.toHexString());

		cookies.set('jwt', token, { path: '/' });
		return json({
			token,
			data: { user }
		});
	} catch (err) {
		return error(err.status, { message: err.body.message, status: err.status });
	}
};
