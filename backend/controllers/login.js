const login = async (req, res) => {
    const { email, password } = req.body;

    try {
        if (email === "itshaniish@gmail.com" && password === process.env.LOGIN_KEY) {
            res.status(200).json({
                message: "Login successfull",
            })
        }
        else {
            res.status(404).json({
                message: "Invalid Credientials",
            })
        }


    } catch (error) {
        console.log('Error in login controller: ', error);
        return res.status(500).json({ error: 'Server Internal Error' });
    }

}

module.exports = login;