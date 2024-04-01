import express from 'express';
import { getAllLogEntries, getLast20LogEntries} from '../controllers/loggingController.js';
const router = express.Router();


router.route("/").get(getLast20LogEntries);
router.route("/a").get(getAllLogEntries);

export default router;