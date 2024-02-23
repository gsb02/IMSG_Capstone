import Player from '../models/Player.js'


export const getAllPlayers = async (req, res, next) => {
    try {
        let teamID = req.params.teamID;
        const [players, _] = await Player.getAllPlayersByTeamID(teamID);
        res.status(200).json(players);
    } catch (error) {

        res.status(500).json({ error: 'Failed to get all players' });
    }
};

export const createNewPlayer = async (req, res, next) => {
    try {
        let { playerName, teamID, age, grade, isCoach, jerseyNum } = req.body;
        let player = new Player(null, playerName, teamID, age, grade, isCoach, jerseyNum);
        player = await player.createPlayer();
        console.log(player);
        res.status(200).json(player);
    } catch (error) {

        res.status(500).json({ error: 'Failed to create new player' });
    }
};

export const getPlayerByID = async (req, res, next) => {
    try {
        let playerID = req.params.playerID;
        let [player, _] = await Player.getAllPlayerInfoByID(playerID);
        res.status(200).json(player);
    } catch (error) {

        res.status(500).json({ error: 'Failed to get player info' });
    }
};

export const deletePlayerByID = async (req, res, next) => {
    try {
        let playerID = req.params.playerID;
        let [player, _] = await Player.deletePlayerByID(playerID);
        res.status(200).json(player);
    } catch (error) {

        res.status(500).json({ error: 'Failed to delete player' });
    }
};

export const deleteAllPlayersByTeamID = async (req, res, next) => {
    try {
        let teamID = req.params.teamID;
        let [player, _] = await Player.deleteAllPlayersByTeamID(teamID);
        res.status(200).json(player);
    } catch (error) {

        res.status(500).json({ error: 'Failed to delete all players' });
    }
};

export const updatePlayerByID = async (req, res, next) => {
    try {
        
        let playerID = req.params.playerID;
        let { playerName, teamID, age, grade, isCoach, jerseyNum } = req.body;
        
        let player = new Player(playerID, playerName, teamID, age, grade, isCoach, jerseyNum);
        player = await player.updatePlayerByID();
        res.status(200).json(player);

    } catch (error) {

        console.log(error);
        res.status(500).json({ error: 'Failed to update player' });
    }
};
