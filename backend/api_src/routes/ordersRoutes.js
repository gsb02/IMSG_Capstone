import express from 'express';
import { getAllOrders, createNewOrder, getOrderByID, updateOrder, deleteOrder, } from '../controllers/ordersControllers.js';
const router = express.Router();

// @route GET && POST - /posts/

//Gotta figure out how to do the delete and update in here

router.route("/").get(getAllOrders).post(createNewOrder);
router.route("/:order").get(getOrderByID).delete(deleteOrder).put(updateOrder);


export default router;