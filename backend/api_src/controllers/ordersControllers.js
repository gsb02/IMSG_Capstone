import Order from '../models/Orders.js'

export const getAllOrders = async (req, res, next) => {
    try{
    
    let [orders, _] = await Order.getAllOrders();

    res.status(200).json(orders);
    } catch (error) {

        res.status(500).json({ error: 'Failed to get all orders' });
    }
}

export const createNewOrder = async (req, res, next) => {
    try{
    let {orderID, orderDate, orderCost, arrivalDate, sportID } = req.body;

    let order = new Order(orderID, orderDate, orderCost, arrivalDate, sportID);
    
    order = await order.createOrder();
    console.log(order)
    res.status(200).json(order);
    } catch (error) {

        res.status(500).json({ error: 'Failed to create order' });
    }
}

export const getOrderByID = async (req, res, next) => {
    try{

    let orderID = req.params.orderID;
    let [order, _] = await Order.getOrderByID(orderID);

    res.status(200).json(order);
    } catch (error) {

        res.status(500).json({ error: 'Failed to get order by ID' });
    }
}

export const deleteOrder = async (req, res, next) => {
    try{

    let orderID = req.params.orderID;
    let [order, _] = await Order.deleteOrder(orderID);

    res.status(200).json(order);
    } catch (error) {

        res.status(500).json({ error: 'Failed to delete order' });
    }
}

export const updateOrder = async (req, res, next) => {
    try{

    let orderID = req.params.orderID;
    let orderDate = req.params.orderDate;
    let orderCost = req.params.orderCost;
    let sportID = req.params.sportID;
    let arrivalDate = req.params.arrivalDate;

    let [order, _] = await Order.updateOrder(orderID, orderDate, orderCost, arrivalDate, sportID);

    res.status(200).json(order);
    } catch (error) {

        res.status(500).json({ error: 'Failed to update Order' });
    }
}