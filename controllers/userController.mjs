// userController.js
import userService from "../services/userService.mjs";
const userController = {
exploreLibraryCatalog : async (req, res) => {
  try {
    const result = await userService.exploreLibraryCatalog();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 checkOutBook : async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const result = await userService.checkOutBook(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 placeHoldOnBook : async (req, res) => {
  try {
    const { userId, bookId } = req.body;
    const result = await userService.placeHoldOnBook(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 viewAccountStatus : async (req, res) => {
  try {
    const { userId } = req.params;
    const result = await userService.viewAccountStatus(userId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},
 offerFeedback :async (req, res) => {
  try {
    const feedbackDetails = req.body;
    const result = await userService.offerFeedback(feedbackDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 updatePersonalInformation : async (req, res) => {
  try {
    const { userId, updatedData } = req.body;
    const result = await userService.updatePersonalInformation(userId, updatedData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

followLibraryPoliciesAndGuidelines : async (req, res) => {
  try {
    const result = await userService.followLibraryPoliciesAndGuidelines();
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

payFines : async (req, res) => {
  try {
    const { userId, amount } = req.body;
    const result = await userService.payFines(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 giveFeedback : async (req, res) => {
  try {
    const feedbackDetails = req.body;
    const result = await userService.giveFeedback(feedbackDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

donateBook :async (req, res) => {
  try {
    const donationDetails = req.body;
    const result = await userService.donateBook(donationDetails);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
}

export default userController;
