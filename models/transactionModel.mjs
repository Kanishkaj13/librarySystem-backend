

import mongoose from'mongoose';

const transactionSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
  bookId: { type: mongoose.Schema.Types.ObjectId, ref: 'Book', required: true },
  action: { type: String, enum: ['borrow', 'return'], required: true },
  timestamp: { type: Date, default: Date.now },
  
});

const Transaction = mongoose.model('Transaction', transactionSchema);
export default Transaction;
