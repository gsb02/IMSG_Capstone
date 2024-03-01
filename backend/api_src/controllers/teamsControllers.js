import Team from '../models/Team.js'

export const getAllTeams = async (req, res, next) => {
    
    try{
    let [team, _] = await Team.getAllTeams();

    res.status(200).json(team);
     } catch (error) {

        res.status(500).json({ error: 'Failed to get all teams' });
    }
}

export const createNewTeam = async (req, res, next) => {
    try{
    let { teamName, teamDesc, sportID, gender, season } = req.body;

    let team = new Team(null, teamName, teamDesc, sportID, gender, season);
    
    team = await team.createTeam();
    console.log(team)
    res.status(200).json(team);
    } catch (error) {

        res.status(500).json({ error: 'Failed to create new team' });
    }
}

export const getTeamByID = async (req, res, next) => {
    //res.send("get team by id route");
    try{
    let teamID = req.params.teamID;
    let [team, _] = await Team.getTeamByID(teamID);

    res.status(200).json(team);
    } catch (error) {

        res.status(500).json({ error: 'Failed to get team by id' });
    }
}

export const deleteTeam = async (req, res, next) => {
    //res.send("delete team by id route");
    try{
    let teamID = req.params.teamID;
    let [team, _] = await Team.deleteTeam(teamID);

    res.status(200).json(team);
    } catch (error) {

        res.status(500).json({ error: 'Failed to delete team' });
    }
}

export const updateTeam = async (req, res, next) => {
    //res.send("update team info");
    try{
    let teamID = req.params.teamID;
    let teamName = req.params.teamName;
    let teamDesc = req.params.teamDesc;
    let sportID = req.params.sportID;
    let gender = req.params.gender;
    let season = req.params.season;
    let [team, _] = await Team.updateTeam(teamID, teamName, teamDesc, sportID, gender, season);

    res.status(200).json(team);
    } catch (error) {

        res.status(500).json({ error: 'Failed to update team' });
    }


}

//assign equipment to a team 
export const assignEquipmentToTeam = async (req, res, next) => {
    //res.send("assign equipment to a team");
    try{
    let teamID = req.params.teamID;

    let [team, _] = await Team.assignEquipmentToTeam(teamID, equipmentID);
    res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ error: 'Failed to assign equipment to team' });
    }
}

////remove equipment from a team 
export const removeEquipmentFromTeam = async (req, res, next) => {
    try{
    let teamID = req.params.teamID;
    let [team, _] = await Team.removeEquipmentFromTeam(teamID, equipmentID);
    res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove equipment from team' });
    }
}

//get all equipment assigned to a teamID
export const getEquipmentByTeamID = async (req, res, next) => {
    try{
    let teamID = req.params.teamID;
    let [team, _] = await Team.getEquipmentByTeamID(teamID);
    res.status(200).json(team);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get equipment by teamID' });
    }
}

