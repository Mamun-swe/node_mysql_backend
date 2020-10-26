const conn = require('../../../db_config')
const jwt = require('jsonwebtoken')
const bcrypt = require('bcryptjs')

const Register = (req, res, next) => {
    const { fullname, email, phone, password } = req.body
    conn.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
        if (!err) {
            if (result.length > 0) {
                return res.status(422).json({ message: "Account already created" })
            } else {
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(password, salt);
                const newData = {
                    fullname,
                    email,
                    phone,
                    password: hash
                }

                conn.query('INSERT INTO users SET ?', [newData], (err, result) => {
                    if (!err)
                        return res.status(200).json({ message: 'Successfully account created.' })
                    else
                        res.send(err)
                })
            }
        } else {
            res.send(err)
        }
    })
}


const Login = (req, res, next) => {
    const { email, password } = req.body
    conn.query("SELECT * FROM users WHERE email = ?", email, (err, user) => {
        if (!err)
            if (user.length > 0)
                bcrypt.compare(password, user[0].password, (err, result) => {
                    if (err) {
                        return res.send(err)
                    }

                    if (result) {
                        let apiToken = jwt.sign({ email, role: user[0].role, fullname: user[0].fullname }, 'SECRET', { expiresIn: '1d' });
                        conn.query("UPDATE users SET token = ? WHERE email = ?", [apiToken, email], (err, result) => {
                            if (!err)
                                return res.status(200).json({
                                    message: 'success',
                                    access_token: apiToken
                                })
                            else
                                return res.send(err)
                        })
                    } else {
                        return res.status(404).json({
                            message: 'E-mail or Password incorrect'
                        })
                    }
                })
            else
                return res.status(404).json({
                    message: 'E-mail or Password incorrect'
                })
        else
            res.send(err)
    })
}



module.exports = {
    Register,
    Login
}