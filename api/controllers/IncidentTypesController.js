/**
 * IncidentTypesController
 *
 * @description :: Server-side logic for managing incidenttypes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `IncidentTypesController.create()`
   */
  create: function (req, res) {
    if(req.body!=null && req.body!='')
	{
		
		IncidentTypes.create(req.body,function(err,model){

			if (err) {
				console.log("Incident Types could not be created " + err);
				return res.serverError();
			}else {
				console.log("Successfully Created " + model.id);
				res.json(model);
			}
		});

	}
	else
	{
		console.log("Request Body was empty");
		return res.badRequest();
	}
  },


  /**
   * `IncidentTypesController.update()`
   */
  update: function (req, res) {
    var tmp = req.param("IncidentTypes",null);
	var id = tmp.id;
	
	IncidentTypes.findOne(id).done(function(err, model) {
		if(req.param("IncidentTypes",null)!=null)
		{
			model.name = tmp.name;
			model.updated_by = tmp.updated_by;
			model.updated_on = tmp.updated_on;
			
			model.save(function(err){
				if (err) {
					console.log("Unable to update IncidentTypes : " + id);
					return res.serverError();
				}else {
					res.json(model);
				}

			});
		}
		else
		{
			console.log("IncidentTypes was empty");
			return res.badRequest();
		}

	});
  },


  /**
   * `IncidentTypesController.getAll()`
   */
  getAll: function (req, res) {
    console.log("Fetching all IncidentTypes");
	IncidentTypes.find().where().exec(function(err,types){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(types === undefined) return res.notFound();
		res.json(types);
	});
  },


  /**
   * `IncidentTypesController.getById()`
   */
  getById: function (req, res) {
    var id = req.param('id');
	console.log("Looking for IncidentTypes : " + id);
	
	IncidentTypes.find().where({id: id}).exec(function(err,types){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(types === undefined) return res.notFound();
		res.json(types);
	});
  },


  /**
   * `IncidentTypesController.delete()`
   */
  delete: function (req, res) {
    var id = req.param('id');
	console.log("Deleting IncidentTypes : " + id);
	IncidentTypes.destroy({id: id}).exec(function(err){
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}else{
		console.log("IncidentTypes : " + id + " has been deleted");
		}		
	});
    return res.json({
      id: id
    });
  }
};

