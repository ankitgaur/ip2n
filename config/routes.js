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

  'get /login': 'LoginController.authenticate',
  
  'post /responseTimes': 'ResponseTimesController.create',  
  'get /responseTimes': 'ResponseTimesController.getAll',
  'get /responseTimes/:id' : 'ResponseTimesController.getById',
  'put /responseTimes' : 'ResponseTimesController.update',
  'delete /responseTimes/:id' : 'ResponseTimesController.delete',

  'post /nigeriaStates': 'NigeriaStatesController.create',  
  'get /nigeriaStates': 'NigeriaStatesController.getAll',
  'get /nigeriaStates/:id' : 'NigeriaStatesController.getById',
  'put /nigeriaStates' : 'NigeriaStatesController.update',
  'delete /nigeriaStates/:id' : 'NigeriaStatesController.delete',
  
  'post /incidentTypes': 'IncidentTypesController.create',  
  'get /incidentTypes': 'IncidentTypesController.getAll',
  'get /incidentTypes/:id' : 'IncidentTypesController.getById',
  'put /incidentTypes' : 'IncidentTypesController.update',
  'delete /incidentTypes/:id' : 'IncidentTypesController.delete',
  
  'post /incidents': 'IncidentsController.create',  
  'get /incidents': 'IncidentsController.getAll',
  'get /incidents/page/:pg/:count': 'IncidentsController.getPage',
  'get /incidents/:id' : 'IncidentsController.getById',
  'get /incidents/latest/:id' : 'IncidentsController.getLatest',
  'put /incidents' : 'IncidentsController.update',
  'delete /incidents/:id' : 'IncidentsController.delete',
  
  'post /incidentCauses': 'IncidentCausesController.create',  
  'get /incidentCauses': 'IncidentCausesController.getAll',
  'get /incidentCauses/:id' : 'IncidentCausesController.getById',
  'get /incidentCauses/category/:id' : 'IncidentCausesController.getAllForCategory',
  'put /incidentCauses' : 'IncidentCausesController.update',
  'delete /incidentCauses/:id' : 'IncidentCausesController.delete',
  
  'post /incidentCategories': 'IncidentCategoriesController.create',  
  'get /incidentCategories': 'IncidentCategoriesController.getAll',
  'get /incidentCategories/:id' : 'IncidentCategoriesController.getById',
  'get /incidentCategories/type/:id' : 'IncidentCategoriesController.getAllForType',
  'put /incidentCategories' : 'IncidentCategoriesController.update',
  'delete /incidentCategories/:id' : 'IncidentCategoriesController.delete',
  
  'get /news/latest/:id' : 'JosContentController.getLatestNews',
  'get /entertainment/latest/:id' : 'JosContentController.getLatestEntertainment',  
  'get /news/:pg/:count' : 'JosContentController.getNews',
  'get /entertainment/:pg/:count' : 'JosContentController.getEntertainment'
  
  
  
  /***************************************************************************
  *                                                                          *
  * Custom routes here...                                                    *
  *                                                                          *
  *  If a request to a URL doesn't match any of the custom routes above, it  *
  * is matched against Sails route blueprints. See `config/blueprints.js`    *
  * for configuration options and examples.                                  *
  *                                                                          *
  ***************************************************************************/

};
