import { error, json } from '@sveltejs/kit';
import Product from '$lib/server/models/product';
import { cloudinary, deleteCloudinaryImages } from '$lib/server/utils/cloudinary.js';

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
	const publicIdArr = product.pictures.map((picture) => picture.split('.')[0]);

	await deleteCloudinaryImages(publicIdArr);

	return new Response(null, { status: 204 });
};
