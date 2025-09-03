import express from 'express';
import isAuth from '../middlewares/isAuth.js';
import { getAdmin, getCurrentUser } from '../controllers/user.controller.js';
import isAdminAuth from '../middlewares/isAdminAuth.js';
let userRouter = express.Router();

userRouter.get('/getcurrentuser', isAuth, getCurrentUser);
userRouter.get('/getadmin', isAdminAuth, getAdmin);;

export default userRouter;