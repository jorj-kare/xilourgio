import { model, Schema } from 'mongoose';

const productSchema = new Schema({
	category: {
		type: String,
		enum: ['έπιπλo', 'κουζίνα', 'κουφώματα', 'ειδικές κατασκευές'],
		require: true,
		trim: true
	},
	subCategory: {
		type: String,
		enum: ['ντουλάπα', 'τραπέζι', 'ράφια', ''],
		trim: true
	},
	material: {
		type: String,
		enum: ['ξύλο', 'μέταλλο', 'ξύλο-μέταλλο', 'άλλο']
	},
	description: String,
	pictures: [
		{
			path: String,
			cover: { type: Boolean, default: false }
		}
	]
});
const Product = model('Product', productSchema);
export default Product;
