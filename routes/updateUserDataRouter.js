var {Router} = require('express')
var UserDataService = require('../services/updateUserDataService')
var commonResponse = require('../utils/commonResponse')

 
const userDataService = new UserDataService()
const UserDataRoute = Router()
    .put('/:id', async(req, res) => {
        const filter = {id : req.params.id}
        const newValue = {$set : req.body}
        try {
            let data = await userDataService.updateData(filter, newValue)
            console.log(data)
            res.json(commonResponse('success', req.body, 'Data has been updated!'))
        } catch (error) {
            res.json(commonResponse('error',null,error))
        }
    })
module.exports = UserDataRoute;