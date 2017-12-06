import React from 'react'

class App extends React.Component {

  constructor () {
    super()
    this.state = {
      foo: ''
    }
  }

  onClick () {
    this.setState({foo: 'clicked'})
  }

  componentDidMount () {
    this.setState({
      foo: 'baz'
    })
  }

  componentWillUnmount () {
    alert('I knew Dan and Devon lied about hot reloading.')
  }

  render () {

    return (
      <div>
        <h2>Current state: {this.state.foo}</h2>
        <button onClick={this.onClick.bind(this)}>change state</button>
      </div>
    )
  }

}

export { App }