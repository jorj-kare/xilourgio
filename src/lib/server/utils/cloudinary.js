import {
	CLOUDINARY_CLOUD_NAME,
	CLOUDINARY_API_KEY,
	CLOUDINARY_API_SECRET
} from '$env/static/private';
import sha256 from 'sha256';

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
