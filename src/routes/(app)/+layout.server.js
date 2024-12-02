export const load = async ({ fetch, url }) => {
	try {
		const res = await fetch(`/api/product?category=${url.pathname}`);
		return await res.json();
	} catch (err) {
		console.log(err);
	}
};
