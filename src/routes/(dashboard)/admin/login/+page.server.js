import { error, redirect } from '@sveltejs/kit';
export const actions = {
	default: async ({ request, fetch }) => {
		const formData = await request.formData();

		const res = await fetch('/api/auth/login', {
			method: 'POST',
			body: formData
		});
		const resJson = await res.json();
		console.log(resJson, 222);

		if (!res.ok)
			throw error(res.status, {
				message: resJson.message
			});

		throw redirect(302, '/admin');
	}
};
