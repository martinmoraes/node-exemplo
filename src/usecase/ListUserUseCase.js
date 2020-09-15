

class ListUserUseCase{


    constructor(presenter, repository) {
        this.presenter = presenter
        this.repository = repository
        this.collection = 'users'
    }


    async findAll(){
        try {
            const allUsers = await this.repository.find(this.collection, {})
            this.presenter.ok(allUsers)
        } catch (fail) {
            console.log('ListUserUseCase.findAll', fail)
        }
    }

    async findById(userId){
        try {
            const user = await this.repository.findById(this.collection, userId)
            this.presenter.ok(user)
        } catch (fail) {
            console.log('ListUserUseCase.findAll', fail)
        }
    }
    


}


module.exports = { ListUserUseCase }