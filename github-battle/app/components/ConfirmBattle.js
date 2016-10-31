var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var Loading = require('./Loading');
var MainContainer = require('./MainContainer');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var styles = require('../styles');

function ConfirmBattle (props) {
  v = JSON.stringify(props, null, ' ');
  return props.isLoading === true
    ? <Loading speed="500" text="Wait one sec"/>
    : <MainContainer>
        <h1>Confirm Players</h1>
          <UserDetailsWrapper header="Player 1">
            <UserDetails info={props.playersInfo[0]} />
          </UserDetailsWrapper>
          <UserDetailsWrapper header="Player 2">
            <UserDetails info={props.playersInfo[1]} />
          </UserDetailsWrapper>
        <div className='col-sm-12'>
          <button type="button"
                  className='btn btn-lg btn-success'
                  style={styles.space}
                  onClick={props.onInitiateBattle}
            >
            Lets Do This!
          </button>
        </div>
        <div className='col-sm-12'>
          <Link to="/playerOne">
            <button type="button"
                    className='btn btn-lg btn-danger'
                    style={styles.space}>
              Reselect Players
            </button>
          </Link>
        </div>
      </ MainContainer>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
