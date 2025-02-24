import { model, Schema } from 'mongoose';

const productSchema = new Schema({
	category: {
		type: String,
		enum: [
			'kouzines',
			'ntoulapes',
			'koufomata',
			'eidikes_kataskeues',
			'epipla',
			'metallikes_kataskeues'
		],
		require: true,
		trim: true
	},
	subCategory: {
		type: String,
		enum: ['ntoulapa', 'trapezi', 'rafia', 'bibliothiki', 'krebati', ''],
		trim: true
	},
	description: String,
	descriptionEn: String,
	pictures: [{ type: String }],
	categoryIndex: Number
});

const Product = model('Product', productSchema);
export default Product;
