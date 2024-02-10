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

    static getAllPlayers() {

    }

    //TODO
    //Get all players by team id
    //Delete player by id
    //Update player by id
    //View player info by id



}

