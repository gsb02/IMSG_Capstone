import Equipment from "../models/Equipment.js";
import Apparel from "../models/Apparel.js";

export const createEquipment = async (req, res, next) => {

    try{
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
    } catch(error){
        res.status(500).json({error: "error creating equipment"})
    }
    
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

export const getAllEquipment = async (req, res, next) => {

    try{

        let [equipment, _] = await Equipment.getAllEquipment();
        res.status(200).json(equipment);  

    } catch (error) {
        console.log(error);
        res.status(500).json({error: "failed to get all equipment"}); 
    }
    
}

export const getAllEquipmentByType = async (req, res, next) => {

    try{

        let equipmentType = req.params.equipmentType;
        let [equipment, _] = await Equipment.getAllEquipmentByType(equipmentType);
        res.status(200).json(equipment);

    } catch (error){
        console.log(error);
        res.status(500).json({error: "failed to get all equipment by type"});
    }

}

export const getEquipmentPrimaryAttributesByID = async (req, res, next) => {

    try{

        let equipmentID = req.params.equipmentID;
        let [equipment, _] = await Equipment.getEquipmentPrimaryAttributesByID(equipmentID);
        res.status(200).json(equipment);

    } catch(error){
        console.log(error);
        res.status(500).json({error: "failed to get equipment attributes"});
    }
}

export const getEquipmentSecondaryAttributesByID = async (req, res, next) => {

    try{

        let equipmentID = req.params.equipmentID;
        let equipmentType = await Equipment.getEquipmentTypeByID(equipmentID);
        
        switch (equipmentType){
            
            //apparel
            case 1:
                let subTable = "apparel";
                let [apparel, _] = await Equipment.getEquipmentSecondaryAttributesByID(subTable, equipmentID);
                res.status(200).json(apparel);
                break;

            default:
                break;
        }

        

    } catch(error){
        console.log(error);
        res.status(500).json({error: "failed to get equipment secondary attributes"});
    }

}