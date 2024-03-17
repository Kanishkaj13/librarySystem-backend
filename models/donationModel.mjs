// donationModel.js

import mongoose from'mongoose';

const donationSchema = new mongoose.Schema({
  donorName: { type: String, required: true },
  amount: { type: Number, required: true },
  date: { type: Date, default: Date.now },
});

const Donation = mongoose.model('Donation', donationSchema);

export {Donation};
