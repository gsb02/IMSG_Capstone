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


export const createSport = async (req, res, next) => {
  
    try{
    let sportID = req.params.sportID;
    let [sport, _] = await Sport.createSport(sportID,);

    res.status(200).json(sport);
    } catch (error) {

        res.status(500).json({ error: 'Failed to get sport by id' });
    }
}

export const deleteSportByID = async (req, res, next) => {
  
    try{
    let sportID = req.params.sportID;
    let [sport, _] = await Sport.getSportID(sportID);

    res.status(200).json(sport);
    } catch (error) {

        res.status(500).json({ error: 'Failed to delete sport by id' });
    }

}

export const updateSportByID = async (req, res, next) => {
  
    try{
    let sportID = req.params.sportID;
    let sportName = req.params.sportName;
    let [sport, _] = await Sport.updateSportByID(sportID, sportName);

    res.status(200).json(sport);
    } catch (error) {

        res.status(500).json({ error: 'Failed to update sport by id' });
    }
}
