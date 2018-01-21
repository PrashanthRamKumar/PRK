var MongoClient = require('mongodb').MongoClient;
exports.createConnection=function(){
  MongoClient.connect("mongodb://prashanthramkumar:prk8754254818@ds151202.mlab.com:51202/projector").then(function(client){
  console.log("connected to db");
  exports.database = client.db("projector");
});
}
