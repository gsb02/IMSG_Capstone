import express from 'express';
import { createEquipment, deleteEquipmentByID } from '../controllers/equipmentControllers.js';
const router = express.Router();


router.route("/").post(createEquipment);

router.route("/:equipmentID").delete(deleteEquipmentByID);

export default router;