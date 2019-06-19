import React from 'react'

class Phrases extends React.Component{
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
      phrase: 'Where is the Police?'
    }

  }

  randomPhrase(){
    const phrase = this.state.data[Math.floor(Math.random() * this.state.data.length)]
    this.setState({phrase: phrase})
  }

  render(){
    return(
      <section>
        <h2>
          {this.state.phrase}
        </h2>

        <div>
          <button onClick={() => {
            this.randomPhrase()
          }}>New Phrase</button>
        </div>
        <hr/>
      </section>
    )
  }




}

export default Phrases
