import axios from 'axios'

class Weather {
  static getSummaries(ids) {
    const group = ids.map(i => ''+i)

    return axios.get(`${process.env.REACT_APP_API_URL}/group?id=${group}&units=metric&appid=${process.env.REACT_APP_API_SECRET}`)
  }

  static getForecast(id) {
    return axios.get(`${process.env.REACT_APP_API_URL}/forecast?id=${id}&units=metric&appid=${process.env.REACT_APP_API_SECRET}`)
  }
}

export default Weather
