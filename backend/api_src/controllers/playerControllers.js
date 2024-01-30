import Player from '../models/Player.js'

export const getAllPlayers = async (req, res, next) => {
    res.send("get all players route");
}

export const createNewPlayer = async (req, res, next) => {
    let { playerID, playerName } = req.body;

    let player = new Player(playerID, playerName);
    
    player = await player.save();
    console.log(player)
    res.send("create players route");
}

export const getPlayerByID = async (req, res, next) => {
    res.send("get player by id route");
}