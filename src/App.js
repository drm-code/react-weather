import React, { Component } from 'react'
import { Provider } from 'react-redux'

import { AppContainer } from './containers'
import store from './redux/store'

class App extends Component {
  render() {
    return (
      <Provider store={store}>
        <AppContainer />
      </Provider>
    )
  }
}

export default App
