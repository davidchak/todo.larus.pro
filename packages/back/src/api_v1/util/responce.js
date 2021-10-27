

class ResponceData {
    constructor(status, data, error){
        this.error = error,
        this.data = data,
        this.status = status
    };

    set data(value) {

    }
    
    static createResponce(args) {
        return new ResponceData({...args});
    }
}


module.exports.createResponce = (status, data=null, error=null) => {

}