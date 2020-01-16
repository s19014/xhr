import React from 'react'

class TestForm extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: '',
      age: '',
      hobby: ''
    }
  }

  handleChange (event) {
    this.setState({
      name: event.target.name,
      age: event.target.age,
      hobby: event.target.hobby
    })
  }

  render () {
    return (
      <form
        onSubmit={(e, n, a, h) =>
          this.props.update(
            e,
            this.state.name,
            this.state.age,
            this.state.hobby
          )
        }
      >
        <div>
          <label>
            名前: <br />
            <input
              name=''
              //name='name'
              type='text'
              value={this.state.name}
              onChange={e => this.handleChange(e)}
            />
          </label>
        </div>
        <div>
          <label>
            年齢: <br />
            <input
              name=''
              //name='age'
              type='number'
              value={this.state.age}
              onChange={e => this.handleChange(e)}
            />
          </label>
        </div>
        <div>
          <label>
            趣味: <br />
            <input
              name=''
              //name='hobby'
              type='text'
              value={this.state.hobby}
              onChange={e => this.handleChange(e)}
            />
          </label>
        </div>
        <input type='submit' value='送信' />
      </form>
    )
  }
}

class App extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      name: 'クジラ',
      age: 22,
      hobby: '読書'
    }
  }

  handleSubmit (e, name, age, hobby) {
    e.preventDefault()
    this.setState({
      name: name,
      age: age,
      hobby: hobby
    })
  }

  render () {
    return (
      <div>
        <TestForm update={this.handleSubmit.bind(this)} />
      </div>
    )
  }
}
export default App
