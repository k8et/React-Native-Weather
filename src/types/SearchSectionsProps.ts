import {CurrentWeather, Location, WeatherData} from './HomeTypes';

export interface SearchSectionsProps {
  search: boolean;
  locations: Location[];
  location: Location;
  current: CurrentWeather;
  weather: WeatherData | {};
  handleSearch: (searchText: string) => void;
  handleLocation: (loc: Location) => void;
  setSearch: React.Dispatch<React.SetStateAction<boolean>>;
}
