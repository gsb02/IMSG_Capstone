import express from 'express';
import { getAllPlayers, createNewPlayer, getPlayerByID, deletePlayerByID, deleteAllPlayersByTeamID} from '../controllers/playerControllers.js';
const router = express.Router();

// @route GET && POST - /posts/
router.route("/").post(createNewPlayer);
router.route("/team:teamID").get(getAllPlayers)
router.route("/player:playerID").get(getPlayerByID).delete(deletePlayerByID);
router.route("/team:teamID").get(getAllPlayers).delete(deleteAllPlayersByTeamID);
export default router;