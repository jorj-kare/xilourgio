import { error, fail } from '@sveltejs/kit';

export const load = async ({ fetch, params }) => {
	try {
		const id = params.id;
		const res = await fetch(`/api/product/${id}`);

		return await res.json();
	} catch (err) {
		console.log(err);
	}
};
export const actions = {
	edit: async ({ request, fetch, params }) => {
		try {
			const formData = await request.formData();
			const res = await fetch(`/api/product/${params.id}`, {
				method: 'PATCH',
				body: formData
			});
			const resJson = await res.json();
			if (!res.ok) {
				throw error(res.status, resJson.message);
			}

			return { success: true };
		} catch (err) {
			console.log(err);
			return fail(err.status, { error: err?.body?.message });
		}
	}
};
