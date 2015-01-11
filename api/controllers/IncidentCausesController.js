/**
 * IncidentCausesController
 *
 * @description :: Server-side logic for managing incidentcauses
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `IncidentCausesController.create()`
   */
  create: function (req, res) {
if(req.body!=null && req.body!='')
	{
		
		IncidentCauses.create(req.body,function(err,model){

			if (err) {
				console.log("Incident Causes could not be created " + err);
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
   * `IncidentCausesController.update()`
   */
  update: function (req, res) {
    var tmp = req.param("IncidentCauses",null);
	var id = tmp.id;
	
	IncidentCauses.findOne(id).done(function(err, model) {
		if(req.param("IncidentCauses",null)!=null)
		{
			model.name = tmp.name;
			model.incident_category_id = tmp.incident_category_id;
			model.updated_by = tmp.updated_by;
			model.updated_on = tmp.updated_on;
			
			model.save(function(err){
				if (err) {
					console.log("Unable to update IncidentCauses : " + id);
					return res.serverError();
				}else {
					res.json(model);
				}

			});
		}
		else
		{
			console.log("IncidentCauses was empty");
			return res.badRequest();
		}

	});
  },


  /**
   * `IncidentCausesController.getAll()`
   */
  getAll: function (req, res) {
    console.log("Fetching all IncidentCauses");
	IncidentCauses.find().where().exec(function(err,causes){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(causes === undefined) return res.notFound();
		res.json(causes);
	});
  },
  
  getAllForCategory: function (req, res) {
    var id = req.param('id');
	console.log("Fetching all IncidentCauses for Category : " + id);
	IncidentCauses.find().where({incident_category_id: id}).exec(function(err,causes){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(causes === undefined) return res.notFound();
		res.json(causes);
	});
  },


  /**
   * `IncidentCausesController.getById()`
   */
  getById: function (req, res) {
    var id = req.param('id');
	console.log("Looking for IncidentCauses : " + id);
	
	IncidentCauses.find().where({id: id}).exec(function(err,causes){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(causes === undefined) return res.notFound();
		res.json(causes);
	});
  },


  /**
   * `IncidentCausesController.delete()`
   */
  delete: function (req, res) {
    var id = req.param('id');
	console.log("Deleting IncidentCauses : " + id);
	IncidentCauses.destroy({id: id}).exec(function(err){
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}else{
		console.log("IncidentCauses : " + id + " has been deleted");
		}		
	});
    return res.json({
      id: id
    });
  }
};

