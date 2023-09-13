import {StyleSheet} from 'react-native';
import {height, width} from '../constants';

export const styles = StyleSheet.create({
  container: {
    marginBottom: height * 0.01,
  },
  headingContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginHorizontal: width * 0.02,
    marginBottom: height * 0.01,
  },
  headingText: {
    color: 'white',
    fontSize: width * 0.04,
    marginLeft: width * 0.01,
  },
  scrollView: {
    paddingHorizontal: width * 0.04,
  },
  dayContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    width: width * 0.26,
    height: height * 0.15,
    paddingVertical: width * 0.02,
    marginRight: width * 0.025,
    borderRadius: width * 0.045,
  },
  dayImage: {
    width: width * 0.12,
    height: width * 0.12,
  },
  dayNameText: {
    color: 'white',
    fontSize: width * 0.04,
    marginTop: width * 0.01,
  },
  dayTempText: {
    color: 'white',
    fontSize: width * 0.05,
    fontWeight: 'bold',
  },
});
