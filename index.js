const express = require('express');
const app = express();
const static_middleware = require('./static_middleware');
const api = require('./api');

app.use(static_middleware("view"));

app.use('/api', api);

app.use((req, res, next) => {
    // 404 handler
    res.send("404 Page not found");
})

app.use((err, req, res, next) => {
    // error handler
    res.send("Some error occured "+err);
})

app.listen(8080, () => {
    console.log("server started at 8080");
})