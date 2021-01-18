class BananaModel {
    constructor(){
      this.id = 0;
      this.db = [];
    }
    // [{ id: x, ...record }, { id: x, ...record }]
  
    get(id){
      if(id){
        // this would be for the getOneBanana
        return this.db.find(record => record.id === id);
      } else {
        // this would be for getAllBananas
        return this.db;
      }
    }
  
    create(obj) {
      obj.id = ++this.id;
      this.db.push(obj);
      return obj;
    }
  
    update(id, obj){
      if (!id) {return null}
  
      // TODO: figure out how to update an object
      return obj;
    }
  
    delete(id) {
      if(!id) {return null}
  
      // TODO: figure out hoe to delete the object
      return null;
    }
  }
  
  module.exports = BananaModel;