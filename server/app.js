require('dotenv').config();
const path = require('path');
const express = require('express');
const mongoose = require('mongoose');

//SETUP EXPRESS
const publicPath = path.join(__dirname, '..', 'client', 'public');
const PORT = process.env.PORT || 3010
const app = express();

app.use('/', express.static(publicPath));


var githubOAuth = require('github-oauth')({
  githubClient: process.env.CLIENT_ID,
  githubSecret: process.env.GITHUB_SECRET,
  baseURL: 'http://localhost:' + PORT,
  loginURI: '/auth/github',
  callbackURI: '/auth/github/callback'
})

app.get("/auth/github", function(req, res){
  console.log("started oauth");
  return githubOAuth.login(req, res);
});

app.get("/auth/github/callback", function(req, res){
  console.log("received callback");
  return githubOAuth.callback(req, res);
});

githubOAuth.on('error', function(err) {
  console.error('there was a login error', err)
})

githubOAuth.on('token', function(token, serverResponse) {
  console.log('HEEHEHEHEHEHHHEHEHE')
  serverResponse.end(JSON.stringify(token))
})

app.get('/test', (req,res) => {
  res.send('HELLO!');
})


app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
})