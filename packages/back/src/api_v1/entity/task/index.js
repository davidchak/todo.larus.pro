const { Entity } = require('..');

class Task extends Entity{
    constructor({id, ...data}){
        super(data, id)
    };

    static create(props){
        const instance = new Task(props);
        return instance;
    };
}