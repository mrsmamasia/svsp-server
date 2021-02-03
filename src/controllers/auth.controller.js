require('dotenv').config()
const jsonWebTokenError = require('jsonwebtoken')
const { User } = require('../model')

module.exports = {
    async login({ body: {email, password} }, res) {
        try {
            const foundUser = await User.findOne({ email })

            if (!foundUser) {
                return res.status(403).send({
                    message: 'Извините, неверный логин или пароль!',
                    err
                })
            }

            const isPasswordCorrect = foundUser.password == password

            if (!isPasswordCorrect) {
                return res.status(403).send({
                    message: 'Извините, неверный логин или пароль!',
                    err
                })
            }

            const accessToken = jsonWebTokenError.sign({
                userid: foundUser._id,
                email: foundUser.email,
            }, process.env.JWT_SECRET)

            return res.status(200).send({
                accessToken,
                foundUser,
            })

        } catch (err){
            return res.status(403).send({
                message: 'Извините, неверный логин или пароль!',
                err
            })
        }
    },
    async singUp({body :{email, password} }, res) {
        try {
            const foundUser = await User.create({ email })
            if (foundUser) {
                return res.status(403).send({
                    message: 'Данный email занят!',
                    err
                })
            }
            const createdUser = await new User({ email, password})
            await createdUser.save()

            return res.status(200).send({
                message: "Пользователь создан"
            })

        } catch (err) {
            return res.status(403).send({
                message: 'Извините, неверный логин или пароль!',
                err
            })
        }
    }
}