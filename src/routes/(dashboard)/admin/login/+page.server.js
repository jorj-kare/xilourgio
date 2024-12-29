import { fail, redirect } from '@sveltejs/kit';
export const actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();

		const res = await fetch('/api/auth/login', {
			method: 'POST',
			body: formData
		});
		const resJson = await res.json();

		if (!res.ok) {
			return fail(res.status, {
				error: true,
				message: resJson.message
			});
		}
		throw redirect(302, '/admin');
	}
};
