var movies=require('./movieData');
var dbservice=require('../services/dbservice');
exports.getAllMovies= function(req,res){
var db= dbservice.database;
var moviesCollection = db.collection("Movies");

moviesCollection.find().toArray().then(function(result){
  var outputJSON = {
    "isSuccess" :true,
    "data": result
  }
return res.json(outputJSON);
});
};

exports.addNewMovie = function (req,res,next){
  var db = dbservice.database,
  movie = req.body,
  moviesCollection = db.collection("movies");

 moviesCollection.insert(movie).then(function(save_data){
   return res.json({
     "isSuccess": true
   });
 });

}
