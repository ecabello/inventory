/**
* Catalog.js
*
* @description :: Catalog of Products organized under Categories
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // We need a name to refer to the Catalog
    name: {
      type: 'string',
      required: true
    },

    // A Catalog always belongs to one and only one User
    owner: {
      model: 'User',
      required: true
    },

    // What categories are listed in this Catalog
    categories: {
      collection: 'Category',
      via: 'catalogs'
    },

    toJSON: function() {
      var obj = this.toObject();
      if ('owner' in obj && typeof obj.owner === 'object')
        obj.owner = obj.owner.id;
      return obj;
    }
  }
};
