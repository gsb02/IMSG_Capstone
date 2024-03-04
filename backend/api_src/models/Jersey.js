import promisePool from "../config/dbConfig.js";

export default class Jersey {
    constructor(jerseyID, equipmentID, color, size, jerseyNum) {
        this.jerseyID = jerseyID;
        this.equipmentID = equipmentID;
        this.color = color;
        this.size = size;
        this.jerseyNum = jerseyNum;
    }

    async createJersey(){
        let sqlQuery = `
        INSERT INTO jerseys(
            equipmentID,
            color,
            size,
            jerseyNum
        )
        VALUES(
            '${this.equipmentID}',
            '${this.color}',
            '${this.size}',
            '${this.jerseyNum}'
        )
        `;

        return promisePool.execute(sqlQuery);
    }

    static async deleteJerseysByID(equipmentID){
        let sqlQuery = `
        DELETE FROM jerseys
        WHERE equipmentID = ${equipmentID}
        `;

        return promisePool.execute(sqlQuery);
    }

    static async getSecondaryAttributesByID(equipmentID){
        let sqlQuery = `
        SELECT jerseys.color, jerseys.size, GROUP_CONCAT(jerseys.jerseyNum) AS jerseyNumbers
        FROM jerseys
        WHERE jerseys.equipmentID = ${equipmentID}
        GROUP BY jerseys.color, jerseys.size;
        `;

        return promisePool.execute(sqlQuery);
    }

}