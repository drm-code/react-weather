import React, { PureComponent } from 'react'
import { connect } from 'react-redux'
import { Container, Col, Row } from 'reactstrap'

import { getSummaries, setChips } from './../../redux/actions/actions'
import { CityFilters, CityList } from './../'

class AppContainer extends PureComponent {
  componentWillMount() {
    this.props.getSummaries(this.props.cities)
  }

  render() {
    return (
      <Container>
        <Row>
          <Col sm={5}>
            <CityFilters {...this.props} />
            <CityList {...this.props} />
          </Col>
          <Col sm={7}></Col>
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
    chips: state.chips
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    getSummaries: ids => dispatch(getSummaries(ids)),
    setChips: chips => dispatch(setChips(chips))
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(AppContainer)
