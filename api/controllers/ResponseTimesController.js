/**
 * ResponseTimesController
 *
 * @description :: Server-side logic for managing responsetimes
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `ResponseTimesController.create()`
   */
  create: function (req, res) {
    //console.log(req.body);
    if(req.body!=null && req.body!='')
	{
		
		ResponseTimes.create(req.body,function(err,model){

			if (err) {
				console.log("ResponseTimes could not be created " + err);
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
   * `ResponseTimesController.update()`
   */
  update: function (req, res) {
    var tmp = req.param("ResponseTimes",null);
	var id = tmp.id;
	
	ResponseTimes.findOne(id).done(function(err, model) {
		if(req.param("ResponseTimes",null)!=null)
		{
			model.name = tmp.name;
			model.updated_by = tmp.updated_by;
			model.updated_on = tmp.updated_on;
			
			model.save(function(err){
				if (err) {
					console.log("Unable to update ResponseTimes : " + id);
					return res.serverError();
				}else {
					res.json(model);
				}

			});
		}
		else
		{
			console.log("ResponseTimes was empty");
			return res.badRequest();
		}

	});
  },


  /**
   * `ResponseTimesController.getAll()`
   */
  getAll: function (req, res) {
    console.log("Fetching all ResponseTimess");
	ResponseTimes.find().where().exec(function(err,times){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(times === undefined) return res.notFound();
		res.json(times);
	});    
  },


  /**
   * `ResponseTimesController.getById()`
   */
  getById: function (req, res) {
    var id = req.param('id');
	console.log("Looking for ResponseTimes : " + id);
	
	ResponseTimes.find().where({id: id}).exec(function(err,times){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(times === undefined) return res.notFound();
		res.json(times);
	});
  },


  /**
   * `ResponseTimesController.delete()`
   */
  delete: function (req, res) {
	var id = req.param('id');
	console.log("Deleting ResponseTimes : " + id);
	ResponseTimes.destroy({id: id}).exec(function(err){
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}else{
		console.log("ResponseTimes : " + id + " has been deleted");
		}		
	});
    return res.json({
      id: id
    });
  }
};

