/**
 * Policy Mappings
 * (sails.config.policies)
 *
 * Policies are simple functions which run **before** your controllers.
 * You can apply one or more policies to a given controller, or protect
 * its actions individually.
 *
 * Any policy file (e.g. `api/policies/authenticated.js`) can be accessed
 * below by its filename, minus the extension, (e.g. "authenticated")
 *
 * For more information on how policies work, see:
 * http://sailsjs.org/#/documentation/concepts/Policies
 *
 * For more information on configuring policies, check out:
 * http://sailsjs.org/#/documentation/reference/sails.config/sails.config.policies.html
 */


module.exports.policies = {

  /***************************************************************************
  *                                                                          *
  * Default policy for all controllers and actions (`true` allows public     *
  * access)                                                                  *
  *                                                                          *
  ***************************************************************************/

  '*': true,

  // Make sure Owner is set appropriately when creating and
  // doesnt get overwritten whe updating.
  ProductController: {
    create: ['setLoggedUserAsOwner'],
    update:  ['isLoggedIn', 'preventOwnerChange'],
    destroy: ['isLoggedIn'],
    myProducts: ['isLoggedIn']
  },

  CategoryController: {
    create: ['setLoggedUserAsOwner'],
    update:  ['isLoggedIn', 'preventOwnerChange'],
    destroy: ['isLoggedIn'],
    myCategories: ['isLoggedIn']
  },

  CatalogController: {
    create: ['setLoggedUserAsOwner'],
    update:  ['isLoggedIn', 'preventOwnerChange'],
    destroy: ['isLoggedIn'],
    myCatalogs: ['isLoggedIn']
  },

  WarehouseController: {
    create: ['setLoggedUserAsOwner'],
    update:  ['isLoggedIn', 'preventOwnerChange'],
    destroy: ['isLoggedIn'],
    myWarehouses: ['isLoggedIn']
  },

  // Enrty point for affecting Inventory
  InventoryTransactionController: {
		// Apply the `false` policy as the default for all of InventoryTransactionController's actions
		// (`false` prevents all access, which ensures that nothing bad happens to the inventory)
		'*': false,

    // In order to affect Inventory you need to:
    // -be logged in
    // -have access to the warehouse
    // -Have permission to affect inventory for the product
    affectInventory: ['isLoggedIn', 'canAccessWarehouse', 'canAffectInventory']
	}
};
