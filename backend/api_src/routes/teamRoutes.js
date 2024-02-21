import express from 'express';
import { getAllTeams, createNewTeam, getTeamByID, updateTeam, deleteTeam, } from '../controllers/teamsControllers.js';
const router = express.Router();

// @route GET && POST - /posts/

//Gotta figure out how to do the delete and update in here

router.route("/").get(getAllTeams).post(createNewTeam);
router.route("/:teamID").get(getTeamByID).delete(deleteTeam).post(updateTeam);


export default router;