const jwt = require("jsonwebtoken")

exports.auth = (req, res, next) => {
    try {
        const token = req.header("x-auth-token")

        if (!token) {
            return res.status(401).json(
                {
                    message: "No Token, Authorization Denied"

                })
        }

        const verifiedToken = jwt.verify(token, "kaiKa", (err, decode) => {
            if (err) {
                return res.status(401).json({
                    success: false,
                    message: "Token is not valid"
                })
            } else {
                console.log(decode)
                req.user = decode;
                // console.log('token', verifiedToken)

                next()
            }
        })

    } catch (err) {
        console.log("Something wrong in middleware")
        res.status(500).json({ message: "Server Error" })
    }

}