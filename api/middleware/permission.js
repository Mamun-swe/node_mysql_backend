const jwt = require('jsonwebtoken')
const conn = require('../../db_config')

const adminRoleCheck = (req, res, next) => {
    try {
        const token = req.headers.authorization.split(' ')[1]
        const decode = jwt.verify(token, 'SECRET')
        const email = decode.email
        conn.query("SELECT * FROM users WHERE email = ? AND role = ? AND token = ?", [email, 'admin', token], (err, user) => {
            if (!err)
                if (user.length > 0)
                    next()
                else
                    return res.status(401).json({
                        message: 'You have no permission.'
                    })
        })

    } catch (error) {
        res.status(401).json({
            message: 'You have no permission.'
        })
    }
}

module.exports = {
    adminRoleCheck
}