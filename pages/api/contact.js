const mail = require("@sendgrid/mail");

mail.setApiKey(process.env.SENDGRID_API_KEY);

const handler = async (req, res) => {
  const body = req.body;

  const message = `
    www.xianyaong.com\r\n
    Name: ${body.name}\r\n
    Email: ${body.email}\r\n
    Message: ${body.message}
  `;

  const data = {
    to: "xianyaong@gmail.com",
    from: "yao009@hotmail.com",
    subject: body.subject,
    text: message,
    html: message.replace(/\r\n/g, "<br />"),
  };

  await mail.send(data);

  res.status(200).json({ status: "OK" });
};

export default handler;
