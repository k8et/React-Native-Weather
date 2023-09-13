import {CurrentWeather, Location} from './HomeTypes';

export interface ForecastSectionProps {
  location: Location;
  current: CurrentWeather;
  weather: any;
}
