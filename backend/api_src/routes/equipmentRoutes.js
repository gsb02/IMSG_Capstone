import express from 'express';
import { createEquipment, deleteEquipmentByID, getAllEquipment, getEquipmentPrimaryAttributesByID, getEquipmentSecondaryAttributesByID, getAllEquipmentByType, getAllEquipmentTypes } from '../controllers/equipmentControllers.js';
const router = express.Router();


router.route("/").post(createEquipment).get(getAllEquipment);
router.route("/types").get(getAllEquipmentTypes);

router.route("/:equipmentID").delete(deleteEquipmentByID);
router.route("/:equipmentID/p").get(getEquipmentPrimaryAttributesByID);
router.route("/:equipmentID/s").get(getEquipmentSecondaryAttributesByID);

router.route("/type:equipmentType").get(getAllEquipmentByType);

export default router;