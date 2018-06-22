import express from './config/express';

const app = express();
const port = 3000;

// eslint-disable-next-line
console.log('Server is running at port 3000');

// module.exports = app.listen(port);
export default app.listen(port);

// const express = require('express');

// const app = new express();

// // Just to test our server is working
// app.get('/api', function(req, res) {
//   res.send({
//     version: '1.0.0'
//   });
// });

// module.exports = app;
