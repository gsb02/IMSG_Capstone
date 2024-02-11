import express from 'express';
import { getAllTeams, createNewTeam, getTeamByID } from '../controllers/teamsControllers.js';
const router = express.Router();

// @route GET && POST - /posts/
router.route("/").get(getAllTeams).post(createNewTeam);
router.route("/:teamID").get(getTeamByID);
router.route("/").get(getAllTeams).post(createNewTeam);
router.route("/:teamID").get(getTeamByID);
export default router;