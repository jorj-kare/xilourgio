import { error, json } from '@sveltejs/kit';
import Product from '$lib/server/models/product';
import { cloudinary } from '$lib/server/utils/cloudinary.js';

export const GET = async ({ params }) => {
	try {
		const products = await Product.findById(params.id);

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

export const DELETE = async ({ params }) => {
	const product = await Product.findByIdAndDelete(params.id);

	if (!product) throw error(404, 'Δεν βρέθηκε αντικείμενο με αυτο το id.');

	for (let i = 0; i < product.pictures.length; i++) {
		const resC = await cloudinary({
			publicId: product.pictures[i].split('.')[0],
			action: 'destroy',
			folder: 'xilourgio'
		});
		console.log(resC);
	}

	return new Response(null, { status: 204 });
};
