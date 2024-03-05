import express from 'express';
import { getAllSports, getSportByID, deleteSportByID, updateSportByID} from '../controllers/sportsControllers.js';
const router = express.Router();

// @route GET && POST - /posts/

//Gotta figure out how to do the delete and update in here

router.route("/").get(getAllSports)
//router.route("/:sportID").get(getSportByID).delete(deleteSportByID).put(updateSportByID);


export default router;