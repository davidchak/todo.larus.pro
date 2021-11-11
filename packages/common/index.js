const { v4 : uuidv4 } = require("uuid");

class BaseEntity {
    #id;
    #props;

    constructor(id, props){
      this.#id = id ? id : uuidv4(),
      this.#props = props
    };
}

module.exports = Entity;
