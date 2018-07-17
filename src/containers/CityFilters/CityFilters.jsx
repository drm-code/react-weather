import React, { PureComponent } from 'react'
import Chips from 'react-chips'
import {
  Col, Form, FormGroup, CustomInput,
  Input, Row, Button, Popover, PopoverBody
} from 'reactstrap'

import suggestions from './../../mock/cities.json'

class CityFilters extends PureComponent {
  state = {
    popover: false
  }

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

  onClick = (event) => {
    this.props.setFilterType(event.target.value)
    if (event.target.value === 'name') {
      this.props.getSummaries(this.props.cities)
    }
  }

  onInput = (event, key) => {
    if (event.target.value !== '') {
      this.props.setTemp(parseInt(event.target.value, 0), key)
    }
  }

  filterByTemp = () => {
    this.setState({ popover: this.checkTemperature() })
    if (!this.checkTemperature()) {
      this.props.filterByTemp(this.props.temperature)
    }
  }

  checkTemperature = () => {
    const { temperature } = this.props

    return temperature.min > temperature.max
  }

  toggle = () => {
    this.setState({ popover: false })
  }

  render() {
    const { chips, filterType, temperature } = this.props
    const {
      onChange, onClick, onInput, filterByTemp,
      checkTemperature, toggle
    } = this
    const { popover } = this.state

    return (
      <Col>
        <Form
          inline
          className="mb-2"
        >
          <FormGroup className="mr-5">
            <CustomInput
              defaultChecked={filterType === 'name'}
              value="name"
              id="name"
              type="radio"
              name="filterType"
              label="Filter by city name"
              onClick={(event) => onClick(event)}
            />
          </FormGroup>
          <FormGroup>
            <CustomInput
              defaultChecked={filterType === 'temp'}
              value="temp"
              id="temp"
              type="radio"
              name="filterType"
              label="Filter by temperature"
              onClick={(event) => onClick(event)}
            />
          </FormGroup>
        </Form>
        {(filterType === 'name' &&
          <Chips
            value={chips}
            onChange={onChange}
            suggestions={suggestions.map(s => s.city)}
          />) || (
            <Form>
              <FormGroup>
                <Row>
                  <Col sm={3}>
                    <Input
                      id="min"
                      invalid={checkTemperature()}
                      defaultValue={temperature.min}
                      placeholder="Min."
                      type="number"
                      onInput={event => onInput(event, 'min')}
                    />
                    <Popover
                      placement="bottom"
                      isOpen={popover}
                      target="min"
                      toggle={toggle}
                    >
                      <PopoverBody>Min. Temperature can't be greater than Max. Temperature</PopoverBody>
                    </Popover>
                  </Col>
                  <Col sm={3}>
                    <Input
                      id="max"
                      invalid={checkTemperature()}
                      defaultValue={temperature.max}
                      placeholder="Max."
                      type="number"
                      onInput={event => onInput(event, 'max')}
                    />
                  </Col>
                  <Col sm={6}>
                    <Button
                      block
                      color="primary"
                      id="button-temp"
                      onClick={() => filterByTemp()}
                    >
                      Apply Filter
                    </Button>
                  </Col>
                </Row>
              </FormGroup>
            </Form>
          )
        }
      </Col>
    )
  }
}

export default CityFilters
