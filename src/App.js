import React from 'react'
import FormInput from './FormInput'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <FormInput />
      </div>
    )
  }
  componentDidMount () {}
}
export default App
