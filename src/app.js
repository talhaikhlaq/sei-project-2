import React from 'react'
import ReactDOM from 'react-dom'
import axios from 'axios'
import './styles/style.scss'
import 'bulma'


// import Phrases from './components/Phrases'
// import PickLanguage from './components/PickLanguage'

const yandexKey = process.env.key


class App extends React.Component {

  constructor(){
    super()

    this.state = {
      data: [
        'Where is the Police?',
        'Thank you, but no thank you.',
        'Can you go away I am on holiday.',
        'Can I borrow your wifi?',
        'Which one is your spiciest dish?',
        'Dogs are better than Cats. Change my mind.',
        'That is a heavy bag of rubbish.',
        'I am chuffed to bits, like this cat right here.',
        'Can I have a Caramel Ice Latte and the Smoked Salmon Baguette?',
        'Blimey, that is a lot of ice cream.',
        'Your house is exquisite.',
        'What do you mean, there is no tap water?',
        'Vodafone is expensive in my country too.',
        'I want a burger with no bread, no tomatoes, no onions and no mayo.',
        'You are such an amazing human being.',
        'Hold my beer.',
        'It is not yet Christmas.',
        'The Zebra ran away as the Hunter went for a piss.'
      ],
      phrase: 'Where is the Police?',
      translated: '-',
      toTranslate: '',
      language: 'Pick a Language',
      countries: [],
      langCode: '',
      countryName: ''

    }

    this.handleChange = this.handleChange.bind(this)
  }

  randomPhrase(){
    const phrase = this.state.data[Math.floor(Math.random() * this.state.data.length)]
    this.setState({phrase: phrase})
  }

  translate(e){
    e.persist()
    axios.get('https://cors-anywhere.herokuapp.com/https://translate.yandex.net/api/v1.5/tr.json/translate', {
      params: {
        key: yandexKey,
        lang: `en-${e.target.value}`,
        text: this.state.phrase
      }
    })
      .then(res => this.setState({
        translated: res.data.text,
        language: e.target.textContent,
        langCode: e.target.value,
        countryName: e.target.dataset.name
      }))
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

  // handleClick(){
  //   return
  // }

  getCountriesData(){
    axios.get('https://restcountries.eu/rest/v2/all')
      .then(res => this.setState({ countries: res.data }))
      .catch(err => console.log(err))
  }


  componentDidMount(){
    console.log(this.state.countryName)
    this.getCountriesData()
    console.log(this.state.toTranslate)
  }

  findCountry() {
    console.log(this.state.countries)
    if (!this.state.langCode) return null
    return this.state.countries.find(country => country.name === this.state.countryName)
    // return this.state.countries.find(country => country.languages[0].iso639_1 === this.state.langCode)
  }

  render(){

    return(
      <main>
        <section className="hero is-medium">
          <div className="hero-body">
            <div className="container ">
              <h1 className="title has-text-centered is-size-1 has-text-light">
                Random Phrases Translator🌍
              </h1>
              <h2 className="subtitle has-text-centered is-size-3 has-text-light">
                Generate a phrase or write your own
              </h2>
            </div>
          </div>
        </section>
        <section>
          <div className="columns">
            <div className="column is-6">
              <div>
                <h2 className="has-text-dark has-text-centered is-size-4">
                  {this.state.phrase}
                </h2>
              </div>
            </div>
            <div className="column is-6">
              <div className="has-text-centered">
                <button className="button has-text-weight-bold has-text-grey"
                  onClick={() => {
                    this.randomPhrase()
                  }}>New Phrase</button>
              </div>
            </div>
          </div>

          {this.state.translated && this.state.language &&
            <div className="has-text-centered">
              <h1 className="has-text-link is-size-3">{this.state.translated}</h1>
              <h2 className="is-size-5">{this.state.language} </h2>
              <div className="emptyFlag">{this.state.langCode && <img className="flagImage" src={this.findCountry().flag} />}</div>
            </div>
          }

        </section>

        <div className="columns">
          <div className="column">
            <div className="container is-fluid">
              <textarea
                className="textarea is-primary is-medium "
                placeholder="Type Here"
                onChange={this.handleChange}
              >
              </textarea>
              <div className="has-text-centered">
                <button type="submit" className="button is-outlined" onClick={(e) =>{
                  this.handleSubmit(e)
                }}>Submit
                </button>
              </div>
            </div>
          </div>
        </div>
        <div>
        </div>


        <section>

          <div className="has-text-centered">
            <div>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='de' data-name="Germany">German</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='fr' data-name="France">French</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='es' data-name="Spain">Spanish</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='it' data-name="Italy">Italian</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='ko' data-name="Korea (Republic of)">Korean</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='zh' data-name="China">Chinese</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='ja' data-name="Japan">Japanese</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='ar' data-name="Saudi Arabia">Arabic</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='ur' data-name="Pakistan">Urdu</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='ru' data-name="Russian Federation">Russian</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='pl' data-name="Poland">Polish</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='da' data-name="Denmark">Danish</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='no' data-name="Norway">Norweigian</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='id' data-name="Indonesia">Indonesian</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='hi' data-name="India">Hindi</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='el' data-name="Greece">Greek</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='fa' data-name="Iran (Islamic Republic of)">Farsi</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='hu' data-name="Hungary">Hungarian</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='is' data-name="Iceland">Icelandic</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='nl' data-name="Netherlands">Dutch</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='th' data-name="Thailand">Thai</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='sv' data-name="Sweden">Swedish</button>
              <button className="button is-outlined" onClick={(e) => {
                this.translate(e)
              }} value='cs' data-name="Czech Republic">Czech</button>

            </div>
          </div>
        </section>

        <section className="hero">
          <div className="hero-header">
            <div className="container">
              <div className="content has-text-centered">
                <h5 className="has-text-info">Made at GA 💣 DT & TI</h5>
              </div>
            </div>
          </div>
        </section>
      </main>
    )
  }

}


ReactDOM.render(
  <App />,
  document.getElementById('root')
)
