import { Router } from "express";
import {
  register,
  login,
  verifyEmail,
  resendOtp,
  forgotPassword,
  resetPassword,
  completeProfile,
} from "../controllers/user.controller";
import { auth } from "../middlewares/user.middleware";

const router = Router();

router.post("/register", register);
router.post("/login", login);
router.post("/verify-email", verifyEmail);
router.post("/resend-otp", resendOtp);
router.post("/forgot-password", forgotPassword);
router.post("/reset-password", resetPassword);

router.post("/complete-profile", auth, completeProfile);

export default router;
