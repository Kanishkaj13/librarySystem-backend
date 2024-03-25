import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  userid :{ type: mongoose.Schema.Types.ObjectId, ref: 'User', required: false }, 
  username: { type: String, required: [true, "Please add username"], unique: true },
  password: { type: String, required: [true, "Please add user password"] },
  email: {
    type: String,
    required: [true, "Please add user email address"],
    unique: [true, "Email address already taken"],
  },
  roles: { type: String, required: [true, "Please add user roles"], default: "user" },
});

const User = mongoose.model('User', userSchema);
export default User;