// adminController.mjs
import adminService from "../services/adminService.mjs";
const adminController={
 getAllUsers:async(req, res) =>{
  const userType=req.user;
  const users = await adminService.getAllUsers();
  if (users) {
    res.status(200).json(users);
  } else {
    res.status(400);
    throw new error("error in fetching all users");
  }
},

registerUser:async(req, res)=> {
  const { username, email, password, roles } = req.body;
  if (!username || !email || !password) {
    res.status(400);
    throw new Error("All fields are mandatory");
  }
  const user = await adminService.registerUser(username, email, password, roles);
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
      res.status(400).json({ error: "All fields are necessary" });
      return;
    }
    const bookData = { title, author, quantity };
    const result = await adminService.addBook(bookData);
    if(book){
    res.status(200).json({ message: "Book added successfully", book: result });
  } else{
      res.status(500);
      throw new error("book not added");
  }
},


updateBook:async(req, res) =>{
  const { bookId }= req.params;
  const { title, author, quantity } = req.body;
  if (!title ||!author || !quantity) {
    res.status(400).json({ error: "At least one field is required for updating the book" });
    return;
  }
  const updatedData = { title, author, quantity };
  if(book){
  const result = await adminService.editBook(bookId, updatedData);
  res.status(200).json({ message: "Book updated successfully", book: result });
} else{
  res.status(500);
  throw new error("book not updated");
}
},



 assignRolesAndPermissions:async(req, res)=> {
  const { userId, roles, permissions } = req.body;
  if (!userId || !roles || !permissions) {
    res.status(400).res.json({error:"all fields are mandotory"});
    return;
  }
  const user = await adminService.assignRolesAndPermissions(userId, roles, permissions);
  if (username) {
    res.status(200).json({ _id: user.id, roles: user.roles });
  } else {
    res.status(400);
    throw new error("permissions is not assigned properly")
  }
},

trackBorrowingAndReturns:async(req, res)=> {
    const { userId, bookId, action } = req.body;
    if(!userId||!bookId||!action){
      res.status(400).res.json({error:"all fields are must"});
      return;
    }
    if(borrowingAndReturns){
   await adminService.trackBorrowingAndReturns(userId, bookId, action);
    res.json({ message: 'Borrowing/Return tracked successfully' });
  } else{
    res.status(500);
    throw new error("tracking get failed");
  }
},

 manageOverdueFines:async(req, res)=> {

    const { userId, amount } = req.body;
    if(!userId||!amount){
      res.status(400).res.json({error:"userid and amounts are required fields "});
      return;
    }
     await adminService.manageOverdueFines(userId, amount);
     if(overdueFines){
    res.json({ message: 'Overdue fines managed successfully' });
  } else {
    res.status(500);
    throw new error("overdue fines not managed properly");
  }
},

 generateLibraryReport:async(req, res)=> {
    const reportData=await adminService.generateLibraryReport();
    if(libraryReport){
    res.json({ message: 'Library report generated successfully' });
  } else {
    res.status(500);
   throw new error("library report generated failed");
  }
}
}

export default adminController;