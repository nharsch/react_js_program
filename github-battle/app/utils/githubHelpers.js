var axios = require('axios');
var secData = require('./secrets.json');

var param = "?client_id=" + secData.id + "&client_secret=" + secData.secret;
var github_api_url = 'https://agi.github.com/users/'

function getUserInfo (username) {
  return axios.get(github_api_url + username + param)
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
  }
};

module.exports = helpers;
