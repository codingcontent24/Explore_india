import express from 'express';
import { 
    deleteUser, 
    getAllUser, 
    getSingleUser, 
    updateUser } from '../controllers/userConteroller.js';

import { verifyToken,
    verifyUser,
    verifyAdmin
 } from '../utils/verifyTokens.js';
const router = express.Router();

router.put("/:id",verifyUser,updateUser);

router.delete("/:id",verifyUser,deleteUser);

router.get("/:id",verifyUser,getSingleUser);

router.get("/:id",verifyAdmin,getAllUser);


export default router;
