import Equipment from "../models/Equipment.js";
import Apparel from "../models/Apparel.js";
import Shoe from "../models/Shoe.js";
import Jersey from "../models/Jersey.js";

export const createEquipment = async (req, res, next) => {

    try{
        let { equipmentName, storedQuantity, distQuantity, sportID, equipmentType, lastOrdered, lastDistributed, attributes } = req.body;
        
        let equipment = new Equipment(null, equipmentName, storedQuantity, distQuantity, sportID, equipmentType, lastOrdered, lastDistributed);
        equipment = await equipment.createEquipment();

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
            

            //accessory
            case 2:
                //no sub attributes for accessories
                break;

            //shoes
            case 3:

                let { name, q_6, q_6_5, q_7, q_7_5, q_8, q_8_5, q_9, 
                    q_9_5, q_10, q_10_5, q_11, q_11_5, q_12, q_12_5, q_13 } = attributes;

                let shoe = new Shoe(null, name, q_6, q_6_5, q_7, q_7_5, q_8, q_8_5, q_9, 
                    q_9_5, q_10, q_10_5, q_11, q_11_5, q_12, q_12_5, q_13, equipmentID);

                shoe = await shoe.createShoe();
                console.log(shoe);
                break;
            
            //jersey
            case 4:
                let { color, jerseyNumbers } = attributes;
                let { smallJerseys, mediumJerseys, largeJerseys, xlJerseys } = jerseyNumbers;

                for(let i = 0; i < smallJerseys.length; i++){
                    let jersey = new Jersey(null, equipmentID, color, 'S', smallJerseys[i]);
                    jersey = await jersey.createJersey();
                }

                for(let i = 0; i < mediumJerseys.length; i++){
                    let jersey = new Jersey(null, equipmentID, color, 'M', mediumJerseys[i]);
                    jersey = await jersey.createJersey();
                }

                for(let i = 0; i < largeJerseys.length; i++){
                    let jersey = new Jersey(null, equipmentID, color, 'L', largeJerseys[i]);
                    jersey = await jersey.createJersey();
                }
                
                for(let i = 0; i < xlJerseys.length; i++){
                    let jersey = new Jersey(null, equipmentID, color, 'XL', xlJerseys[i]);
                    jersey = await jersey.createJersey();
                }

                break;

            default:
                break;

        }

        res.status(200).json(equipment);

    } catch(error){
        console.log(error);
        res.status(500).json({error: "error creating equipment"})
    }
    
}

export const deleteEquipmentByID = async (req, res, next) => {

    try{
        let equipmentID = req.params.equipmentID;
        let equipmentType = await Equipment.getEquipmentTypeByID(equipmentID);

        //delete from equipment
        let [equipment, _] = await Equipment.deleteEquipmentByID(equipmentID);
        
        //remove equipment sub attributes
        switch (equipmentType){

            //apparel
            case 1:
                let apparel = await Apparel.deleteApparelByEquipmentID(equipmentID);
                break;
            
            //accessory
            case 2:
                break;

            //shoes
            case 3:
                let shoe = await Shoe.deleteShoeByEquipmentID(equipmentID);
                break;

            case 4:
                let jersey = await Jersey.deleteJerseysByID(equipmentID);
                break;

            default:
                break;
        }
        res.status(200).json(equipment);

    } catch (error) {
        res.status(500).json({error: "error deleting equipment"})
    }
    
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
                let apparel = await Apparel.getSecondaryAttributesByID(equipmentID);
                res.status(200).json(apparel[0]);
                break;

            case 2:
                break;
            //shoe
            case 3:
                let shoe = await Shoe.getSecondaryAttributesByID(equipmentID);
                res.status(200).json(shoe[0]);


            case 4:
                let jersey = await Jersey.getSecondaryAttributesByID(equipmentID);
                res.status(200).json(jersey[0]);

            default:
                break;
        }

    } catch(error){
        console.log(error);
        res.status(500).json({error: "failed to get equipment secondary attributes"});
    }

}

export const getAllEquipmentTypes = async (req, res, next) => {
        try{

            let [types, _] = await Equipment.getAllEquipmentTypes();
            res.status(200).json(types);
        } catch (error){
            console.log(error);
            res.status(500).json({error: "failed to get equipment types"});
        }
}