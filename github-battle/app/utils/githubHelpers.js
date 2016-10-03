var axios = require('axios');

// var id = "nharsch";
var id = "";
// var sec = "0f35b5dd72160cf29a402680ba61eacb306f3b60";
var sec = "";
var param = "?client_id=" + id + "&client_secret=" + sec;
var github_api_url = 'http://agi.github.com/users/'

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
      return [{},{}];
    })
  }
};

module.exports = helpers;
