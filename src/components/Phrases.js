import React from 'react'

class Phrases extends React.Component{
  constructor(){
    super()

    this.state = {
      data: [
        'Where is the Police?',
        'Thank you but no',
        'Can you go away',
        'What is your favourite type of beer?',
        'Where is the closest off license?',
        'Which one is your spiciest dish?',
        'Dogs or Cats?',
        'Lager or ale?',
        'That is a heavy bag of rubbish',
        'I am chuffed to bits like this cat right here',
        'Do you have Ice Latte?'
      ]
    }
  }

  randomPhrase(){
    const phrase = this.state.data[Math.floor(Math.random() * this.state.data.length)]
    return phrase
  }

  render(){
    console.log(this.randomPhrase())
    return(
      <h1>f</h1>
    )
  }




}

export default Phrases
