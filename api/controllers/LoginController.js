/**
 * LoginController
 *
 * @description :: Server-side logic for managing logins
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {
	


  /**
   * `LoginController.authenticate()`
   */
  authenticate: function (req, res) {
    
	var temp = req.get('Authorization');
	
	if(temp!=null && temp!='')
	{
		var authHead = temp.split(' ');
		var decoded = new Buffer(authHead[1], 'base64').toString('ascii').split(':');
	
		//Logic for authentication
		if(decoded[0]=='admin' && decoded[1]=='admin'){
			//req.session.authenticated = true;
			var uuid = require('node-uuid');
			
			var obj = {user_id: parseInt('22'),key: uuid.v4(),created_on: new Date()};
			flag = false;						
			return ApiKeys.create(obj,function(err,model){
			    
				if (err) {
					console.log("API Key could not be created " + err);
					return res.serverError();
				}else {
						console.log("Successfully Created Api Key for " + model.user_id);		
						return res.json({
							id: uuid.v4()
						});
					}
			});					
		}
	}	
	
	return res.forbidden('You are not permitted to perform this action.');
  }
};

