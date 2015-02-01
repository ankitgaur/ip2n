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
			var key = uuid.v4();
			var uid = 22;
			//var obj = {user_id: uid,key: uuid.v4(),created_on: new Date()};
			flag = false;						
			return ApiKeys.query("REPLACE INTO ip2n_nigeria_incidents.api_keys VALUES("+uid+",'"+ key +"',CURRENT_TIMESTAMP)", function(err, results) {
				if (err) return res.serverError(err);
				return res.json({
							id: key
				});
			});			
		}
	}	
	
	return res.forbidden('You are not permitted to perform this action.');
  }
};

