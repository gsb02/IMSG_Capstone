import Equipment from "../models/Equipment.js";
import Apparel from "../models/Apparel.js";

export const createEquipment = async (req, res, next) => {
    let { equipmentName, storedQuantity, distQuantity, sportID, equipmentType, lastOrdered, lastDistributed, attributes } = req.body;
    
    
    let equipment = new Equipment(null, equipmentName, storedQuantity, distQuantity, sportID, equipmentType, lastOrdered, lastDistributed);
    equipment = await equipment.createEquipment();
    console.log(equipment);

    
    let equipmentID = await Equipment.getMostRecentInsertID();
    
    //check which equipment to create
    switch (equipmentType) {

        //apparel
        case 1:
            
            let { brandName, qSmall, qMed, qLarge, qXL, qXXL, q3X } = attributes;

            let apparel = new Apparel(null, brandName, equipmentID, qSmall, qMed, qLarge, qXL, qXXL, q3X);
            apparel = await apparel.createApparel();
            console.log(apparel);
            break;

        //accessories
        case 2:
            break;
    }
    res.send("create equipment route");
}

export const deleteEquipmentByID = async (req, res, next) => {

    let equipmentID = req.params.equipmentID;
    let equipmentType = await Equipment.getEquipmentTypeByID(equipmentID);

    //delete from equipment
    let [equipment, _] = await Equipment.deleteEquipmentByID(equipmentID);

    //if equip was apparel, remove its attributes
    if(equipmentType === 1){
        let apparel = await Apparel.deleteApparelByEquipmentID(equipmentID);
    }
    res.status(200).json(equipment);
}