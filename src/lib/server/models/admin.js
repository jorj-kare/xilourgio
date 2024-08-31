import { model, Schema } from 'mongoose';
import bcrypt from 'bcrypt';
const userSchema = new Schema({
	username: {
		type: String,
		unique: true,
		require: [true, 'Παρακαλώ συμπληρώστε το πεδίο με το όνομα χρήστη.'],
		minlength: [3, 'Το όνομα χρήστη πρέπει να αποτελείτε απο τουλάχιστον τρεις χαρακτήρες. '],
		maxlength: [20, 'Το όνομα χρήστη δεν πρέπει να ξεπερνάει τους 20 χαρακτήρες.'],
		trim: true
	},
	password: {
		type: String,
		required: [true, 'Παρακαλώ συμπληρώστε το πεδίο τον κωδικό. '],
		minlength: [3, 'Ο κωδικός πρέπει να αποτελείτε απο τουλάχιστον 5 χαρακτήρες. '],
		select: false
	}
});

userSchema.pre('save', async function (next) {
	if (!this.isModified('password')) return next();
	this.password = await bcrypt.hash(this.password, 12);
	next();
});
userSchema.methods.isPasswordCorrect = async function (candidatePassword, password) {
	return await bcrypt.compare(candidatePassword, password);
};
const User = model('User', userSchema);
export default User;
