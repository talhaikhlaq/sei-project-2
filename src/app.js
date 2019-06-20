import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import bulma from 'bulma'
// import Phrases from './components/Phrases'
// import PickLanguage from './components/PickLanguage'

const yandexKey = process.env.key


class App extends React.Component {

  constructor(){
    super()

    this.state = {
      data: [
        'Where is the Police?',
        'Thank you but no.',
        'Can you go away I am on holiday.',
        'Can I borrow your wifi?',
        'Which one is your spiciest dish?',
        'Dogs are better than Cats. Change my mind.',
        'What is the meaning of life?',
        'That is a heavy bag of rubbish.',
        'I am chuffed to bits, like this cat right here.',
        'Do you have Ice Latte?',
        'Blimey, that is a lot of ice cream.',
        'Your house is exquisite.',
        'What do you mean, there is no tap water?',
        'I bet you look good on the dance floor.',
        'Vodafone is expensive in my country too.',
        'I want a burger with no bread, no tomatoes, no onions and no mayo.',
        'You are such an amazing human being.',
        'What the flying fuck?',
        'Hold my beer.',
        'It is not yet Christmas.'
      ],
      phrase: 'Where is the Police?',
      translated: 'Wo ist die Polizei?',
      toTranslate: ''

    }

    this.handleChange = this.handleChange.bind(this)
  }

  randomPhrase(){
    const phrase = this.state.data[Math.floor(Math.random() * this.state.data.length)]
    this.setState({phrase: phrase})
  }

  translate(e){
    axios.get('https://cors-anywhere.herokuapp.com/https://translate.yandex.net/api/v1.5/tr.json/translate', {
      params: {
        key: yandexKey,
        lang: `en-${e.target.value}`,
        text: this.state.phrase
      }
    })
      .then(res => this.setState({translated: res.data.text}))
      .catch(err => console.log(err))
  }

  handleChange(e){
    const word = e.target.value
    this.setState({toTranslate: word})
  }

  handleSubmit(e){
    e.preventDefault()

    const newPhrase = this.state.toTranslate
    this.setState({phrase: newPhrase})
  }


  componentDidMount(){
    console.log(this.state.toTranslate)
  }

  render(){

    return(
      <main>
        <section className="hero is-warning">
          <div className="hero-body">
            <div className="container ">
              <h1 className="title has-text-centered is-size-1">
                Random Phrases Translator
              </h1>
              <h2 className="subtitle has-text-centered is-size-3">
                Generate a phrase or write your own
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className="columns">
            <div className="column is-6">
              <div>
                <h2 className="has-text-centered is-size-3">
                  {this.state.phrase}
                </h2>
              </div>
            </div>
            <div className="column is-6">
              <div className="has-text-centered">
                <button className="button"
                  onClick={() => {
                    this.randomPhrase()
                  }}>New Phrase</button>
              </div>
            </div>
          </div>
          <hr/>
          <div className="has-text-centered">
            <h1 className="is-size-1">{this.state.translated}</h1>
          </div>

        </section>

        <div>
          <textarea
            className="textarea"
            placeholder="type here"
            onChange={this.handleChange}
          ></textarea>
          <div className="has-text-centered">
            <button type="submit" className="button" onClick={(e) =>{
              this.handleSubmit(e)
            }}>Submit</button>
          </div>
          <hr/>
        </div>


        <section>

          <div className="has-text-centered">
            <div>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='de'>German</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='fr'>French</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='es'>Spanish</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='it'>Italian</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='ko'>Korean</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='zh'>Chinese</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='ja'>Japanese</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='ar'>Arabic</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='ur'>Urdu</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='ru'>Russian</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='pl'>Polish</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='da'>Danish</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='no'>Norweigian</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='id'>Indonesian</button>
              <button className="button" onClick={(e) => {
                this.translate(e)
              }} value='hi'>Hindi</button>

            </div>
          </div>
          <hr/>

        </section>

      </main>
    )
  }

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
