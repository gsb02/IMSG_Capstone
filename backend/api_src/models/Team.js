import promisePool from "../config/dbConfig.js";
 
/*
Sean Radel
March 22, 2024
The purpose of this module is to define the Team class that represents -
properties like Team Name, Description of Team, Gender, Season, and SportID.

The class includes methods that can interact with the databse using SQL Queries

*/


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

        return promisePool.execute(sqlQuery);
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

    return promisePool.execute(sqlQuery);
}


//UPDATE


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
    return promisePool.execute(sqlQuery);
}

//DELETE

static async deleteTeam(teamID) {
    let sqlQuery = `
        DELETE FROM teams
        WHERE teamID = '${teamID}'
    `;

    return promisePool.execute(sqlQuery);
}

//assign equipment to a team
static async assignEquipmentToTeam(teamID, equipmentID) {
    let sqlQuery = `
        INSERT INTO team_equipment (teamID, equipmentID)
        VALUES ('${teamID}', '${equipmentID}')
    `;

    return promisePool.execute(sqlQuery);
}
//remove equipment from a team
static async removeEquipmentFromTeam(teamID, equipmentID) {
    let sqlQuery = `
        DELETE FROM team_equipment
        WHERE teamID = '${teamID}' AND equipmentID = '${equipmentID}'
    `;

    return promisePool.execute(sqlQuery);
  
}

//get all equipment assigned to a teamID
static async getEquipmentByTeamID(teamID) {
    // let sqlQuery = `
    //     SELECT * FROM team_equipment
    //     WHERE teamID = '${teamID}'
    // `;

    let sqlQuery = `
        SELECT equipment.*
        FROM equipment
        INNER JOIN team_equipment ON team_equipment.equipmentID = equipment.equipmentID
        WHERE team_equipment.teamID = ${teamID}
        `;

    return promisePool.execute(sqlQuery);


}

static async deleteAllEquipmentByDeleteTeamID(teamID) {
    let sqlQuery = `
   
    DELETE FROM equipment
    WHERE equipmentID IN (SELECT FROM team_equipment WHERE teamID = '${teamID}')
        
    `;

    return promisePool.execute(sqlQuery);
}


}
