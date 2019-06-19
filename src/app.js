import React from 'react'
import ReactDOM from 'react-dom'
// import axios from 'axios'
import Phrases from './components/Phrases'
import PickLanguage from './components/PickLanguage'


class App extends React.Component {

  constructor(){
    super()

    this.state = {


    }
  }


  render(){
    return(
      <main>
        <Phrases />
        <PickLanguage />
      </main>
    )
  }

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
