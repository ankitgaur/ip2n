/**
* Incidents.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'myMysqlServer',
  tableName: 'incidents',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {

    id : { type: 'integer',
			primaryKey: true},

    incident_type_id : { type: 'integer' },

    title : { type: 'string' },

    date_time : { type: 'datetime' },

    state_id : { type: 'integer' },

    govt : { type: 'string' },

    police_station : { type: 'string' },

    response_time_id : { type: 'integer' },

    description : { type: 'string' },

    incident_category_id : { type: 'integer' },

    incident_cause_id : { type: 'integer' },

    approved : { type: 'string' },

    approved_by : { type: 'integer' },

    approved_on : { type: 'datetime' },

    created_by : { type: 'string' },

    created_on : { type: 'datetime' },

    updated_by : { type: 'string' },

    updated_on : { type: 'datetime' }
  }
};

