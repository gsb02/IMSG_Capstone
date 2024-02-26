import promisePool from "../config/dbConfig.js";

//`teamId` smallint NOT NULL AUTO_INCREMENT,
//`teamName` varchar(255) NOT NULL,
//`teamDesc` text,
//`sportID` smallint NOT NULL,
//'gender` char(1) DEFAULT NULL,
//`season` year DEFAULT NULL,

export default class Team {
    constructor(teamID, teamName, teamDesc, sportID, gender, season) {
        this.teamID = teamID;
        this.teamName = teamName;
        this.teamDesc = teamDesc;
        this.sportID = sportID;
        this.gender = gender;
        this.season = season;
        
    }
//CREATE 
    async createTeam() {

        let sqlQuery = `
        INSERT INTO teams(
            teamName,
            teamDesc,
            sportID,
            gender,
            season
        )
        VALUES(
            '${this.teamName}',
            '${this.teamDesc}',
            '${this.sportID}',
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
    return promisePool.execute(sqlQuery);
}

static async getTeamByID(teamID) {
    let sqlQuery = `
    SELECT *
    FROM teams
    WHERE teamID = '${teamID}'
    `;

    const [Allteams, _] = await promisePool.execute(sqlQuery);
    return Allteams;
}


//UPDATE

//gotta figure out what goes in as a parameter here
async updateTeam(teamID, teamName, teamDesc, sportID, gender, season) {
    let sqlQuery = `
        UPDATE teams
        SET 
            teamName = '${teamName}',
            teamDesc = '${teamDesc}',
            sportID = '${sportID}',
            gender = '${gender}',
            season = '${season}'
        WHERE teamID = '${teamID}'
    `;
    const [updatedTeam, _] = await promisePool.execute(sqlQuery);
    return updatedTeam;
}

//DELETE

static async deleteTeam(teamID) {
    let sqlQuery = `
        DELETE FROM teams
        WHERE teamID = '${teamID}'
    `;

    return promisePool.execute(sqlQuery);
}
  
}

