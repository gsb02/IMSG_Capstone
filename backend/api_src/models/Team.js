import promisePool from "../config/dbConfig.js";

//`teamId` smallint NOT NULL AUTO_INCREMENT,
//`teamName` varchar(255) NOT NULL,
//`teamDesc` text,
//`sportID` smallint NOT NULL,
//'gender` char(1) DEFAULT NULL,
//`season` year DEFAULT NULL,

export default class Team {
    constructor(teamID, teamName, teamDesc, gender, season) {
        this.teamID = teamID;
        this.teamName = teamName;
        this.teamDesc = teamDesc;
        this.gender = gender;
        this.season = season;
    }
//CREATE 
    async createTeam() {

        let sqlQuery = `
        INSERT INTO teams(
            teamID,
            teamName,
            teamDesc,
            gender,
            season
        )
        VALUES(
            '${this.teamID}',
            '${this.teamName}',
            '${this.teamDesc}',
            '${this.gender}',
            '${this.season}'
        )
        `;

        const [newPost, _] = await promisePool.execute(sqlQuery);
        return newPost;
    }
//READ
    static async getAllTeams() {
    let sqlQuery = `
    SELECT *
    FROM teams
    `;

    const [Allteams, _] = await promisePool.execute(sqlQuery);
    return Allteams;
}


//UPDATE


//DELETE

  



}

