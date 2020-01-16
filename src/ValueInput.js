import React from 'react'

class ValueInput extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: this.props.value
    }
  }

  handleChange (e) {
    const v = e.target.value
    const newValue = v.replace(/[^0-9.]+/g, '')
    this.setState({ value: newValue })
    if (this.props.onChange) {
      this.props.onChange({
        target: this,
        value: newValue
      })
    }
  }

  UNSAFE_componentWillReceiveProps (nextProps) {
    this.setState({ value: nextProps.value })
  }

  render () {
    return (
      <div>
        <label>
          {this.props.title}: <br />
          <input
            type='text'
            value={this.state.value}
            onChange={e => this.handleChange(e)}
          />
        </label>
      </div>
    )
  }
}

export default ValueInput
