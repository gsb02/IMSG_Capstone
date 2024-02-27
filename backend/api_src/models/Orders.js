import promisePool from "../config/dbConfig.js";

// `orderId` smallint NOT NULL AUTO_INCREMENT,
// `orderDate` date NOT NULL,
// `orderCost` decimal(10,2) NOT NULL,
// `arrivalDate` date DEFAULT NULL,
// `sportId` smallint NOT NULL,

export default class Order {

    constructor(orderID, orderDate, orderCost, arrivalDate, sportID) {
        this.orderID = orderID;
        this.orderCost = orderCost;
        this.orderDate = orderDate;
        this.sportID = sportID;
        this.arrivalDate = arrivalDate;
        
    }
//CREATE 
    async createOrder() {

        let sqlQuery = `
        INSERT INTO orders(
            orderID,
            orderCost,
            orderDate,
            sportID,
            arrivalDate
        )
        VALUES(
            '${this.orderID}',
            '${this.orderCost}',
            '${this.orderDate}',
            '${this.sportID}',
            '${this.arrivalDate}'
        )
        `;

        return promisePool.execute(sqlQuery);
    }
//READ
    static async getAllOrders() {
    let sqlQuery = `
    SELECT *
    FROM orders
    `;

    return promisePool.execute(sqlQuery);
}

static async getOrderByID(orderID) {
    let sqlQuery = `
    SELECT *
    FROM orders
    WHERE orderID = '${orderID}'
    `;

    const [Allorders, _] = await promisePool.execute(sqlQuery);
    return Allorders;
}


//UPDATE

//gotta figure out what goes in as a parameter here
async updateOrder(orderID, orderDate, orderCost, arrivalDate, sportID) {
    let sqlQuery = `
        UPDATE orders
        SET   
            orderCost = '${orderCost}',
            orderDate = '${orderDate}',
            sportID = '${sportID}',
            arrivalDate = '${ arrivalDate}'
        WHERE orderID = '${orderID}'
    `;
    return promisePool.execute(sqlQuery);
}

//DELETE

static async deleteOrder(orderID) {
    let sqlQuery = `
        DELETE FROM orders
        WHERE orderID = '${orderID}'
    `;

    return promisePool.execute(sqlQuery);
}
  
}