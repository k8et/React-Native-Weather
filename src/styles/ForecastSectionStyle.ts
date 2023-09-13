import {StyleSheet} from 'react-native';
import {height, width} from '../constants';

export const styles = StyleSheet.create({
  container: {
    paddingVertical: height * 0.08,
    flexDirection: 'column',
    gap: height * 0.03,
    justifyContent: 'space-around',
    marginBottom: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    gap: 3,
    fontSize: width * 0.04,
  },
  locationName: {
    color: 'white',
    textAlign: 'center',
    fontSize: width * 0.06,
    fontWeight: 'bold',
  },
  locationCountry: {
    color: 'gray',
    fontSize: width * 0.048,
    fontWeight: 'bold',
  },
  weatherIcon: {
    flexDirection: 'row',
    justifyContent: 'center',
  },
  iconImage: {
    width: width * 0.28,
    height: width * 0.28,
  },
  temperature: {
    marginLeft: width * 0.01,
    alignItems: 'center',
  },
  temperatureText: {
    color: 'white',
    fontSize: width * 0.12,
    fontWeight: 'bold',
  },
  conditionText: {
    color: 'white',
    fontSize: width * 0.05,
    textAlign: 'center',
  },
  statContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginHorizontal: width * 0.04,
  },
  statItem: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 3,
    marginRight: width * 0.04,
  },
  statImage: {
    width: width * 0.06,
    height: width * 0.06,
  },
  statText: {
    color: 'white',
    fontSize: width * 0.04,
    fontWeight: 'bold',
  },
});
