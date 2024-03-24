
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  // userid :{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, 
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  email: {
    type: String,
    required: [true, "Please add user email address"],
    unique: [true, "Email address already taken"],
  },
  roles: { type: String, required: true, default: "user" },
});

const User = mongoose.model('User', userSchema);
export default User;
