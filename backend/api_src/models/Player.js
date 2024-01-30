import promisePool from "../config/dbConfig.js";

export default class Player {
    constructor(playerID, playerName) {
        this.playerID = playerID;
        this.playerName = playerName;
    }

    async save() {

        let sqlQuery = `
        INSERT INTO players(
            playerId,
            playerName
        )
        VALUES(
            '${this.playerID}',
            '${this.playerName}'
        )
        `;

        const [newPost, _] = await promisePool.execute(sqlQuery);
        return newPost;
    }

    static getAllPlayers() {

    }


}

