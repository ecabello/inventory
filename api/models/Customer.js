/**
* Customer.js
*
* @description :: A Customer is an entity (either individual or business) that
*                 is licensed to use our services. They need at east one User to
*                 that and are ultimetely responsible for paying the bill
*                 if applicable
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  attributes: {
    // We need a name to refer to the customer
    name: {
      type: 'string',
      required: true
    },
    // Individual | Business | Other
    type: {
      type: 'string',
      required: true,
      enum: ['individual', 'business', 'other']
    },
    //  Warehouses owned/operated by this customer
    warehouses: {
      collection: 'Warehouse',
      via: 'owner'
    },
    // Products owned by this customer
    products: {
      collection: 'Product',
      via: 'owner'
    }
  }
};
