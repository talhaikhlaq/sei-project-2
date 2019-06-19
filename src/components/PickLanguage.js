import React from 'react'
import axios from 'axios'

const yandexKey = process.env.key

class PickLanguage extends React.Component{
  constructor(){
    super()

    this.state = {}

  }

  componentDidMount() {
    this.getLanguages()
  }

  getLanguages(){
    axios.get('https://translate.yandex.net/api/v1.5/tr.json/getLangs', {
      params: {
        key: yandexKey,
        ui: 'de'
      }
    })
      .then(res => console.log(res.data))
      .catch(err => console.log(err))
  }

  render() {
    return (
      <section>
        
        <div>
          <button>French</button>
          <button>German</button>
          <button>Spanish</button>
          <button>Italian</button>
          <button>Korean</button>
          <button>Chinese</button>
          <button>Japanese</button>
          <button>Arabic</button>
          <button>Urdu</button>
          <button>Russian</button>
          <button>Polish</button>
          <button>Danish</button>
          <button>Norweigian</button>
        </div>

      </section>
    )
  }

}

export default PickLanguage
