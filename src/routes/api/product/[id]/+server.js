import { error, json } from '@sveltejs/kit';
import Product from '$lib/server/models/product';
import { deleteCloudinaryImages, uploadToCloudinary } from '$lib/server/utils/cloudinary.js';

export const GET = async ({ params }) => {
	const products = await Product.findById(params.id);
	if (!products) {
		throw error(404, 'Δεν βρέθηκε αντικείμενο με αυτο τον κωδικό');
	}
	return json(
		{ products },
		{
			status: 200,
			statusText: 'success'
		}
	);
};

export const PATCH = async ({ params, request }) => {
	let cloudRes;
	try {
		const formData = await request.formData();
		const newImgs = formData.getAll('newImg');
		const deletedImg = formData.get('deletedImg');
		const orderedImgs = formData.getAll('orderedImgs');
		let data;

		if (orderedImgs.length > 0) {
			data = {
				$set: {
					pictures: orderedImgs
				}
			};
		} else if (deletedImg) {
			const public_id = deletedImg.split('.')[0];

			cloudRes = await deleteCloudinaryImages([public_id]);

			if (cloudRes?.error) {
				throw error(400, cloudRes.error.message);
			}
			data = { $pull: { pictures: deletedImg } };
		} else if (newImgs.length > 0) {
			cloudRes = await uploadToCloudinary(newImgs);

			if (cloudRes?.error) {
				console.log(cloudRes.error);
				throw error(400, cloudRes.error.message);
			}
			data = { $push: { pictures: cloudRes.filenames } };
		} else {
			data = {
				$set: {
					category: formData.get('category'),
					subCategory: formData.get('subCategory'),
					description: formData.get('description')
				}
			};
		}
		let updatedProduct = await Product.updateOne({ _id: params.id }, data);

		if (updatedProduct.matchedCount == 0) {
			throw error(404, 'Δεν βρέθηκε καταχώρηση με αυτόν τον κωδικό');
		}
		return json(
			{ updatedProduct },
			{
				status: 200,
				statusText: 'success'
			}
		);
	} catch (e) {
		deleteCloudinaryImages(cloudRes.publicId);
		const status = e?.status ? e.status : 400;
		const msg = e?.body?.message
			? e.body.message
			: 'Ουπς, κάτι πήγε στραβά, η αλλαγή δεν αποθηκεύτηκε, προσπάθησε ξανά.';
		throw error(status, msg);
	}
};

export const DELETE = async ({ params }) => {
	const product = await Product.findByIdAndDelete(params.id);

	if (!product) throw error(404, 'Δεν βρέθηκε αντικείμενο με αυτο το id.');
	const publicIdArr = product.pictures.map((picture) => picture.split('.')[0]);

	await deleteCloudinaryImages(publicIdArr);

	return new Response(null, { status: 204 });
};
