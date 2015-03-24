/**
 * Route Mappings
 * (sails.config.routes)
 *
 * Your routes map URLs to views and controllers.
 *
 * If Sails receives a URL that doesn't match any of the routes below,
 * it will check for matching files (images, scripts, stylesheets, etc.)
 * in your assets directory.  e.g. `http://localhost:1337/images/foo.jpg`
 * might match an image file: `/assets/images/foo.jpg`
 *
 * Finally, if those don't match either, the default 404 handler is triggered.
 * See `api/responses/notFound.js` to adjust your app's 404 logic.
 *
 * Note: Sails doesn't ACTUALLY serve stuff from `assets`-- the default Gruntfile in Sails copies
 * flat files from `assets` to `.tmp/public`.  This allows you to do things like compile LESS or
 * CoffeeScript for the front-end.
 *
 * For more information on configuring custom routes, check out:
 * http://sailsjs.org/#/documentation/concepts/Routes/RouteTargetSyntax.html
 */

module.exports.routes = {

  /***************************************************************************
  *                                                                          *
  * Make the view located at `views/homepage.ejs` (or `views/homepage.jade`, *
  * etc. depending on your default view engine) your home page.              *
  *                                                                          *
  * (Alternatively, remove this and add an `index.html` file in your         *
  * `assets` directory)                                                      *
  *                                                                          *
  ***************************************************************************/

  '/': {
    controller : 'appController',
    action : 'renderApp'
  },

  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

  'GET /login': {
    controller: 'UserController',
    action: 'login'
  },

  'POST /login': {
    controller: 'UserController',
    action: 'processLogin'
  },

  'GET /user': {
    controller: 'UserController',
    action: 'logged'
  },

  'PUT /user': {
    controller: 'UserController',
    action: 'update'
  },

  '/google/login': {
    controller: 'UserController',
    action: 'googleLogin'
  },

  '/google/return': {
    controller: 'UserController',
    action: 'googleLogin'
  },

  '/facebook/login': {
    controller: 'UserController',
    action: 'facebookLogin'
  },

  '/facebook/return': {
    controller: 'UserController',
    action: 'facebookLogin'
  },

  '/twitter/login': {
    controller: 'UserController',
    action: 'twitterLogin'
  },

  '/twitter/return': {
    controller: 'UserController',
    action: 'twitterLogin'
  },

  '/logout': {
    controller: 'UserController',
    action: 'logout'
  },

  'PUT /inventorytransaction': {
    controller: 'InventoryTransactionController',
    action: 'affectInventory'
  },

  // Repoint /product to our custom action that lists
  // the logged user's products
  'GET /product': {
    controller: 'ProductController',
    action: 'myProducts'
  },

  // Repoint /category to list the logged user's categories
  'GET /category': {
    controller: 'CategoryController',
    action: 'myCategories'
  },

  // Repoint /catalog to list the logged user's catalogs
  'GET /catalog': {
    controller: 'CatalogController',
    action: 'myCatalogs'
  },

  // Repoint /warehouse to list the logged user's warehouses
  'GET /warehouse': {
    controller: 'WarehouseController',
    action: 'myWarehouses'
  },

  // Repoint /file to list the logged user's files
  'GET /warehouse': {
    controller: 'FileController',
    action: 'myFiles'
  },

  '/upload':{
    view: 'upload'  // 'uploadfile' view
  },

  'GET /product/user/:userid' : {
    controller: 'ProductController',
    action: 'userProducts'
  }
};
