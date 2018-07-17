import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Container, Col, Row } from 'reactstrap'

import {
  getSummaries, setChips, getForecast,
  setFilterType, setTemp, filterByTemp
} from './../../redux/actions/actions'
import { CityFilters, CityList, FiveDayForecast } from './../'

class AppContainer extends PureComponent {
  componentWillMount() {
    this.props.getSummaries(this.props.cities)
    this.props.getForecast(this.props.selectedCity)
  }

  render() {
    return (
      <Container className="mt-3">
        <Row>
          <Col sm={5}>
            <CityFilters {...this.props} />
            <CityList {...this.props} />
          </Col>
          <Col sm={7}>
            <FiveDayForecast {...this.props} />
          </Col>
        </Row>
      </Container>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    selectedCity: state.selectedCity,
    cities: state.cities,
    summaries: state.summaries,
    chips: state.chips,
    forecast: state.forecast,
    filterType: state.filterType,
    temperature: state.temperature,
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSummaries: ids => dispatch(getSummaries(ids)),
    setChips: chips => dispatch(setChips(chips)),
    getForecast: city => dispatch(getForecast(city)),
    setFilterType: filter => dispatch(setFilterType(filter)),
    setTemp: (value, key) => dispatch(setTemp(value, key)),
    filterByTemp: temperature => dispatch(filterByTemp(temperature)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
