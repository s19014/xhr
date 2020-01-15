import React from 'react'

const Greeting = props => <h1>{props.type}</h1>

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <Greeting type='good' />
      </div>
    )
  }
  componentDidMount () {
    fetch('./messages.json')
      .then(res => res.json())
      .then(console.log)
  }
}

export default App
