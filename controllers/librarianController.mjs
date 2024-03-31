// librarianController.js
import  librarianService from "../services/librarianService.mjs";
const librarianController={
  registerUser:async(req, res)=> {
    const { username, email, password, roles } = req.body;
    if (!username || !email || !password) {
      res.status(400);
      throw new Error("All fields are mandatory");
    }
    const user = await librarianService.registerUser(username, email, password, roles);
    if (user) {
      res.status(201).json({ _id: user._id, email: user.email });
    } else {
      res.status(400);
      throw new Error("User data is not valid");
    }
  },
  addBook: async (req, res) => {
      const { title, author, quantity } = req.body;
      if (!title || !author || !quantity) {
        res.status(400).res.json({ error: "All fields are necessary" });
        return;
      }
      const bookData={title,author,quantity};
      const result = await librarianService.addBook(bookData);
      if(book){
      res.status(200).json({ message: "Book added successfully", book: result });
    } else{
      res.status(400);
      throw new Error("book not added");
    }
  },
  

editBook:async(req, res) =>{
    const { bookId } = await findById(req.params.bookId);
    const { title, author, quantity } = req.body;
    if (!title ||!author || !quantity) {
      res.status(400).json({ error: "At least one field is required for updating the book" });
      return;
    }
    const updatedData = { title, author, quantity };
    const result = await librarianService.editBook(bookId, updatedData);
    if(book){
    res.status(200).json({ message: "Book updated successfully", book: result });
  } else{
    res.status(400);
    throw new error("book not updated properly");
  }
},
removeBook: async (req, res) => {
    const {bookId}  =await findById (req.params.bookId);
    if(!book){
      res.status(400).res.status({error:"book not found"});
      return;
    }
    const result = await librarianService.removeOne(req.parms);
    if(book){
    res.status(200).json({ message: "Book removed successfully", book: result });
  } else{
    res.status(500);
  throw new error("book not removed")
}
},
 
reviewHoldsAndRequests:async(req, res)=> {
  const { userId, bookId } = req.body
  if (!userId || !bookId) {
      res.status(400).json({ error: "userId and bookId are required fields" });
      return;
  }
    const holdsAndRequestsData = await librarianService.reviewHoldsAndRequests();
    if(holdsAndRequestsData){
    res.status(200).json({holdsAndRequestsData});
  } else {
    res.status(400);
    res.json("request data not accepted");
  }
},

processCheckout:async(req, res)=> {
    const { userId, bookId } = req.body;
    if(!userId||!bookId){
      res.status(400).json({ error: "userId and bookId are required fields" });
      return; 
    }
    const result = await librarianService.processCheckout(userId, bookId);
    if(processCheckOut) {
    res.json(result);
  }else {
    res.status(400);
    res.json("processing checking out is failed");
  }
},

processReturn:async(req, res)=> {
  try {
    const { userId, bookId } = req.body;
    const result = await librarianService.processReturn(userId, bookId);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},
 manageFinesAndFees:async(req, res) =>{
  try {
    const { userId, amount } = req.body;
    const result = await librarianService.manageFinesAndFees(userId, amount);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 generateReportsAndStatistics:async(req, res) =>{
  try {
    const reportsAndStatisticsData = await librarianService.generateReportsAndStatistics();
    res.json(reportsAndStatisticsData);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
},

 manageUserAccounts:async(req, res) =>{
  try {
    const { userId } = req.params;
    const updatedData = req.body;
    const result = await librarianService.manageUserAccounts(userId, updatedData);
    res.json(result);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal Server Error' });
  }
}
};

export default librarianController;
