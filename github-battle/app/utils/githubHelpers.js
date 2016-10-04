var axios = require('axios');
var secData = require('./secrets.json');

var param = "?client_id=" + secData.id + "&client_secret=" + secData.secret;
var github_api_url = 'http://api.github.com/users/'

function getUserInfo (username) {
  return axios.get(github_api_url + username + param)
}

function getRepos (username) {
  // fetch username repos
  return axios.get(github_api_url + username + '/repos' + param + '')
}

function getTotsalStarts (starts) {
  // calculate all the starts that the user has
}

function getPlayersData (player) {
}

function calculateScores (players) {
}

var helpers = {
  getPlayersInfo: function (players) {
    // axios takes array of promises
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    })).then(function (info) { //info = two responses
      return info.map(function (user) {
        return user.data;
      })
    }).catch(function (err) {
      console.warn('Error in getPlayersInfo', err);
    })
  },
  battle: function (players) {
    
  }
};

module.exports = helpers;
