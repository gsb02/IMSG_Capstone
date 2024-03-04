import promisePool from "../config/dbConfig.js";

export default class Apparel {
    constructor(apparelID, brandName, equipmentID, qSmall, qMed, qLarge, qXL, qXXL, q3X) {
        this.apparelID = apparelID;
        this.brandName = brandName;
        this.equipmentID = equipmentID;
        this.qSmall = qSmall;
        this.qMed = qMed;
        this.qLarge = qLarge;
        this.qXL = qXL;
        this.qXXL = qXXL;
        this.q3X = q3X;
    }

    async createApparel(){

        let sqlQuery = `
        INSERT INTO apparel(
            brandName,
            equipmentID,
            quantitySmall,
            quantityMedium,
            quantityLarge,
            quantityXL,
            quantity2XL,
            quantity3XL
        )
        VALUES(
            '${this.brandName}',
            '${this.equipmentID}',
            '${this.qSmall}',
            '${this.qMed}',
            '${this.qLarge}',
            '${this.qXL}',
            '${this.qXXL}',
            '${this.q3X}'
        )
        `;

        const [newApparel, _] = await promisePool.execute(sqlQuery);
        return newApparel;
    }

    static async deleteApparelByEquipmentID(equipmentID){
        
        let sqlQuery = `
            DELETE FROM apparel
            WHERE equipmentID = ${equipmentID}
        `;

        return promisePool.execute(sqlQuery);
    }

    static async getSecondaryAttributesByID(equipmentID){
        let sqlQuery = `
            SELECT * FROM apparel
            WHERE equipmentID = ${equipmentID}
        `;

        return promisePool.execute(sqlQuery);
    }
}
