import { error, json } from '@sveltejs/kit';
import Product from '$lib/server/models/product';

export const POST = async ({ request }) => {
	try {
		const formData = await request.formData();

		const newProduct = await Product.create({
			category: formData.get('category'),
			subCategory: formData.get('subCategory'),
			description: formData.get('description'),
			pictures: JSON.parse(formData.get('img'))
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
export const GET = async ({ url }) => {
	try {
		let params = {};
		const id = url.searchParams.get('id');
		let category = url.searchParams.get('category');
		if (id) params = { _id: id };
		else if (category) {
			category = category.slice(1).split('-');
			params = { category };
		}

		const products = await Product.find(params);

		return json(
			{ products },
			{
				status: 200,
				statusText: 'success'
			}
		);
	} catch (err) {
		console.log(err);
	}
};
