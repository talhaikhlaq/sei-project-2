import React from 'react'
import axios from 'axios'


// const yandexKey = process.env.key

class PickLanguage extends React.Component{
  constructor(){
    super()

    this.state = {
      data: [],
      translated: ''
    }

  }

  // componentDidMount() {
  //   this.getLanguages()
  // }

  // getLanguages(){
  //   axios.get('https://translate.yandex.net/api/v1.5/tr.json/getLangs', {
  //     params: {
  //       key: yandexKey,
  //       ui: 'en'
  //     }
  //   })
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }

  // translate(e){
  //   axios.get('https://cors-anywhere.herokuapp.com/https://translate.yandex.net/api/v1.5/tr.json/translate', {
  //     params: {
  //       key: yandexKey,
  //       lang: `en-${e.target.value}`,
  //       text: 'Where is the Police?'
  //     }
  //   })
  //     .then(res => console.log(res.data))
  //     .catch(err => console.log(err))
  // }

  render() {

    return (
      <section>

        <div>
          <button onClick={(e) => {
            this.translate(e)
          }} value='de'>German</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='fr'>French</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='es'>Spanish</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='it'>Italian</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='ko'>Korean</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='zh'>Chinese</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='ja'>Japanese</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='ar'>Arabic</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='ur'>Urdu</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='ru'>Russian</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='pl'>Polish</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='da'>Danish</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='no'>Norweigian</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='id'>Indonesian</button>
          <button onClick={(e) => {
            this.translate(e)
          }} value='hi'>Hindi</button>

        </div>


        <div>
          <h1>{this.state.translated}</h1>
        </div>

      </section>
    )
  }

}

export default PickLanguage
