/**
* IncidentCategories.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'myMysqlServer',
  tableName: 'incident_categories',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {

    id : { type: 'integer',
			primaryKey: true },

    incident_type_id : { type: 'integer' },

    name : { type: 'string' },

    created_by : { type: 'string' },

    created_on : { type: 'datetime' },

    updated_by : { type: 'string' },

    updated_on : { type: 'datetime' }
  }
};

