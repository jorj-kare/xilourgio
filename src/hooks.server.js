import User from '$lib/server/models/admin';
import { connectToDatabase } from '$lib/server/mongoDB.js';
import { verifyToken } from '$lib/server/utils/jwt';
import { redirect } from '@sveltejs/kit';

const restrictedPaths = ['/admin', '/admin/create', '/admin/edit'];

connectToDatabase().then(async () => {
	console.log('You have successfully connected to the database!');
});

export const handle = async ({ event, resolve }) => {
	const jwt = event.cookies.get('jwt');
	const url = new URL(event.request.url);
	if (!jwt && restrictedPaths.includes(url.pathname.split('/', 3).join('/'))) {
		throw redirect(302, '/admin/login');
	}
	if (jwt) {
		const decoded = await verifyToken(jwt);

		const user = await User.findById(decoded?.id);

		if (!user && url.pathname == '/admin') {
			throw redirect(302, '/admin/login');
		}
		if (user) {
			event.locals.user = {
				user
			};
		}
	}
	return await resolve(event);
};
