import express from 'express';
import { createEquipment } from '../controllers/equipmentControllers.js';
const router = express.Router();


router.route("/").post(createEquipment);

export default router;