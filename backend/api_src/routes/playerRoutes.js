import express from 'express';
import { getAllPlayers, createNewPlayer, getPlayerByID, deletePlayerByID, deleteAllPlayersByTeamID, updatePlayerByID, assignEquipmentToPlayer, removeEquipmentFromPlayer, getEquipmentByPlayerID,  } from '../controllers/playerControllers.js';
const router = express.Router();

// @route GET && POST - /posts/
router.route("/").post(createNewPlayer);

router.route("/team:teamID").get(getAllPlayers)
router.route("/player:playerID").get(getPlayerByID).delete(deletePlayerByID).put(updatePlayerByID);
router.route("/team:teamID").get(getAllPlayers).delete(deleteAllPlayersByTeamID);


router.route("/:playerID/equipment").get(getEquipmentByPlayerID).post(assignEquipmentToPlayer);
router.route("/:playerID/equipment/:equipmentID").delete(removeEquipmentFromPlayer);
export default router;