import mongoose, {Schema} from "mongoose";

const userSchema = new Schema(
   {
      name: {
         type: String,
         required: [true, 'Name is required'],
      },
      email: {
         type: String,
         required: [true, 'Email is required'],
         unique: true,
         lowercase: true,
         validate: [validator.isEmail, 'Email is invalid'],
      },
      avatar: String,
      password: {
         type: String,
         required: [true, 'Please provide a password'],
         minlength: 8,
         select: false,
      },
      passWordConfirm: {
         type: String,
         required: [true, 'Please confirm your password'],
         validate: {
            //this only works on CREATE and SAVE !!!
            validator: function (this, value) {
               return value === this.password;
            },
            message: 'Passwords are not the same',
         },
      },
      passWordChangeAt: Date,
      role: {
         type: String,
         enum: ['guest', 'admin'],
         default: 'guest',
      },
      passWordResetToken: String,
      passWordResetExpires: Date,
      active: {
         type: Boolean,
         default: true,
         select: false,
      },
   },
   {
      toJSON: { virtuals: true },
      toObject: { virtuals: true },
   },
)