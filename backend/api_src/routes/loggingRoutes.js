import express from 'express';
import { getAllLogEntries, getLast20LogEntries} from '../controllers/loggingController.js';
const router = express.Router();

// @route GET && POST - /posts/

//Gotta figure out how to do the delete and update in here

router.route("/").get(getLast20LogEntries);
router.route("/a").get(getAllLogEntries);

export default router;