const express = require('express')
const router = express.Router()
const Authenticate = require('../middleware/permission')
const UserController = require('../controllers/admin/UserController')

router.post('/', Authenticate.adminRoleCheck, UserController.CreateUser)
router.get('/', UserController.AllUsers)
router.get('/total', UserController.CountUser)

module.exports = router