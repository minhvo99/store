import express from 'express';
import {
   authorization,
   forgotPassword,
   getUserProfile,
   logIn,
   loginWithGoogle,
   register,
   resetPassword,
   updatePassword,
} from '../controllers/auth.js';

const authRoute = express.Router();

authRoute.post('/sign-up', register);
authRoute.post('/log-in', logIn);
authRoute.post('/forgot-password', forgotPassword);
authRoute.post('/google-login', loginWithGoogle);
authRoute.patch('/reset-password/:token', resetPassword);
authRoute.patch('/change-password', authorization, updatePassword);
authRoute.get('/profile', authorization, getUserProfile);

export default authRoute;
