import express from 'express';
import { getAllPlayers, createNewPlayer, getPlayerByID, deletePlayerByID, deleteAllPlayersByTeamID, updatePlayerByID } from '../controllers/playerControllers.js';
const router = express.Router();

// @route GET && POST - /posts/
router.route("/").post(createNewPlayer);

router.route("/team:teamID").get(getAllPlayers)
router.route("/player:playerID").get(getPlayerByID).delete(deletePlayerByID).put(updatePlayerbyID);
router.route("/team:teamID").get(getAllPlayers).delete(deleteAllPlayersByTeamID);

export default router;