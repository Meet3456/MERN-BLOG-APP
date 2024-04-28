import express from 'express';
import {
  deleteUser,
  getUser,
  getUsers,
  signout,
  test,
  updateUser,
} from '../controllers/user.controller.js';
import { verifyToken } from '../utils/verifyUser.js';

// /api/user is the base path for the routes in this file as defined in api/index.js
const router = express.Router();

// import the controller function to be called when the route is called(i.e /test)
router.get('/test',test)

router.put('/update/:userId', verifyToken, updateUser);

router.delete('/delete/:userId', verifyToken, deleteUser); 

router.post('/signout', signout);

router.get('/getusers', verifyToken, getUsers);

router.get('/:userId', getUser);

export default router;
