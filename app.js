const express = require('express')
const cors = require('cors')
const morgan = require('morgan')
const bodyParser = require('body-parser')
const connection = require('./db_config')

const app = express()
app.use(morgan('dev'))
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())
app.use(cors())

const authRoute = require('./api/routes/Auth')
const adminRoute = require('./api/routes/User')
app.use('/api/auth', authRoute)
app.use('/api/admin/user', adminRoute)

const port = process.env.PORT || 4000
app.get('/', (req, res) => {
    res.send('I am root route')
})

app.listen(port, () => {
    console.log(`Server running on ${port} port`)
})