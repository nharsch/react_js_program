var React = require('react');
var MainContainer = require('./MainContainer');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;

var Home = React.createClass({
  render: function () {
    return (
      <MainContainer>
        <h1>Github Battle</h1>
        <p className='lead'>Some Fancy Motto</p>
        <Link to='/playerOne'>
          <button type="buttoon" className="btn btn-lg">
            Get Started
          </button>
        </Link>
      </MainContainer>
    )
  }
});

module.exports = Home;
