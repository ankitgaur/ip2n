/**
 * IncidentCategoriesController
 *
 * @description :: Server-side logic for managing incidentcategories
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `IncidentCategoriesController.create()`
   */
  create: function (req, res) {
    if(req.body!=null && req.body!='')
	{
		
		IncidentCategories.create(req.body,function(err,model){

			if (err) {
				console.log("IncidentCategories could not be created " + err);
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
   * `IncidentCategoriesController.update()`
   */
  update: function (req, res) {
    var tmp = req.param("IncidentCategories",null);
	var id = tmp.id;
	
	IncidentCategories.findOne(id).done(function(err, model) {
		if(req.param("IncidentCategories",null)!=null)
		{
			model.name = tmp.name;
			model.incident_type_id = tmp.incident_type_id;
			model.updated_by = tmp.updated_by;
			model.updated_on = tmp.updated_on;
			
			model.save(function(err){
				if (err) {
					console.log("Unable to update IncidentCategories : " + id);
					return res.serverError();
				}else {
					res.json(model);
				}

			});
		}
		else
		{
			console.log("IncidentCategories was empty");
			return res.badRequest();
		}

	});
  },


  /**
   * `IncidentCategoriesController.getAll()`
   */
  getAll: function (req, res) {
    console.log("Fetching all IncidentCategories");
	IncidentCategories.find().where().exec(function(err,categories){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(categories === undefined) return res.notFound();
		res.json(categories);
	});
  },

  getAllForType: function (req, res) {
    var id = req.param('id');
	console.log("Fetching all IncidentCategories for Type : " + id);
	IncidentCategories.find().where({incident_type_id: id}).exec(function(err,categories){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(categories === undefined) return res.notFound();
		res.json(categories);
	});
  },

  /**
   * `IncidentCategoriesController.getById()`
   */
  getById: function (req, res) {
    var id = req.param('id');
	console.log("Looking for IncidentCategories : " + id);
	
	IncidentCategories.find().where({id: id}).exec(function(err,categories){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(categories === undefined) return res.notFound();
		res.json(categories);
	});
  },


  /**
   * `IncidentCategoriesController.delete()`
   */
  delete: function (req, res) {
    var id = req.param('id');
	console.log("Deleting IncidentCategories : " + id);
	IncidentCategories.destroy({id: id}).exec(function(err){
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}else{
		console.log("IncidentCategories : " + id + " has been deleted");
		}		
	});
    return res.json({
      id: id
    });
  }
};

