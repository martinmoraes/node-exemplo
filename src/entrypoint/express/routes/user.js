const { CreatUserUseCase } = require('../../../usecase/CreatUserUseCase')
const { ListUserUseCase } = require('../../../usecase/ListUserUseCase')
const { PresenterWEB } = require('.././../../presenter/PresenterWEB')
const { OperatorsDB } = require('.././../../repository/mongoAtlas/OperatorsDB')

module.exports = app => {


    app.get('/user', function (req, res) {
        // console.log('GET')
        const listUserUseCase = new ListUserUseCase(new PresenterWEB(res), new OperatorsDB())
        listUserUseCase.findAll()
    })

    app.get('/user/:id', function (req, res) {
        // console.log('GET')
        const listUserUseCase = new ListUserUseCase(new PresenterWEB(res), new OperatorsDB())
        listUserUseCase.findById(req.params.id)
    })


    app.post('/user', function (req, res) {
        // console.log('POST USER', req.body)
        new CreatUserUseCase(new PresenterWEB(res), new OperatorsDB(), req.body).execute()
    })


    app.put('/user', function (req, res) {
        res.send('Got a PUT request at /user')
    })


    app.delete('/user', function (req, res) {
        res.send('Got a DELETE request at /user')
    })



}