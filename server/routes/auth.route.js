import  express from 'express';
import { adminLogin, googleLogin, login, logout, signup } from '../controllers/auth.controller.js';

const authRouter = express.Router();
authRouter.post('/signup',signup);
authRouter.post('/login',login);
authRouter.get('/logout',logout);
authRouter.post('/googleLogin',googleLogin);
authRouter.post('/adminLogin',adminLogin);

export default authRouter;