"use server";
const { sendmail } = require("@/lib/mail");

type SendParams = {
  name: string;
  email: string;
  phone: string;
  requirement: string;
  message: string;
};

// Define the return type of the function
type SendResult = {
  success: boolean;
  message?: string;
  error?: string;
};

export const send = async ({
  name,
  email,
  phone,
  requirement,
  message,
}: SendParams): Promise<SendResult> => {
  try {
    await sendmail({
      to: ["abrarmungi18@gmail.com", "hello@folksco.in"],
      name: name,
      subject: "Contact Form Submission - MCM Phoenix",
      body: `
        <div>
          <h3>Name: ${name}</h3>
          <h3>Email: ${email}</h3>
          <h3>Phone: ${phone}</h3>
          <h3>Requirement: ${requirement}</h3>
          <h3>Message: ${message}</h3>
        </div>
      `,
    });

    return { success: true, message: "Email sent successfully!" };
  } catch (error) {
    console.error("Error sending email:", error);
    return { success: false, error: "Failed to send email." };
  }
};
