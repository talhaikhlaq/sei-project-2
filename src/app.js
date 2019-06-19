import React from 'react'
import ReactDOM from 'react-dom'

import Phrases from './components/Phrases'


class App extends React.Component {

  constructor(){
    super()

    this.state = {}
  }


  render(){
    return(
      <Phrases />
    )
  }

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
