var React = require('react');
var PropTypes = React.PropTypes;
var Link = require('react-router').Link;
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');
var styles = require('../Styles');

function puke (object) {
  return <pre>{JSON.stringify(object, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  v = JSON.stringify(props, null, ' ');
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <div className="jumbotron col-sm-12 text-center">
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
      </div>
}

ConfirmBattle.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  playersInfo: PropTypes.array.isRequired,
  onInitiateBattle: PropTypes.func.isRequired
}

module.exports = ConfirmBattle;
