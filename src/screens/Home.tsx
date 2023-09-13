import React, {useEffect, useState} from 'react';
import {View, StatusBar, Image} from 'react-native';
import {
  fetchLocations,
  fetchWeatherForecast,
  WeatherParams,
} from '../api/weather';
import {storeData} from '../utils/asyncStorage';
import ForecastSection from '../components/ForecastSection';
import DailyForecast from '../components/DailyForecastSection';
import {defaultCity} from '../constants';
import SearchSections from '../components/SearchSections';
import {styles} from '../styles/HomeStyle';
import {Location, WeatherData} from '../types/HomeTypes';
import {SafeAreaView} from 'react-native-safe-area-context';
const Home = () => {
  const [search, setSearch] = useState<boolean>(false);
  const [locations, setLocations] = useState<Location[]>([]);
  const [weather, setWeather] = useState<WeatherData | {}>({});

  const handleLocation = (loc: Location) => {
    setSearch(false);
    setLocations([]);
    fetchWeatherForecast({
      cityName: loc.name,
      days: '7',
    }).then((data: WeatherData) => {
      setWeather(data);
      storeData('city', loc.name).then(r => r);
    });
  };

  const handleSearch = (searchText: string) => {
    if (searchText && searchText.length > 2) {
      fetchLocations({cityName: searchText} as WeatherParams).then(
        (data: Location[]) => {
          setLocations(data);
        },
      );
    }
  };

  useEffect(() => {
    if (defaultCity) {
      fetchWeatherForecast({
        cityName: defaultCity,
        days: '7',
      }).then((data: WeatherData) => {
        setWeather(data);
        storeData('city', defaultCity).then(r => r);
      });
    }
  }, []);

  const {location, current} = weather as WeatherData;

  return (
    <SafeAreaView style={{flex: 1}}>
      <View style={styles.container}>
        <Image
          blurRadius={70}
          source={require('../assets/images/bg.png')}
          style={styles.img}
        />
        <StatusBar translucent backgroundColor="transparent" />
        <SearchSections
          search={search}
          locations={locations}
          location={location}
          current={current}
          weather={weather}
          handleSearch={handleSearch}
          handleLocation={handleLocation}
          setSearch={setSearch}
        />
        <ForecastSection
          location={location}
          current={current}
          weather={weather}
        />
        <DailyForecast weather={weather} />
      </View>
    </SafeAreaView>
  );
};

export default Home;
