// userController.js
const userService = require('../services/userService');

const exploreLibraryCatalog = async (req, res) => {
  try {
    const result = await userService.exploreLibraryCatalog();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const checkOutBook = async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const result = await userService.checkOutBook(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const placeHoldOnBook = async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const result = await userService.placeHoldOnBook(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const viewAccountStatus = async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await userService.viewAccountStatus(userId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const offerFeedback = async (req, res) => {
  try {
    const feedbackDetails = req.body;
    const result = await userService.offerFeedback(feedbackDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const updatePersonalInformation = async (req, res) => {
  try {
    const { userId, updatedData } = req.body;
    const result = await userService.updatePersonalInformation(userId, updatedData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const followLibraryPoliciesAndGuidelines = async (req, res) => {
  try {
    const result = await userService.followLibraryPoliciesAndGuidelines();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const payFines = async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const result = await userService.payFines(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const giveFeedback = async (req, res) => {
  try {
    const feedbackDetails = req.body;
    const result = await userService.giveFeedback(feedbackDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

const donateBook = async (req, res) => {
  try {
    const donationDetails = req.body;
    const result = await userService.donateBook(donationDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
};

module.exports = {
  exploreLibraryCatalog,
  checkOutBook,
  placeHoldOnBook,
  viewAccountStatus,
  offerFeedback,
  updatePersonalInformation,
  followLibraryPoliciesAndGuidelines,
  payFines,
  giveFeedback,
  donateBook,
};
