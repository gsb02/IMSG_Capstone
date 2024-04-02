import Player from '../models/Player.js'
import Log from '../models/Log.js';

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

        await Log.createLogItem("Create", "Player", playerName);

        res.status(200).json(player);
    } catch (error) {
        console.log(error);
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
        //let [player, _] = await Player.deleteAllEquipmentByDeletePlayerID(playerID);
        //let [player, _] = await Player.deletePlayerByID(playerID);
        let [player, _] = await Promise.all([
            Player.deleteAllEquipmentByDeletePlayerID(playerID),
            Player.deletePlayerByID(playerID)
        ]);
        

        await Log.createLogItem("Delete", "Player", playerName);

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

        await Log.createLogItem("Edit", "Player", playerName);

        res.status(200).json(player);

    } catch (error) {

        console.log(error);
        res.status(500).json({ error: 'Failed to update player' });
    }
};

export const assignEquipmentToPlayer = async (req, res, next) => {
    try {
        let playerID = req.params.playerID;
        let equipmentID = req.body.equipmentID;

        let [player, _] = await Player.assignEquipmentToPlayer(playerID, equipmentID);
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ error: 'Failed to assign equipment to player' });
    }
}

//remove equipment from a player
export const removeEquipmentFromPlayer = async (req, res, next) => {
    try {
        let playerID = req.params.playerID;
        let equipmentID = req.body.equipmentID;

        let [player, _] = await Player.removeEquipmentFromPlayer(playerID, equipmentID);
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ error: 'Failed to remove equipment from player' });
    }
}

//get all equipment assigned to a playerID
export const getEquipmentByPlayerID = async (req, res, next) => {
    try {
        let playerID = req.params.playerID;

        let [player, _] = await Player.getEquipmentByPlayerID(playerID);
        res.status(200).json(player);
    } catch (error) {
        res.status(500).json({ error: 'Failed to get equipment by playerID' });
    }
}
