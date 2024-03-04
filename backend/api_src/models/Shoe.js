import promisePool from "../config/dbConfig.js";

export default class Shoe {
    constructor(shoeID, name, q_6, q_6_5, q_7, q_7_5, q_8, q_8_5, q_9, 
                q_9_5, q_10, q_10_5, q_11, q_11_5, q_12, q_12_5, q_13, equipmentID) {
        this.shoeID = shoeID;
        this.name = name;
        this.equipmentID = equipmentID;
        this.q_6 = q_6;
        this.q_6_5 = q_6_5;
        this.q_7 = q_7;
        this.q_7_5 = q_7_5;
        this.q_8 = q_8;
        this.q_8_5 = q_8_5;
        this.q_9 = q_9;
        this.q_9_5 = q_9_5;
        this.q_10 = q_10;
        this.q_10_5 = q_10_5;
        this.q_11 = q_11;
        this.q_11_5 = q_11_5;
        this.q_12 = q_12;
        this.q_12_5 = q_12_5;
        this.q_13 = q_13;
    }


    async createShoe(){
        let sqlQuery = `
        INSERT INTO shoes(
            name,
            q_6,
            q_6_5,
            q_7,
            q_7_5,
            q_8,
            q_8_5,
            q_9,
            q_9_5,
            q_10,
            q_10_5,
            q_11,
            q_11_5,
            q_12,
            q_12_5,
            q_13,
            equipmentID
        )
        VALUES(
            '${this.name}',
            '${this.q_6}',
            '${this.q_6_5}',
            '${this.q_7}',
            '${this.q_7_5}',
            '${this.q_8}',
            '${this.q_8_5}',
            '${this.q_9}',
            '${this.q_9_5}',
            '${this.q_10}',
            '${this.q_10_5}',
            '${this.q_11}',
            '${this.q_11_5}',
            '${this.q_12}',
            '${this.q_12_5}',
            '${this.q_13}',
            '${this.equipmentID}'
        )
        `;

        return promisePool.execute(sqlQuery);
    }

    static async deleteShoeByEquipmentID(equipmentID){
        
        let sqlQuery = `
            DELETE FROM shoes
            WHERE equipmentID = ${equipmentID}
        `;

        return promisePool.execute(sqlQuery);
    }

    static async getSecondaryAttributesByID(equipmentID){
        let sqlQuery = `
            SELECT * FROM shoes
            WHERE equipmentID = ${equipmentID}
        `;

        return promisePool.execute(sqlQuery);
    }
}
