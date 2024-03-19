
import mongoose from'mongoose';

const userSchema = new mongoose.Schema({
  userid :{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  roles: { type: [String], default: ['user'] },
});

const User = mongoose.model('User', userSchema);
export default User;
 