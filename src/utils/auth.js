import jwt from 'jsonwebtoken';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
dotenv.config();

const JWT_TOKEN = process.env.JWT_TOKEN;
const JWT_REFRESH_TOKEN = process.env.JWT_REFRESH_TOKEN;
const ACCESS_TOKEN_EXPIRATION_TIME = process.env.ACCESS_TOKEN_EXPIRATION_TIME || '1h';
const REFRESH_TOKEN_EXPIRATION_TIME = process.env.REFRESH_TOKEN_EXPIRATION_TIME || '7d';

export const signToken = (user) => {
   const accessToken = jwt.sign({ id: user._id }, JWT_TOKEN, {
      expiresIn: ACCESS_TOKEN_EXPIRATION_TIME,
   });
   const refreshToken = jwt.sign({ id: user._id }, JWT_REFRESH_TOKEN, {
      expiresIn: REFRESH_TOKEN_EXPIRATION_TIME,
   });
   return { accessToken, refreshToken };
};

export const comparePassword = async (comparePassword, userPassWord) => {
   return await bcrypt.compare(comparePassword, userPassWord);
};
