import axios from 'axios';
import {apiKey} from '../constants';

export interface WeatherParams {
  cityName: string;
  days: string;
}

const forecastEndpoint = (params: WeatherParams) =>
  `https://api.weatherapi.com/v1/forecast.json?key=${apiKey}&q=${params.cityName}&days=${params.days}`;

const locationsEndpoint = (params: WeatherParams) =>
  `https://api.weatherapi.com/v1/search.json?key=${apiKey}&q=${params.cityName}`;

const apiCall = async (endpoint: string) => {
  const options = {
    method: 'GET',
    url: endpoint,
  };

  try {
    const response = await axios.request(options);
    return response.data;
  } catch (error) {
    console.log('error: ', error);
    return {};
  }
};

export const fetchWeatherForecast = (params: WeatherParams) => {
  let forecastUrl = forecastEndpoint(params);
  return apiCall(forecastUrl);
};

export const fetchLocations = (params: WeatherParams) => {
  let locationsUrl = locationsEndpoint(params);
  return apiCall(locationsUrl);
};
