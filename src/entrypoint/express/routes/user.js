const { CreatUserUseCase } = require('../../../usecase/CreatUserUseCase')
const { PresenterWEB } = require('.././../../presenter/PresenterWEB')
const { OperatorsDB } = require('.././../../repository/mongoAtlas/OperatorsDB')

module.exports = app => {


    app.get('/user', function (req, res) {
        console.log('GET')
        res.send('Hello World user')
    })


    app.post('/user', function (req, res) {
        console.log('POST USER', req.body)
        new CreatUserUseCase(new PresenterWEB(res), new OperatorsDB(), req.body).execute()

        // res.json(req.body)
    })


    app.put('/user', function (req, res) {
        res.send('Got a PUT request at /user')
    })


    app.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user')
    })



}