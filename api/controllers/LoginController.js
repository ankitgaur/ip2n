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
			req.session.authenticated = uuid.v4();
			return res.json({
				token: req.session.authenticated
			});
		}
	}	
	
	return res.forbidden('You are not permitted to perform this action.');
  }
};

