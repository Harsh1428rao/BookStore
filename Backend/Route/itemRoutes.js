import express from 'express';
import { getAllItems } from '../controller/itemController.js'; // Corrected import

const router = express.Router();

// Define routes
router.get('/course', getAllItems);

export default router;
