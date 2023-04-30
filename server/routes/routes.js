import { addUser, getUsers, getUser, editUser, deleteUser } from "../controller/user-controller.js";
import express, { Router } from "express";
const router = express.Router()
router.post('/add', addUser)
router.get('/all', getUsers)
router.get('/:userName', getUser)
router.post('/:userName', editUser)
router.delete('/:userName', deleteUser)





export default router

