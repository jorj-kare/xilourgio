import { error, fail } from '@sveltejs/kit';

import { deleteCloudinaryImages, uploadToCloudinary } from '$lib/server/utils/cloudinary.js';

export const actions = {
	default: async ({ request, fetch }) => {
		try {
			const formData = await request.formData();
			let filenames = [];
			let publicId = [];
			const images = formData.getAll('img');

			const cloudRes = await uploadToCloudinary(images);

			if (cloudRes.error) {
				console.log(cloudRes);

				throw error(400, cloudRes.error.message);
			}
			filenames = cloudRes.filenames;
			publicId = cloudRes.publicId;

			formData.set('img', JSON.stringify(filenames));

			const res = await fetch('/api/product', {
				method: 'POST',
				body: formData
			});
			if (!res.ok) {
				await deleteCloudinaryImages(publicId);

				const resError = await res.json();

				throw error(res.status, resError.message);
			}
			return { success: true };
		} catch (err) {
			return fail(err.status, { error: err?.body?.message });
		}
	}
};
