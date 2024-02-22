import Order from '../models/Orders.js'

export const getAllOrders = async (req, res, next) => {
    
    res.send("get all orders route");
    let [orders, _] = await Order.getAllOrders();

    res.status(200).json(orders);
}

export const createNewOrder = async (req, res, next) => {
    res.send("create new orders route");
    let {orderID, orderDate, orderCost, arrivalDate, sportID } = req.body;

    let order = new Order(orderID, orderDate, orderCost, arrivalDate, sportID);
    
    order = await order.createOrder();
    console.log(order)
    res.status(200).json(order);
}

export const getOrderByID = async (req, res, next) => {
    res.send("get order by id route");

    let orderID = req.params.orderID;
    let [order, _] = await Order.getOrderByID(orderID);

    res.status(200).json(order);
}

export const deleteOrder = async (req, res, next) => {
    res.send("delete order by id route");

    let orderID = req.params.orderID;
    let [order, _] = await Order.deleteOrder(orderID);

    res.status(200).json(order);
}

export const updateOrder = async (req, res, next) => {
    res.send("update order info");

    let orderID = req.params.orderID;
    let orderDate = req.params.orderDate;
    let orderCost = req.params.orderCost;
    let sportID = req.params.sportID;
    let arrivalDate = req.params.arrivalDate;

    let [order, _] = await Order.updateOrder(orderID, orderDate, orderCost, arrivalDate, sportID);

    res.status(200).json(order);
}