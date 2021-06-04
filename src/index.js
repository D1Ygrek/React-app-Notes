import React from 'react';
import ReactDOM from 'react-dom';
import Head from './components/head'
import Main from './components/main'
const App = () =>{

    return(
      <div>
          <Head/>
          <Main/>
      </div>
    )

  
}
ReactDOM.render(<App/>,document.getElementById("root"))