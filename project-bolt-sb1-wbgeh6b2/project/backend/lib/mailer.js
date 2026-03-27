import nodemailer from 'nodemailer';

function getMailConfig() {
  const {
    EMAIL_USER,
    EMAIL_APP_PASSWORD,
    EMAIL_TO = 'hy5451819@gmail.com',
  } = process.env;

  if (!EMAIL_USER || !EMAIL_APP_PASSWORD) {
    return null;
  }

  return {
    user: EMAIL_USER,
    pass: EMAIL_APP_PASSWORD,
    to: EMAIL_TO,
  };
}

export async function sendContactEmail(contact) {
  const mailConfig = getMailConfig();

  if (!mailConfig) {
    console.warn('Email credentials are missing. Skipping contact email delivery.');
    return { delivered: false };
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: mailConfig.user,
      pass: mailConfig.pass,
    },
  });

  await transporter.sendMail({
    from: `"Webforge Contact Form" <${mailConfig.user}>`,
    to: mailConfig.to,
    replyTo: contact.email,
    subject: `New Webforge inquiry from ${contact.name}`,
    text: [
      `Name: ${contact.name}`,
      `Email: ${contact.email}`,
      `Service: ${contact.service}`,
      `Budget: ${contact.budget}`,
      '',
      'Message:',
      contact.message,
    ].join('\n'),
    html: `
      <h2>New Webforge inquiry</h2>
      <p><strong>Name:</strong> ${contact.name}</p>
      <p><strong>Email:</strong> ${contact.email}</p>
      <p><strong>Service:</strong> ${contact.service}</p>
      <p><strong>Budget:</strong> ${contact.budget}</p>
      <p><strong>Message:</strong></p>
      <p>${contact.message.replace(/\n/g, '<br />')}</p>
    `,
  });

  return { delivered: true };
}
