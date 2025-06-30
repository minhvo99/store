import express from 'express';
import authRoute from './auth.js';

const appRouter = express.Router();

appRouter.use('', authRoute);

export default appRouter;
