/**
 * NigeriaStatesController
 *
 * @description :: Server-side logic for managing nigeriastates
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `NigeriaStatesController.create()`
   */
  create: function (req, res) {
    if(req.body!=null && req.body!='')
	{
		
		NigeriaStates.create(req.body,function(err,model){

			if (err) {
				console.log("Nigeria States could not be created " + err);
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
   * `NigeriaStatesController.update()`
   */
  update: function (req, res) {
    var tmp = req.param("NigeriaStates",null);
	var id = tmp.id;
	
	NigeriaStates.findOne(id).done(function(err, model) {
		if(req.param("NigeriaStates",null)!=null)
		{
			model.name = tmp.name;
			model.abbr = tmp.abbr;
			model.updated_by = tmp.updated_by;
			model.updated_on = tmp.updated_on;
			
			model.save(function(err){
				if (err) {
					console.log("Unable to update NigeriaStates : " + id);
					return res.serverError();
				}else {
					res.json(model);
				}

			});
		}
		else
		{
			console.log("NigeriaStates was empty");
			return res.badRequest();
		}

	});
  },


  /**
   * `NigeriaStatesController.getAll()`
   */
  getAll: function (req, res) {
    console.log("Fetching all NigeriaStates");
	NigeriaStates.find().where().exec(function(err,states){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(states === undefined) return res.notFound();
		res.json(states);
	});
  },


  /**
   * `NigeriaStatesController.getById()`
   */
  getById: function (req, res) {
    var id = req.param('id');
	console.log("Looking for NigeriaStates : " + id);
	
	NigeriaStates.find().where({id: id}).exec(function(err,states){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(states === undefined) return res.notFound();
		res.json(states);
	});
  },


  /**
   * `NigeriaStatesController.delete()`
   */
  delete: function (req, res) {
    var id = req.param('id');
	console.log("Deleting NigeriaStates : " + id);
	NigeriaStates.destroy({id: id}).exec(function(err){
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}else{
		console.log("NigeriaStates : " + id + " has been deleted");
		}		
	});
    return res.json({
      id: id
    });
  }
};

