import Team from '../models/Team.js'

export const getAllTeams = async (req, res, next) => {
    
    //res.send("get all teams route");
    let [team, _] = await Team.getAllTeams();

    res.status(200).json(team);
}

export const createNewTeam = async (req, res, next) => {
    let { teamID, teamName, teamDesc, sportID, gender, season } = req.body;

    let team = new Team(teamID, teamName, teamDesc, sportID, gender, season);
    
    team = await team.createTeam();
    console.log(team)
    res.status(200).json(team);
}

export const getTeamByID = async (req, res, next) => {
    //res.send("get team by id route");

    let teamID = req.params.teamID;
    let [team, _] = await Team.getTeamByID(teamID);

    res.status(200).json(team);
}

export const deleteTeam = async (req, res, next) => {
    //res.send("delete team by id route");

    let teamID = req.params.teamID;
    let [team, _] = await Team.deleteTeam(teamID);

    res.status(200).json(team);
}

export const updateTeam = async (req, res, next) => {
    //res.send("update team info");

    let teamID = req.params.teamID;
    let teamName = req.params.teamName;
    let teamDesc = req.params.teamDesc;
    let sportID = req.params.sportID;
    let gender = req.params.gender;
    let season = req.params.season;
    let [team, _] = await Team.updateTeam(teamID, teamName, teamDesc, sportID, gender, season);

    res.status(200).json(team);
}