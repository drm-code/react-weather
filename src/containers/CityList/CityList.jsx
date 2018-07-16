import React, { PureComponent } from 'react'
import { ListGroup, ListGroupItem, Col, Row } from 'reactstrap'
import uuidv1 from 'uuid/v1'

const styles = {
  list: {
    height: 472,
    overflowY: 'scroll'
  }
}

class CityList extends PureComponent {
  render() {
    const { summaries } = this.props

    return (
      <Col>
        <ListGroup style={styles.list}>
          {summaries.length > 0 && summaries.map((summ) => (
            <ListGroupItem
              key={uuidv1()}
            >
              <Col className="d-flex justify-content-between align-items-center">
                <p className="mb-0 h4 d-inline">{summ.name}</p>
                <Row className="d-flex flex-column align-items-center">
                  <img
                    src={`${process.env.REACT_APP_ICONS_URL}/${summ.icon}.png`}
                    alt={summ.condition}
                    title={summ.condition}
                  />
                  <small>{summ.temp} °C</small>
                </Row>
            </Col>
            </ListGroupItem>
          ))}
        </ListGroup>
      </Col>
    )
  }
}

export default CityList
