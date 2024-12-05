export const load = async ({ fetch, params }) => {
	try {
		const id = params.id;
		const res = await fetch(`/api/product/${id}`);

		return await res.json();
	} catch (err) {
		console.log(err);
	}
};
