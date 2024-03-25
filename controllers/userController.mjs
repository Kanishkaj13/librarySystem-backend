// userController.js
import userService from "../services/userService.mjs";

async function exploreLibraryCatalog(req, res) {
  try {
    const result = await userService.exploreLibraryCatalog();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function checkOutBook(req, res) {
  try {
    const { userId, bookId } = req.body;
    const result = await userService.checkOutBook(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function placeHoldOnBook(req, res) {
  try {
    const { userId, bookId } = req.body;
    const result = await userService.placeHoldOnBook(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function viewAccountStatus(req, res) {
  try {
    const { userId } = req.params;
    const result = await userService.viewAccountStatus(userId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function offerFeedback(req, res) {
  try {
    const feedbackDetails = req.body;
    const result = await userService.offerFeedback(feedbackDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function updatePersonalInformation(req, res) {
  try {
    const { userId, updatedData } = req.body;
    const result = await userService.updatePersonalInformation(userId, updatedData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function followLibraryPoliciesAndGuidelines(req, res) {
  try {
    const result = await userService.followLibraryPoliciesAndGuidelines();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function functionpayFines(req, res) {
  try {
    const { userId, amount } = req.body;
    const result = await userService.payFines(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function giveFeedback(req, res) {
  try {
    const feedbackDetails = req.body;
    const result = await userService.giveFeedback(feedbackDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

async function donateBook(req, res) {
  try {
    const donationDetails = req.body;
    const result = await userService.donateBook(donationDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}

export {
  donateBook,
  giveFeedback,
  followLibraryPoliciesAndGuidelines,
  functionpayFines,
  updatePersonalInformation,
  offerFeedback,
  checkOutBook,
  placeHoldOnBook,
  viewAccountStatus,
  exploreLibraryCatalog
};