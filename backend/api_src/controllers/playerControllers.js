import Player from '../models/Player.js'

export const getAllPlayers = async (req, res, next) => {
    let teamID = req.params.teamID;
    const [players, _] = await Player.getAllPlayersByTeamID(teamID);
    res.status(200).json(players);
}

export const createNewPlayer = async (req, res, next) => {
    let { playerName, teamID, age, grade, isCoach, jerseyNum } = req.body;

    let player = new Player(null, playerName, teamID, age, grade, isCoach, jerseyNum);
    
    player = await player.createPlayer();
    console.log(player)
    res.send("create players route");
}

export const getPlayerByID = async (req, res, next) => {
    let playerID  = req.params.playerID;

    let [player, _] = await Player.getAllPlayerInfoByID(playerID);

    res.status(200).json(player);
}

export const deletePlayerByID = async (req, res, next) => {
    let playerID = req.params.playerID;

    let [player, _] = await Player.deletePlayerByID(playerID);

    res.status(200).json(player);
}

export const deleteAllPlayersByTeamID = async (req, res, next) => {
    let teamID = req.params.teamID;

    let [player, _] = await Player.deleteAllPlayersByTeamID(teamID);

    res.status(200).json(player);
}