class todo{
    
    constructor(name, description, status){
        this.id = null
        this.name = name
        this.description = description
        this.status = status
    }

    get id(){return this.id}
    get name(){return this.name}
    get description(){return this.description}
    get status(){return this.status}

    set id(n){this.id= null}
    set name(name){this.name = name}
    set description(description){this.description = description}
    set status(status){this.status = status}
}

exports.default = todo