var React = require('react');

function puke (object) {
  return <pre>{JSON.stringify(obj, null, ' ')}</pre>
}

function ConfirmBattle (props) {
  return props.isLoading === true
    ? <p> LOADING! </p>
    : <div> CONFIRM BATTLE!: </div>
}

module.exports = ConfirmBattle;
