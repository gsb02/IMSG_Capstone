import Sport from '../models/Sports.js'

export const getAllSports = async (req, res, next) => {
    
    res.send("get all sports route");
    let [sport, _] = await Sport.getAllSports();

    res.status(200).json(sport);
}


export const getSportByID = async (req, res, next) => {
    res.send("get sport by id route");

    let sportID = req.params.sportID;
    let [sport, _] = await Sport.getSportID(sportID);

    res.status(200).json(sport);
}
