/**
* ApiKeys.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'myMysqlServer',
  tableName: 'api_keys',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  
  attributes: {

    user_id : { type: 'integer',
	primaryKey: true},

    key : { type: 'string' },

    created_on : { type: 'datetime' }
  }
};

