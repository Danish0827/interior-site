import nodemailer from "nodemailer";

type SendMailParams = {
  to: string;
  name: string;
  subject: string;
  body: string;
};

// Define the return type of the function
type SendMailResult = {
  success: boolean;
  message?: string;
  error?: string;
};

export async function sendmail({
  to,
  name,
  subject,
  body,
}: SendMailParams): Promise<SendMailResult> {
  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "info.team.website@gmail.com",
      pass: "rupi cvcd ikfn wtki",
    },
  });

  try {
    // Verify transporter connection
    const testResult = await transporter.verify();
    // console.log("Transporter verified:", testResult);
  } catch (error) {
    // console.error("Error verifying transporter:", error);
    return { success: false, error: "Transporter verification failed" };
  }

  try {
    // Send email
    const sendResult = await transporter.sendMail({
      from: '"MCM Phoenix" <info.team.website@gmail.com>',
      to,
      subject,
      html: body,
    });
    // console.log("Email sent:", sendResult);
    return { success: true };
  } catch (error) {
    // console.error("Error sending email:", error);
    return { success: false, error: "Email sending failed" };
  }
}
