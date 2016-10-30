var axios = require('axios');
var secData = require('./secrets.json');

var param = "?client_id=" + secData.github_id + "&client_secret=" + secData.github_secret;
var github_api_url = 'http://api.github.com/users/'

function getUserInfo (username) {
  return axios.get(github_api_url + username + param)
}

function getRepos (username) {
  // fetch username repos
  return axios.get(github_api_url + username + '/repos' + param + '&per_page=100');
}

function getTotalStars (repos) {
  // calculate all the starts that the user has
  return repos.data.reduce((prev, current) => {
    return prev + current.stargazers_count
  },0)
}

function getPlayersData (player) {
  return getRepos(player.login)
    .then(getTotalStars)
    .then((totalStars) => {
      return {
        followers: player.followers,
        totalStars: totalStars
      }
    })
}

function calculateScores (players) {
  return [
    players[0].followers * 3 + players[0].totalStars,
    players[1].followers * 3 + players[1].totalStars,
  ]
}

var helpers = {
  getPlayersInfo: (players) =>  {
    // axios takes array of promises
    return axios.all(players.map(function (username) {
      return getUserInfo(username)
    }))
    .then(function (info) { //info = two responses
      return info.map(function (user) {
        return user.data
      })
    })
    .catch(function (err) {
      console.warn('Error in getPlayersInfo', err)})
  },
  battle: (players) =>  {
    var playerOneData = getPlayersData(players[0]);
    var playerTwoData = getPlayersData(players[1]);
    return axios.all([playerOneData, playerTwoData])
      .then(calculateScores)
      .catch((err) => {console.warn('Error in getPlayersInfo: ', err)})
  }
};

module.exports = helpers;
