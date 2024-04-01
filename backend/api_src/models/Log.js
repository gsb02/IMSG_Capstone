import promisePool from "../config/dbConfig.js";

export default class Log {
    constructor(logID, action, item, date, itemName) {
        this.logID = logID;
        this.action = action;
        this.item = item;
        this.date = date;
        this.itemName = itemName;
    }


    static async createLogItem(action, item, itemName){
        let sqlQuery = `
        INSERT INTO history(
            action,
            item,
            itemName
        )
        VALUES(
            '${action}',
            '${item}',
            '${itemName}'
        )
        `;

        return promisePool.execute(sqlQuery);
    }

    static async getAllLogEntries(){
        
        let sqlQuery = `
        SELECT * FROM history
        ORDER BY date DESC
        `;

        return promisePool.execute(sqlQuery);
    }

    static async getLast20LogEntries(){
        let sqlQuery = `
        SELECT action, item, itemName, date FROM history
        ORDER BY date DESC
        LIMIT 20;
        `;

        return promisePool.execute(sqlQuery);
    }
}