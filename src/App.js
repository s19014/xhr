import React from 'react'
import ZipInput from './ZipInput'

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {}
  }

  render () {
    return (
      <div>
        <ZipInput />
      </div>
    )
  }
  componentDidMount () {}
}
export default App
