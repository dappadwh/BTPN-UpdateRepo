const Collection = require("../database/connection")

class UserDataService{
    
    async updateData(filter, newValue){
        const userData = await Collection('userData')
        return userData.updateOne(filter, newValue, {upsert: false})
    }

}

module.exports = UserDataService;