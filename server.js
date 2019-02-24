var express = require('express');
var app = express();
var port=process.env.PORT ||8585
app.use(express.static('public'));
app.get('/',function(req,res){
res.render("index");
});
app.listen(port,function () {
	console.log('started at port'+port);
	
})