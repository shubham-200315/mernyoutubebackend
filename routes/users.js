import express from 'express'
import { deleteUser, getAllUser, getSingleUser, updateUser } from '../Controllers/userController.js'


const router = express.Router()

import { verifyUser , verifyAdmin } from '../utils/verifyToken.js'
//Update user

router.put('/:id',verifyUser, updateUser)
// router.put('/:id', verifyUser, updateUser)

//Delete user
// router.delete('/:id', deleteUser)
router.delete('/:id', verifyUser, deleteUser)

//Get single user
// router.get('/:id', getSingleUser)
router.get('/:id', verifyUser, getSingleUser)
 
//Get all user
// router.get('/', getAllUser)
router.get('/', verifyAdmin, getAllUser)


export default router