"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app = express();
var port = 8000;
app.get('/test', function (req, res) {
    console.log(req);
    res.send({ hello: 'world!' });
});
app.post('/test', function (req, res) {
    res.send({ person: 'kyubum' });
});
app.listen(port, function () {
    console.log("Example app listening on port " + port);
});
//# sourceMappingURL=app.js.map