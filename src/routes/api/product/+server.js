import { error, json } from '@sveltejs/kit';
import Product from '$lib/server/models/product';

export const POST = async ({ request }) => {
	try {
		const formData = await request.formData();
		const newProduct = await Product.create({
			category: formData.get('category'),
			subCategory: formData.get('subCategory'),
			material: formData.get('material'),
			description: formData.get('description'),
			pictures: {
				path: formData.get('img'),
				cover: formData.get('cover')
			}
		});
		return json(
			{ data: { newProduct } },
			{
				status: 201,
				statusText: 'success'
			}
		);
	} catch (err) {
		let status;
		if (err.name === 'ValidationError') {
			status = 400;
		}

		throw error(status, err.message);
	}
};
