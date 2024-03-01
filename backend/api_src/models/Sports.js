import promisePool from "../config/dbConfig.js";

// `sportID` smallint NOT NULL AUTO_INCREMENT,
//   `sportName` varchar(255) NOT NULL,

export default class Sport {
    constructor(sportID, sportName) {
        this.sportID = sportID;
        this.sportName = sportName;
    }
//READ
    static async getAllSports() {
    let sqlQuery = `
    SELECT *
    FROM sports
    `;

    
    return promisePool.execute(sqlQuery);
}

static async getSportByID(sportID) {
    let sqlQuery = `
    SELECT *
    FROM sports
    WHERE sportID = '${sportID}'
    `;

    return promisePool.execute(sqlQuery);
}
//Create
    static async createSport() {

        let sqlQuery = `
        INSERT INTO sports(
            sportName
        )
        VALUES(
            '${this.sportName}'
        )
        `;

        return promisePool.execute(sqlQuery);
    }
//Delete
    static async deleteSportByID(sportID){

        let sqlQuery = `
        DELETE FROM sports
        WHERE sportID = ${sportID}
        `;

        return promisePool.execute(sqlQuery);
    }
    //Update
    static async updateSportByID(sportID, sportName){

        let sqlQuery = `
        UPDATE sports
        SET sportName = '${sportName}'
        WHERE sportID = ${sportID}
        `;

        return promisePool.execute(sqlQuery);
    }
    
}