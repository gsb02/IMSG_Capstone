import Team from '../models/Team.js'

export const getAllTeams = async (req, res, next) => {
    
    res.send("get all teams route");
}

export const createNewTeam = async (req, res, next) => {
    let { teamID, teamName, teamDesc, sportID, gender, season } = req.body;

    let team = new Team(teamID, teamName, teamDesc, sportID, gender, season);
    
    team = await team.createTeam();
    console.log(team)
    res.send("create teams route");
}

export const getTeamByID = async (req, res, next) => {
    res.send("get team by id route");
}

export const deleteTeam = async (req, res, next) => {
    res.send("get team by id route");
}