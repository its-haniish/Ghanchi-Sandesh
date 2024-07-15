const nodemailer = require('nodemailer');

const sendEmailFn = async ({ msg }) => {
    return new Promise(async (resolve, reject) => {
        let mailTransporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.GMAIL,
                pass: process.env.APP_PASS
            }
        });

        let options = {
            from: "Ghanchi Sandesh",
            to: "sarthatechnical@gmail.com",
            subject: "Ghanchi Sandesh",
            html: msg
        };

        mailTransporter.sendMail(options, (err) => {
            if (err) {
                console.log(`Failed to send message.`);
                reject(err);
            } else {
                console.log(`Message sent successfully.`);
                resolve(true);
            }
        });
    });

}

module.exports = sendEmailFn;