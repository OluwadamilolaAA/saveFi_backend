import mongoose, { Schema, Document } from "mongoose";

export interface IUser extends Document {
  username: string;
  email: string;
  password: string;
  firstName?: string;
  lastName?: string;
  otp?: string;
  otpExpires?: Date;
  isVerified: boolean;
  referrerCode?: string;
  referredBy?: string;
  hasCompletedProfile: boolean;
}

const UserSchema = new Schema<IUser>(
  {
    username: { type: String, required: true, unique: true },
    email: { type: String, required: true, unique: true },
    password: { type: String, required: true, select: false },
    otp: String,
    otpExpires: Date,
    isVerified: { type: Boolean, default: false },

    // Popup details
    firstName: { type: String },
    lastName: { type: String },
    referrerCode: { type: String, unique: true },
    referredBy: { type: String },

    // To know if popup should show
    hasCompletedProfile: { type: Boolean, default: false },
  },
  { timestamps: true }
);

export default mongoose.model<IUser>("User", UserSchema);
