import Team from '../models/Team.js'

export const getAllTeams = async (req, res, next) => {
    res.send("get all teams route");
}

export const createNewTeam = async (req, res, next) => {
    let { teamID, teamName, teamDesc, gender, season } = req.body;

    let team = new Player(teamID, teamName, teamDesc, gender, season);
    
    team = await player.createPlayer();
    console.log(team)
    res.send("create teams route");
}

export const getTeamByID = async (req, res, next) => {
    res.send("get team by id route");
}