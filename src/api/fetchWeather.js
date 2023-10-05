import axios from 'axios'

const URL = 'https://api.openweathermap.org/data/2.5/weather';

const API_KEY = '8e1f82ab6e1d0b1dcc69859c361a9c19';

export const fetchWeather = async (query) => {
    const {data} = await axios.get('https://api.openweathermap.org/data/2.5/weather',{
        params: {
            q: query,
            units: 'metric',
            APPID: API_KEY,
        }
    })

    return data
}