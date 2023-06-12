import nodemailer from 'nodemailer';

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.status(405).json({ error: 'Method not allowed' });
    return;
  }

  const { name, email, message } = req.body;

  try {
    // Create a transporter with your email service provider's SMTP settings
    const transporter = nodemailer.createTransport({
      service: 'Gmail',
      auth: {
        user: 'sebastian.castano@softfin.pro', // Enter your email address
        pass: 'Softfin123@', // Enter your password or generate an app password
      },
    });

    // Configure the email options
    const mailOptions = {
      from: 'Jhon Doe',
      to: 'sebastian.castano@softfin.pro', // Enter the recipient's email address
      subject: 'New message from your website',
      text: `Name: ${name}\nEmail: ${email}\n\nMessage: ${message}`,
    };

    // Send the email
    await transporter.sendMail(mailOptions);

    res.status(200).json({ message: 'Email sent successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Failed to send email' });
  }
}
