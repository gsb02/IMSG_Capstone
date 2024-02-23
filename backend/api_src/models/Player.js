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
}

