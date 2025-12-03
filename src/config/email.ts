import nodemailer from "nodemailer";

export const sendEmail = async (to: string, subject: string, text: string) => {
  const transporter = nodemailer.createTransport({
    service: "gmail", // or your SMTP
    auth: {
      user: process.env.EMAIL_USER,
      pass: process.env.EMAIL_PASS,
    },
  });

  await transporter.sendMail({
    from: `"SaveFi Support" <${process.env.EMAIL_USER}>`,
    to,
    subject,
    text,
  });
};

export const welcomeReferralEmail = (username: string, referralCode: string) => {
  return {
    subject: "Welcome to SaveFi! Here's your referral code",
    text: `Hi ${username},

Welcome to SaveFi! Your personal referral code is: ${referralCode}

Share it with your friends to earn rewards. You can also view your referral dashboard here: https://yourapp.com/referrals

Thanks,
The SaveFi Team`
  };
};
