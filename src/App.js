import React, { Component } from 'react'
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.min.css'

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
