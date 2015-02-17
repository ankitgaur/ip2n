/**
* JosContent.js
*
* @description :: TODO: You might write a short summary of how this model works and what it represents here.
* @docs        :: http://sailsjs.org/#!documentation/models
*/

module.exports = {

  connection: 'josMysqlServer',
  tableName: 'jos_content',
  autoCreatedAt: false,
  autoUpdatedAt: false,
  attributes: {

    id : { type: 'integer',
			primaryKey: true },

    title : { type: 'string' },

    alias : { type: 'string' },
	
	introtext : { type: 'string' },

    created : { type: 'datetime' },

    user : {type: 'string'}
  }
};

