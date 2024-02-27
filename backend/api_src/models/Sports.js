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
}