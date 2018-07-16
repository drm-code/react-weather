import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Container, Col, Row } from 'reactstrap'

import { getSummaries, setChips, getForecast } from './../../redux/actions/actions'
import { CityFilters, CityList, FiveDayForecast } from './../'

class AppContainer extends PureComponent {
  componentWillMount() {
    this.props.getSummaries(this.props.cities)
    this.props.getForecast(this.props.selectedCity)
  }

  render() {
    return (
      <Container>
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
    forecast: state.forecast
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSummaries: ids => dispatch(getSummaries(ids)),
    setChips: chips => dispatch(setChips(chips)),
    getForecast: city => dispatch(getForecast(city))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
