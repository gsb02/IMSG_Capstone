import promisePool from "../config/dbConfig.js";

export default class Equipment {
    constructor(equipmentID, equipmentName, storedQuantity, distQuantity, sportID, equipmentType, lastOrdered, lastDistributed) {
        this.equipmentID = equipmentID;
        this.equipmentName = equipmentName;
        this.storedQuantity = storedQuantity;
        this.distQuantity = distQuantity;
        this.sportID = sportID;
        this.equipmentType = equipmentType;
        this.lastOrdered = lastOrdered;
        this.lastDistributed = lastDistributed;
    }


    async createEquipment(){
        let sqlQuery = `
        INSERT INTO equipment(
            equipmentName,
            storedQuantity,
            distQuantity,
            sportID,
            equipmentType,
            lastOrdered,
            lastDistributed
        )
        VALUES(
            '${this.equipmentName}',
            '${this.storedQuantity}',
            '${this.distQuantity}',
            '${this.sportID}',
            '${this.equipmentType}',
            '${this.lastOrdered}',
            '${this.lastDistributed}'
        )
        `;

        const [newEquipment, _] = await promisePool.execute(sqlQuery);
        return newEquipment;
    }


    static async getMostRecentInsertID(){
        let sqlQuery = `
        SELECT MAX(equipmentID) 
        AS equipmentID 
        FROM equipment;
        `;

        const [mostRecentID, _] = await promisePool.execute(sqlQuery);
        return mostRecentID[0].equipmentID;
    }
}