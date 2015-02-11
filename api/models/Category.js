/**
* ProductCategory.js
*
* @description :: Categories used to organize products
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // We need a name for the Category
    name: {
      type: 'string',
      required: true
    },

    // A Category always belongs to one and only one User
    owner: {
      model: 'User',
      required: true
    },

    // What Catalogs list this Category
    catalogs: {
      collection: 'Catalog',
      via: 'categories'
    },

    // What products are grouped under this category
    products: {
      collection: 'Product',
      via: 'categories'
    }
  }
};
