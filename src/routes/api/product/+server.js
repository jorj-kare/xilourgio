import { error, json } from '@sveltejs/kit';
import Product from '$lib/server/models/product';

export const POST = async ({ request }) => {
	try {
		const formData = await request.formData();
		let countFilters;
		if (formData.get('category') == 'ntoulapes' || formData.get('category') == 'kouzines') {
			countFilters = ['kouzines', 'ntoulapes'];
		} else if (
			formData.get('category') == 'epipla' ||
			formData.get('category') == 'eidikes_kataskeues'
		) {
			countFilters = ['epipla', 'eidikes_kataskeues'];
		} else {
			countFilters = [formData.get('category')];
		}
		let count = await Product.countDocuments({ category: countFilters });
		count++;
		const newProduct = await Product.create({
			category: formData.get('category'),
			subCategory: formData.get('subCategory'),
			description: formData.get('description'),
			descriptionEn: formData.get('descriptionEn'),
			pictures: JSON.parse(formData.get('img')),
			categoryIndex: count
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
		let category = url.searchParams.get('category');
		if (category) {
			category = category.slice(1).split('-');
			params = { category };
		}

		const products = await Product.find(params).sort('categoryIndex');
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
