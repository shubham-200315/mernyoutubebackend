import express from 'express'
// import {  register } from '../Controllers/authController.js'
// import { register} from './../Controllers/authController.js'
import { login } from './../Controllers/authController.js'
import { register } from './../Controllers/authController.js'
// import bcrypt from 'bcryptjs'
// import jwt from 'jsonwebtoken'

const router = express.Router()

router.post('/register', register)
router.post('/login', login);


export default router