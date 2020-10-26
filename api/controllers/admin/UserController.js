const conn = require('../../../db_config')
const bcrypt = require('bcryptjs')


const CreateUser = (req, res) => {
    const { fullname, email, phone, role, password } = req.body
    conn.query("SELECT * FROM users WHERE email = ?", [email], (err, result) => {
        if (!err) {
            if (result.length > 0) {
                return res.status(422).json({ message: "User already created" })
            } else {
                var salt = bcrypt.genSaltSync(10);
                var hash = bcrypt.hashSync(password, salt);
                const newData = {
                    fullname,
                    email,
                    phone,
                    role,
                    password: hash
                }

                conn.query('INSERT INTO users SET ?', [newData], (err, result) => {
                    if (!err)
                        return res.status(200).json({ message: 'Successfully user created.' })
                    else
                        res.send(err)
                })
            }
        } else {
            res.send(err)
        }
    })
}


const AllUsers = (req, res) => {
    conn.query("SELECT * FROM users ORDER BY id DESC", (err, result) => {
        if (!err) {
            return res.status(200).send(result)
        }
    })
}


const CountUser = (req, res) => {
    conn.query("SELECT COUNT(*) AS users FROM users WHERE role = ?", ['user'], (err, result) => {
        if (!err)
            return res.status(200).json({
                data: result[0].users
            })
        else
            res.send(err)
    })
}

module.exports = {
    CreateUser,
    AllUsers,
    CountUser
}