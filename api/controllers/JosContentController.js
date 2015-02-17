/**
 * JosContentController
 *
 * @description :: Server-side logic for Joomla Content
 * @help        :: See http://links.sailsjs.org/docs/controllers
 */

module.exports = {

  /**
   * `Fetching News`
   */
  getNews: function (req, res) {
  
    var pg = req.param('pg');
    var sql = "SELECT a.id as id,a.title as title,"
			  +" a.alias as alias,a.introtext as introtext,b.name as user," 
			  +" a.created as created FROM jos_content a, jos_users b"
			  +" WHERE a.created_by=b.id and a.sectionid = 1"
			  +" and a.state = 1 order by id desc LIMIT " + pg +",10";
    console.log("Fetching News");
	JosContent.query(sql,function(err,content){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(content === undefined) return res.notFound();
		res.json(content);
	});
  },
  
  /**
   * `Fetching Entertainment`
   */
  getEntertainment: function (req, res) {
  
    var pg = req.param('pg');
    var sql = "SELECT a.id as id,a.title as title,"
			  +" a.alias as alias,a.introtext as introtext,b.name as user," 
			  +" a.created as created FROM jos_content a, jos_users b"
			  +" WHERE a.created_by=b.id and a.sectionid = 10"
			  +" and a.state = 1 order by id desc LIMIT " + pg +",10";
    console.log("Fetching News");
	JosContent.query(sql,function(err,content){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(content === undefined) return res.notFound();
		res.json(content);
	});
  },
  
  /**
   * `Fetching Latest News`
   */
  getLatestNews: function (req, res) {
  
    var id = req.param('id');
    var sql = "SELECT a.id as id,a.title as title,"
			  +" a.alias as alias,a.introtext as introtext,b.name as user," 
			  +" a.created as created FROM jos_content a, jos_users b"
			  +" WHERE a.created_by=b.id and a.sectionid = 1"
			  +" and a.state = 1 and a.id > " + id + " order by id desc";
    console.log("Fetching Latest News");
	JosContent.query(sql,function(err,content){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(content === undefined) return res.notFound();
		res.json(content);
	});
  },
  
  /**
   * `Fetching Latest Entertainment`
   */
  getLatestEntertainment: function (req, res) {
  
    var id = req.param('id');
    var sql = "SELECT a.id as id,a.title as title,"
			  +" a.alias as alias,a.introtext as introtext,b.name as user," 
			  +" a.created as created FROM jos_content a, jos_users b"
			  +" WHERE a.created_by=b.id and a.sectionid = 10"
			  +" and a.state = 1 and a.id > " + id + " order by id desc";
    console.log("Fetching Latest Entertainment");
	JosContent.query(sql,function(err,content){
		
		if(err != null)
		{
			console.log(err);
			return res.serverError();
		}
		if(content === undefined) return res.notFound();
		res.json(content);
	});
  }
};

