import Log from "../models/Log.js";

export const getAllLogEntries = async (req, res, next) => {
    
    try{
        console.log("here");
        let [log, _] = await Log.getAllLogEntries();
        
        res.status(200).json(log);  

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "failed to get log"}); 
    }

}

export const getLast20LogEntries = async (req, res, next) => {
    
    try{
        console.log("here2");
        let [log, _] = await Log.getLast20LogEntries();
        res.status(200).json(log);  

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "failed to get log"}); 
    }

}