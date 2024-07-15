const sendEmailFn = require('../utils/sendEmailFn.js');

const sendEmail = async (req, res) => {
    const { msg } = req.body;
    try {

        await sendEmailFn({ msg })
            .then(() => {
                res.status(200).json({
                    message: "Message sent successfully",
                })
            })
            .catch(() => {
                console.log(error);
                return res.status(500).json({
                    error: "Failed to send message"
                })
            })
    } catch (error) {
        res.status(500).json({
            error: "Internal Server Error"
        })
    }

}

module.exports = { sendEmail };