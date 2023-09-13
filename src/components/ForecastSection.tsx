import React, {FC} from 'react';
import {View, Text, Image} from 'react-native';
import {weatherImages} from '../constants';
import {ForecastSectionProps} from '../types/ForecastSectionProps';
import {styles} from '../styles/ForecastSectionStyle';

const ForecastSection: FC<ForecastSectionProps> = ({
  location,
  current,
  weather,
}) => {
  return (
    <View style={styles.container}>
      <View style={styles.locationContainer}>
        <Text style={styles.locationName}>{location?.name},</Text>
        <Text style={styles.locationCountry}>{location?.country}</Text>
      </View>

      <View style={styles.weatherIcon}>
        <Image
          source={
            weatherImages[
              (current?.condition?.text ||
                'other') as keyof typeof weatherImages
            ]
          }
          style={styles.iconImage}
        />
      </View>

      <View style={styles.temperature}>
        <Text style={styles.temperatureText}>{current?.temp_c}&#176;</Text>
        <Text style={styles.conditionText}>{current?.condition?.text}</Text>
      </View>

      <View style={styles.statContainer}>
        <View style={styles.statItem}>
          <Image
            source={require('../assets/icons/wind.png')}
            style={styles.statImage}
          />
          <Text style={styles.statText}>{current?.wind_kph}km</Text>
        </View>
        <View style={styles.statItem}>
          <Image
            source={require('../assets/icons/drop.png')}
            style={styles.statImage}
          />
          <Text style={styles.statText}>{current?.humidity}%</Text>
        </View>
        <View style={styles.statItem}>
          <Image
            source={require('../assets/icons/sun.png')}
            style={styles.statImage}
          />
          <Text style={styles.statText}>
            {weather?.forecast?.forecastday[0]?.astro?.sunrise}
          </Text>
        </View>
      </View>
    </View>
  );
};

export default ForecastSection;
