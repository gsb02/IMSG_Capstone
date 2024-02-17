import express from 'express';
import { getAllPlayers, createNewPlayer, getPlayerByID } from '../controllers/playerControllers.js';
const router = express.Router();

// @route GET && POST - /posts/
router.route("/").post(createNewPlayer);
router.route("/team:teamID").get(getAllPlayers);
router.route("/player:playerID").get(getPlayerByID);

export default router;