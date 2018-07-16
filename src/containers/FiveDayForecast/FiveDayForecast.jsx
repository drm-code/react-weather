import React, { PureComponent } from 'react'
import uuidv1 from 'uuid/v1'
import { Col, Row } from 'reactstrap'
import moment from 'moment'

const styles = {
  metric: {
    fontSize: 18,
    position: 'relative',
    top: -20
  }
}

class FiveDayForecast extends PureComponent {
  render() {
    const { forecast } = this.props

    return (
      <Col>
        {(forecast.coord &&
          <Row>
            <Col
              className="p-0"
              sm={12}
            >
              <p className="h2">{forecast.name}</p>
            </Col>
            <Col
              className="p-0"
              sm={12}
            >
              <img
                src={`https://api.mapbox.com/styles/v1/mapbox/streets-v9/static/pin-l-star+f40000(${forecast.coord.lon},${forecast.coord.lat})/${forecast.coord.lon},${forecast.coord.lat},12,0/1000x500?access_token=pk.eyJ1IjoiZHJtbWFwIiwiYSI6ImNqanAwbm5odjA3MDUzcXJtMXYzeDlja2wifQ.YhkNz1Gq1UWtekhtSuTmLA`}
                alt="Map"
                className="img-fluid"
              />
            </Col>
            <Col
              className="d-flex justify-content-between p-0 mt-4"
              sm={12}
            >
              {forecast.fiveDayForecast.length > 0 && forecast.fiveDayForecast.map((day) => (
                <Col
                  className="d-flex flex-column align-items-center"
                  key={uuidv1()}
                >
                  <p className="mb-0">{moment(day.dt_txt).format("dddd")}</p>
                  <img
                    src={`${process.env.REACT_APP_ICONS_URL}/${day.weather[0].icon}.png`}
                    alt="Condition"
                  />
                  <p className="h1 d-inline position-relative">
                    {Math.round(day.main.temp)}
                    <span style={styles.metric}>°C</span>
                  </p>
                </Col>
              ))}
            </Col>
          </Row>) || (
            <p className="h2">Loading data ...</p>
          )
        }
      </Col>
    )
  }
}
// pk.eyJ1IjoiZHJtbWFwIiwiYSI6ImNqanAwbm5odjA3MDUzcXJtMXYzeDlja2wifQ.YhkNz1Gq1UWtekhtSuTmLA
export default FiveDayForecast
