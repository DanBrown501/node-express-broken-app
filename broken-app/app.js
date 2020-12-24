const express = require('express');
let axios = require('axios');
const { info } = require('console');
var app = express();

app.use(express.json())

app.post('/', async function(req, res, next) {
  let test = []
  for (d of req.body.developers){
    try{
      let res = await axios.get(`https://api.github.com/users/${d}`)
      let out = ({bio: res.data.bio, name: res.data.name})
      test.push(out)
    }
    catch(err){
      next(err)
    }
  }
  return res.send(JSON.stringify(test));
});

app.listen(3000);