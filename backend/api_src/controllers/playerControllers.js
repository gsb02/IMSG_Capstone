import Player from '../models/Player.js'

export const getAllPlayers = async (req, res, next) => {
    res.send("get all players route");
}

export const createNewPlayer = async (req, res, next) => {
    let { playerName, teamID, age, grade, isCoach, jerseyNum } = req.body;

    let player = new Player(null, playerName, teamID, age, grade, isCoach, jerseyNum);
    
    player = await player.createPlayer();
    console.log(player)
    res.send("create players route");
}

export const getPlayerByID = async (req, res, next) => {
    res.send("get player by id route");
}