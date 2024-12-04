import { error, fail } from '@sveltejs/kit';
import { nanoid } from 'nanoid';
import { cloudinary } from '$lib/server/utils/cloudinary.js';

export const actions = {
	default: async ({ request, fetch }) => {
		try {
			const formData = await request.formData();
			let filenames = [];
			let publicId = [];
			const images = formData.getAll('img');

			for (let i = 0; i < images.length; i++) {
				const resCloud = await cloudinary({
					publicId: nanoid(),
					file: images[i],
					action: 'upload',
					folder: 'xilourgio'
				});
				publicId[i] = resCloud.public_id;
				filenames[i] = `${resCloud.public_id}.${resCloud.format}`;
			}

			formData.set('img', JSON.stringify(filenames));

			const res = await fetch('/api/product', {
				method: 'POST',
				body: formData
			});
			if (!res.ok) {
				if (images.length > 0) {
					for (let i = 0; i < images.length; i++) {
						const resC = await cloudinary({
							publicId: publicId[i],
							action: 'destroy',
							folder: 'xilourgio'
						});
						console.log(resC);
					}
				}

				const resError = await res.json();
				throw error(res.status, resError.message);
			}
			return { success: true };
		} catch (err) {
			return fail(err.status, { error: err?.body?.message });
		}
	}
};
