import React, { PureComponent } from 'react'
import Chips from 'react-chips'
import { Col } from 'reactstrap'

import suggestions from './../../mock/cities.json'

class CityFilters extends PureComponent {
  onChange = (chips) => {
    if (chips.length > 0) {
      const ids = chips.map(c => {
        return suggestions.filter(s => {
          return c === s.city
        })[0].id
      })
      this.props.getSummaries(ids)
    } else {
      this.props.getSummaries([])
    }
  }

  render() {
    const { chips } = this.props
    const { onChange } = this

    return (
      <Col>
        <Chips
          value={chips}
          onChange={onChange}
          suggestions={suggestions.map(s => s.city)}
        />
      </Col>
    )
  }
}

export default CityFilters
