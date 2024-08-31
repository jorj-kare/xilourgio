import jwt from 'jsonwebtoken';
import { JWT_SECRET, JWT_EXPIRES_IN } from '$env/static/private';

export const signToken = (id) => jwt.sign({ id }, JWT_SECRET, { expiresIn: JWT_EXPIRES_IN });

export const verifyToken = async (token) => {
	try {
		return await jwt.verify(token, JWT_SECRET);
	} catch (err) {
		console.log(err);
	}
};
