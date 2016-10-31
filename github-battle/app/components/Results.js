var React = require('react');
var Link = require('react-router').Link;
var Loading = require('./Loading');
var MainContainer = require('./MainContainer');
var PropTypes = React.PropTypes;
var styles = require('../styles');
var UserDetails = require('./UserDetails');
var UserDetailsWrapper = require('./UserDetailsWrapper');


function puke (obj) {
  return <pre>{JSON.stringify(obj, 2, ' ')}</pre>
}

function StartOver() {
  return (
    <div className="col-sm-12" style={ styles.space }>
      <Link to="/playerOne">
        <button type="button" className="btn btn-lg btn-danger">Start Over</button>
      </Link>
    </div>
  )
}

function Results (props) {
  console.log(props);
  // Tie?
  if (props.isLoading === true) {
    return (
      <Loading text="almost there" speed="200"/>
    )
  }
  if (props.scores[0] == props.scores[1]) {
    return (
      <MainContainer>
        <h1>It's a tie!</h1>
        <StartOver/>
      </MainContainer>
    )
  }
  var winningIndex = props.scores[0] > props.scores[1] ? 0 : 1;
  var losingIndex = winningIndex === 0 ? 1 : 0;
  return (
    <div className="jumbotron col-sm-12 text-center" style={styles.transparentBg}>
      <h1>Results</h1>
      <div className="col-sm-8 col-sm-offest-2">
        <UserDetailsWrapper header="Winner">
          <UserDetails score={props.scores[winningIndex]} info={props.playersInfo[winningIndex]}></UserDetails>
        </UserDetailsWrapper>
        <UserDetailsWrapper header="Loser">
          <UserDetails score={props.scores[losingIndex]} info={props.playersInfo[losingIndex]}></UserDetails>
        </UserDetailsWrapper>
      </div>
      <StartOver />
    </div>
  )
}

Results.PropTypes = {
    isLoading: PropTypes.bool.isRequired,
    playersInfo: PropTypes.array.isRequired,
    scores: PropTypes.array.isRequired,
}

module.exports = Results;
