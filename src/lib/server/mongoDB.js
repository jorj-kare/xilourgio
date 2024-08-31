import mongoose from 'mongoose';
import { DATABASE_URL } from '$env/static/private';

export function connectToDatabase() {
	console.log('connection to mongoDB Atlas...');
	return mongoose.connect(DATABASE_URL);
}
