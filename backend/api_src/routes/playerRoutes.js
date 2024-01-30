import express from 'express';
import { getAllPlayers, createNewPlayer, getPlayerByID } from '../controllers/playerControllers.js';
const router = express.Router();

// @route GET && POST - /posts/
router.route("/").get(getAllPlayers).post(createNewPlayer);

router.route("/:playerID").get(getPlayerByID);

export default router;