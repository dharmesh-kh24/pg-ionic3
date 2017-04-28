var express = require('express');
var app = express();
app.use('/', express.static('./www'));
// app.get("/", function(req, res) {
//     res.json("aaaaaaaaa").send();
// });
app.set('port', process.env.PORT || 4200);
app.listen(app.get('port'), function() {
    console.log('Express server listening on port ' + app.get('port'));
});