import Equipment from "../models/Equipment.js";
import Apparel from "../models/Apparel.js";
export const createEquipment = async (req, res, next) => {
    let { equipmentName, storedQuantity, distQuantity, sportID, equipmentType, lastOrdered, lastDistributed, attributes } = req.body;
    
    
    let equipment = new Equipment(null, equipmentName, storedQuantity, distQuantity, sportID, equipmentType, lastOrdered, lastDistributed);
    equipment = await equipment.createEquipment();
    console.log(equipment);

    //create apparel
    if(equipmentType === 1){

        let equipmentID = await Equipment.getMostRecentInsertID();
        let { brandName, qSmall, qMed, qLarge, qXL, qXXL, q3X } = attributes;

        let apparel = new Apparel(null, brandName, equipmentID, qSmall, qMed, qLarge, qXL, qXXL, q3X);
        apparel = await apparel.createApparel();
        console.log(apparel);

    }
    
    
    
    res.send("create equipment route");
}