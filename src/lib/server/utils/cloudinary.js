import {
	CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET
} from '$env/static/private';
import sha256 from 'sha256';
import { nanoid } from 'nanoid';

export async function uploadToCloudinary(images) {
	let publicId = [];
	let filenames = [];
	if (images.length > 0) {
		for (let i = 0; i < images.length; i++) {
			const resCloud = await cloudinary({
				publicId: nanoid(),
				file: images[i],
				action: 'upload',
				folder: 'xilourgio'
			});

			publicId[i] = resCloud.public_id;
			filenames[i] = `${resCloud.public_id}.${resCloud.format}`;
			if (resCloud.error) {
				await deleteCloudinaryImages(publicId);
				return { error: resCloud.error };
			}
		}
		return { publicId, filenames };
	}
}

export async function deleteCloudinaryImages(publicIdArr) {
	if (publicIdArr?.length > 0) {
		for (let i = 0; i < publicIdArr.length; i++) {
			const resC = await cloudinary({
				publicId: publicIdArr[i],
				action: 'destroy',
				folder: 'xilourgio'
			});
			console.log(resC);
			if (resC.result == 'not found') {
				return { error: { message: 'image not found' } };
			}
		}
	}
}

export async function cloudinary({ file, publicId, action = 'upload', folder }) {
	let signature;
	const formData = new FormData();
	const timestamp = Date.now();

	if (action === 'destroy') {
		signature = sha256(`public_id=${publicId}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`);
	}

	if (action === 'upload' && file?.type.startsWith('image')) {
		signature = sha256(
			`folder=${folder}&public_id=${publicId}&timestamp=${timestamp}${CLOUDINARY_API_SECRET}`
		);

		formData.append('file', file);
		formData.append('folder', folder);
	}

	formData.append('api_key', CLOUDINARY_API_KEY);
	formData.append('public_id', publicId);
	formData.append('timestamp', timestamp);
	formData.append('signature', signature);
	const urlCloudinary = `https://api.cloudinary.com/v1_1/${CLOUDINARY_CLOUD_NAME}/image/${action}`;

	const resCloud = await fetch(urlCloudinary, {
		method: 'POST',
		body: formData
	});

	const resCloudJson = await resCloud.json();
	return resCloudJson;
}
