import Sport from '../models/Sports.js'

export const getAllSports = async (req, res, next) => {
    
    try{
    let [sport, _] = await Sport.getAllSports();

    res.status(200).json(sport);
    } catch (error) {

        res.status(500).json({ error: 'Failed to get all sports' });
    }

}


export const getSportByID = async (req, res, next) => {
  
    try{
    let sportID = req.params.sportID;
    let [sport, _] = await Sport.getSportID(sportID);

    res.status(200).json(sport);
    } catch (error) {

        res.status(500).json({ error: 'Failed to get sport by id' });
    }
}
