import React, {FC} from 'react';
import {View, Text, Image, ScrollView} from 'react-native';
import {CalendarDaysIcon} from 'react-native-heroicons/mini';
import {weatherImages} from '../constants';
import {styles} from '../styles/DailyForecastSectionStyle';
import {DailyForecastProps} from '../types/DailyForecastProps';
const DailyForecast: FC<DailyForecastProps> = ({weather}) => {
  return (
    <View style={styles.container}>
      <View style={styles.headingContainer}>
        <CalendarDaysIcon size={22} color="white" />
        <Text style={styles.headingText}>Daily forecast</Text>
      </View>
      <ScrollView
        horizontal
        contentContainerStyle={styles.scrollView}
        showsHorizontalScrollIndicator={false}>
        {weather?.forecast?.forecastday?.map((item: any, index: any) => {
          const date = new Date(item.date);
          const options: any = {weekday: 'long'};
          let dayName = date.toLocaleDateString('en-US', options);
          dayName = dayName.split(',')[0];

          const dayBackground = {
            backgroundColor: 'rgba(255, 255, 255, 0.15)',
          };

          return (
            <View key={index} style={[styles.dayContainer, dayBackground]}>
              <Image
                source={
                  weatherImages[
                    (item?.day?.condition?.text ||
                      'other') as keyof typeof weatherImages
                  ]
                }
                style={styles.dayImage}
              />
              <Text style={styles.dayNameText}>{dayName}</Text>
              <Text style={styles.dayTempText}>
                {item?.day?.avgtemp_c}&#176;
              </Text>
            </View>
          );
        })}
      </ScrollView>
    </View>
  );
};

export default DailyForecast;
