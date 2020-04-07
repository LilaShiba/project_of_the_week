// import express
const express = require('express');
// call express function
const app = express();
// server listen
app.listen(4000, ()=> console.log('You are jamming on port 4000'))
// serve up public folder
app.use(express.static('public'))
// gps https://developer.mozilla.org/en-US/docs/Web/API/Navigator

// have sever handle json
app.use(express.json({limit: '1mb'}))
app.post('/api', (req, res) => {
  console.log(req.body);
  const data = req.body
  res.json({
    status:"Success",
    latitude: data.latitude,
    longitude: data.longitude
  });

});
