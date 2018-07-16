import React, { PureComponent } from 'react'
import { connect } from 'react-redux'

class AppContainer extends PureComponent {
  render() {
    return (
      <div>AppContainer</div>
    )
  }
}

export default connect(null)(AppContainer)
