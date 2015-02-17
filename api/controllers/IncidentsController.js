/**
 * IncidentsController
 *
 * @description :: Server-side logic for managing incidents
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `IncidentsController.create()`
   */
  create: function (req, res) {
  
	if(req.body!=null && req.body!='')
	{
		
		Incidents.create(req.body,function(err,model){

			if (err) {
				console.log("Incident could not be created " + err);
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
   * `IncidentsController.update()`
   */
  update: function (req, res) {
    var tmp = req.param("Incidents",null);
	var id = tmp.id;
	
	Incidents.findOne(id).done(function(err, model) {
		if(req.param("Incidents",null)!=null)
		{
			model.name = tmp.name;
			model.incident_type_id = tmp.incident_type_id;
			model.title = tmp.title;
			model.date_time = tmp.date_time;
			model.state_id = tmp.state_id; 
			model.govt = tmp.govt;
			model.police_station = tmp.police_station;
			model.response_time_id = tmp.response_time_id;
			model.description = tmp.description;
			model.incident_category_id = tmp.incident_category_id;
			model.incident_cause_id = tmp.incident_cause_id;
			model.approved  = tmp.approved;
			model.approved_by = tmp.approved_by;
			model.approved_on = tmp.approved_on;
			model.updated_by = tmp.updated_by;
			model.updated_on = tmp.updated_on;
			
			model.save(function(err){
				if (err) {
					console.log("Unable to update Incidents : " + id);
					return res.serverError();
				}else {
					res.json(model);
				}

			});
		}
		else
		{
			console.log("Incidents was empty");
			return res.badRequest();
		}

	});
  },


  /**
   * `IncidentsController.getAll()`
   */
  getAll: function (req, res) {
    console.log("Fetching all Incidents");
	Incidents.find().where().exec(function(err,incidents){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(incidents === undefined) return res.notFound();
		res.json(incidents);
	});
  },

  getPage: function (req, res) {
    var pg = req.param('pg');
	var count = req.param('count');
	var sql = "Select * from incidents order by id desc LIMIT " + pg +","+count;
    console.log("Fetching all Incidents pg = " + pg + " count = " + count);
	Incidents.query(sql,function(err,incidents){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(incidents === undefined) return res.notFound();
		res.json(incidents);
	});
  },
  
  /**
   * `IncidentsController.getById()`
   */
  getById: function (req, res) {
    var id = req.param('id');
	console.log("Looking for Incidents : " + id);
	
	Incidents.find().where({id: id}).exec(function(err,incidents){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(incidents === undefined) return res.notFound();
		res.json(incidents);
	});
  },


  /**
   * `IncidentsController.delete()`
   */
  delete: function (req, res) {
    var id = req.param('id');
	console.log("Deleting Incidents : " + id);
	Incidents.destroy({id: id}).exec(function(err){
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}else{
		console.log("Incidents : " + id + " has been deleted");
		}		
	});
    return res.json({
      id: id
    });
  }
};

