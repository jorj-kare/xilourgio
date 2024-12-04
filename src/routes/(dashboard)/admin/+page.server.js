export const load = async ({ fetch, url }) => {
	try {
		const res = await fetch(`/api/product`);

		return await res.json();
	} catch (err) {
		console.log(err);
	}
};
