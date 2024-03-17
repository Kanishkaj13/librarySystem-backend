// holdModel.js

import mongoose from'mongoose';

const holdSchema = new mongoose.Schema({
  user: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true }, // Assuming there's a User model
  book: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true }, // Assuming there's a Book model
  startDate: { type: Date, required: true },
  endDate: { type: Date, required: true },
});

const Hold = mongoose.model('Hold', holdSchema);
export { Hold};
