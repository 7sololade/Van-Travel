import React from 'react';
import ReactDOM from 'react-dom'
import App from './App';

function Render(){
  return(
    <div>
      <App/>
    </div>
  )
}

ReactDOM.render( <Render />, document.getElementById("root"))