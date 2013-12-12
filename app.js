/**
 * Created by оо on 12.12.13.
 */
(function(){

    var app = require('express')(),
        fs = require("fs");

    app.get('/file/:filePath', function(request, response){
       switch (request.query.action){
           case 'wright':
               fs.writeFile(request.params.filePath, request.query.content, function(error){
                   response.end(error || "succes");
               })
               break;
           default:
               fs.readFile(request.params.filePath, function(error, fileContent){
                   response.end(fileContent);
               });
       }
    });
    app.listen(1337);

})();