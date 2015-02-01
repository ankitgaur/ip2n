/**
 * sessionAuth
 *
 * @module      :: Policy
 * @description :: Simple policy to allow any authenticated user
 *                 Assumes that your login action in one of your controllers sets `req.session.authenticated = true;`
 * @docs        :: http://sailsjs.org/#!documentation/policies
 *
 */
module.exports = function(req, res, next) {  
  

  // User is allowed, proceed to the next policy, 
  // or if this is the last policy, the controller
  
  var token = new Buffer(req.get('token'), 'base64').toString('ascii');
  var user = req.get('user');
  var key = '888';
  var uid = -1;
  
  if(user == 'admin'){
	uid = 22;
  
  }
  
  return ApiKeys.find().where({user_id: uid}).exec(function(err,obs){
		
		console.log(obs);
		if(err != null)
		{
			//console.log(err);
			return res.serverError();
		}
		
		
		console.log(obs);
		key = obs[0].key;
		
		//console.log( token + " " + key);			
		
		if (key == token) {
			//console.log("authenticated");
			return next();
		}
		else{
			return res.forbidden('You are not permitted to perform this action.');
		}
		
	});
  
};
