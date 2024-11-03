const prisma = require("../prisma/prisma");
const bcrypt = require("bcrypt");


exports.register = async (req, res) => {
    try {
        const { email, password } = req.body

        // Step 1 Validation
        if (!email) {
            return res.status(400).json({
                success: false,
                message: 'Invalid email'
            })
        }

        if (!password) {
            return res.status(400).json({
                success: false,
                message: 'Invalid password'
            })
        }

        // Step 2 Check Email Already Exists
        const checkUser = await prisma.user.findUnique({
            where: {
                email: email,
            }
        })

        if (checkUser) {
            return res.status(400).json({
                success: false,
                message: 'Email already exists'
            })
        }

        // Step 3 Hash Password
        const salt = await bcrypt.genSalt(10)
        const hashPassword = await bcrypt.hash(password, salt)

        // Step 4 Register
        const userData = {
            email: email,
            password: hashPassword,
        }

        const newUser = await prisma.user.create({
            data: userData,
            select: {
                id: true,
                email: true
            }
        })

        res.json({
            success: true,
            message: 'Register Success',
        })
    } catch (err) {
        console.log(err)
        res.send("Server Error").status(500)
    }
}

exports.login = (req, res) => {
    res.send("Hello Login")
}