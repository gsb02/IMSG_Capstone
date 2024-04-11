import promisePool from "../config/dbConfig.js";

export default class Player {
    constructor(playerID, playerName, teamID, age, grade, isCoach, jerseyNum) {
        this.playerID = playerID;
        this.playerName = playerName;
        this.teamID = teamID;
        this.age = age;
        this.grade = grade;
        this.isCoach = isCoach;
        this.jerseyNum = jerseyNum;
    }

    //WRITE
    async createPlayer() {

        let sqlQuery = `
        INSERT INTO players(
            playerName,
            teamID,
            age,
            class,
            isCoach,
            jerseyNum
        )
        VALUES(
            '${this.playerName}',
            '${this.teamID}',
            '${this.age}',
            '${this.grade}',
            '${this.isCoach}',
            '${this.jerseyNum}'
        )
        `;

        const [newPost, _] = await promisePool.execute(sqlQuery);
        return newPost;
    }
    
    static async deletePlayerByID(playerID){
        
        let sqlQuery = `
        DELETE FROM players
        WHERE playerID = ${playerID}

        `;

        
        return promisePool.execute(sqlQuery);
    }

    static async deleteAllPlayersByTeamID(teamID){

        let sqlQuery = `
        DELETE FROM players
        WHERE teamID = ${teamID}
        `
        return promisePool.execute(sqlQuery);
    }

    //READ
    static getAllPlayersByTeamID(teamID) {

        let sqlQuery = `
        SELECT * FROM players
        WHERE teamID = ${teamID}
        `;

        return promisePool.execute(sqlQuery);
    }

    static getAllPlayerIDsByTeamID(teamID) {

        let sqlQuery = `
        SELECT playerID FROM players
        WHERE teamID = ${teamID}
        `;

        return promisePool.execute(sqlQuery);
    }

    static getAllPlayerInfoByID(playerID){

        let sqlQuery = `
        SELECT * FROM players
        WHERE playerID = ${playerID}
        `;

        return promisePool.execute(sqlQuery);
    }
    
    async updatePlayerByID(){

        let sqlQuery = `
        UPDATE players
        SET
            playerName = '${this.playerName}',
            teamID = '${this.teamID}',
            age = '${this.age}',
            class = '${this.grade}',
            isCoach = '${this.isCoach}'
        WHERE playerID = '${this.playerID}'
        `;

        return promisePool.execute(sqlQuery);
    }

    static async assignEquipmentToPlayer(playerID, equipmentID, quantity) {
        let sqlQuery = `
            INSERT INTO player_equipment (playerID, equipmentID, quantity)
            VALUES ('${playerID}', '${equipmentID}', '${quantity}' )
        `;
    
        return promisePool.execute(sqlQuery);
    }
    
    //remove equipment from a player
    static async removeEquipmentFromPlayer(playerID, equipmentID) {
        let sqlQuery = `
            DELETE FROM player_equipment
            WHERE playerID = '${playerID}' AND equipmentID = '${equipmentID}'
        `;
    
        return promisePool.execute(sqlQuery);
    }
    
    //get all equipment assigned to a playerID
    static async getEquipmentByPlayerID(playerID) {
        let sqlQuery = `
            SELECT equipment.*
            FROM equipment
            INNER JOIN player_equipment ON player_equipment.equipmentID = equipment.equipmentID
            WHERE player_equipment.playerID = ${playerID}
            `;
    
        return promisePool.execute(sqlQuery);
    }

    static async deleteAllEquipmentByDeletePlayerID(playerID) {
        let sqlQuery = `
       
        SET @deletedEquipmentIDs = (SELECT GROUP_CONCAT(equipmentID) FROM player_equipment WHERE playerID = ${playerID});
        DELETE FROM player_equipment WHERE playerID = ${playerID};
	    DELETE FROM equipment WHERE FIND_IN_SET(equipmentID, @deletedEquipmentIDs);
            
        `;
    
        return promisePool.execute(sqlQuery);
    }


}

