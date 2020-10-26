const mysql = require("mysql");

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'admin_app'
})

connection.connect((err) => {
    if (err) {
        console.log(err)
    } else {
        console.log('DB Connected')
    }
})


module.exports = connection
