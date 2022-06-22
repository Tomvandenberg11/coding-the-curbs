import {reservationsCollection} from './../../modules/mongoClient.js'

export const deleteRoute = async (req, res) => {
    const code = req.body.code

    reservationsCollection.remove({ 'code': code })
        .then(() => {
            res.render('manage', {
                title: 'Manage your reservation',
                reservation: 'test'
            })
        })
}