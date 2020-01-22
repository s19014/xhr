import React from 'react'
import FormInput from './FormInput'
import CustomForm from './CustomForm'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <CustomForm />
      </div>
    )
  }
  componentDidMount () {}
}
export default App
