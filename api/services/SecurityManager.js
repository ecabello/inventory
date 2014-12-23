/**
* SecurityManager
*
* @description :: This service encapsulates our security system logic used by policies
* @help        :: See http://sailsjs.org/#/documentation/concepts/Services
*
* The callbacks passed to the SecurityManager follow node's convention:
*   function(err, permission) {
*     if (err)
*        handle error...
*
*     if (!permission)
*       handle permission not granted
*
*     handle permission granted
*   }
*/

module.exports = {
  //  Used to check for General system permissions (e.g. admin)
  checkGeneralPermission: function(user, action, cb) {
    this.checkPermission(user, 'general', action, cb);
  },

  // Checking for Warehouse permissions (e.g. access)
  checkWarehousePermission: function(user, action, warehouseId, cb) {
    this.checkPermission(user, 'warehouse', action, warehouseId, cb);
  },

  //  Checking for Product permissions (e.g. access, add, remove)
  checkProductPermission: function(user, action, productId, cb) {
    this.checkPermission(user, 'product', action, productId, cb);
  },

  //  They all call here
  checkPermission: function(user, type, action, ref, cb) {
    // Build permission search criteria
    var perm = {
      user: user.id,
      type: type,
      action: action
    };
    // ref is optional, but callback is required...
    if (!cb)
      cb = ref;
    else
      perm[type] = ref

    // Find the permission
    Permission.findOne(perm).exec(cb);
  }
};
