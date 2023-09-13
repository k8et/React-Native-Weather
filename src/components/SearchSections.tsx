import React, {FC} from 'react';
import {
  Dimensions,
  SafeAreaView,
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';
import {
  MagnifyingGlassIcon,
  MapPinIcon,
  XMarkIcon,
} from 'react-native-heroicons/mini';
import {Location} from '../types/HomeTypes';
import {SearchSectionsProps} from '../types/SearchSectionsProps';

const {width, height} = Dimensions.get('window');
const styles = StyleSheet.create({
  searchPos: {
    flexDirection: 'row',
    height: 50,
    marginTop: height * 0.05,
    marginHorizontal: width * 0.03,
    zIndex: 50,
  },
  search: {
    position: 'absolute',
    alignSelf: 'flex-end',
    right: 1,
    top: 3,
    display: 'flex',
    justifyContent: 'flex-start',
    borderRadius: 90,
  },
  searchText: {
    paddingLeft: width * 0.03,
    flex: 1,
    paddingVertical: height * 0.015,
    fontSize: width * 0.04,
    color: 'white',
    borderRadius: 90,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  buttonSearch: {
    borderRadius: 90,
    padding: width * 0.02,
    marginEnd: width * 0.015,
    backgroundColor: 'rgba(255, 255, 255, 0.2)',
  },
  locationContainer: {
    position: 'absolute',
    width: '100%',
    backgroundColor: 'white',
    top: height * 0.08,
    borderRadius: 20,
  },
  locationItem: {
    flexDirection: 'row',
    color: 'black',
    alignItems: 'center',
    paddingVertical: height * 0.03,
    paddingHorizontal: width * 0.02,
    marginBottom: 1,
  },
  locationBorder: {
    alignItems: 'center',
    flexDirection: 'row',
    borderBottomWidth: 2,
    paddingLeft: width * 0.02,
    borderBottomColor: 'gray',
  },
});
const SearchSections: FC<SearchSectionsProps> = ({
  search,
  locations,
  handleSearch,
  handleLocation,
  setSearch,
}) => {
  return (
    <View style={styles.searchPos}>
      {search && (
        <TextInput
          onChangeText={handleSearch}
          placeholder="Search city"
          placeholderTextColor="lightgray"
          style={styles.searchText}
        />
      )}
      <View style={styles.search}>
        <TouchableOpacity
          onPress={() => setSearch(!search)}
          style={styles.buttonSearch}>
          {search ? (
            <XMarkIcon size={25} color="white" />
          ) : (
            <MagnifyingGlassIcon size={25} color="white" />
          )}
        </TouchableOpacity>
      </View>
      {locations.length > 0 && search && (
        <View style={styles.locationContainer}>
          {locations.map((item: Location, index) => {
            const isLastItem = index === locations.length - 1;
            return (
              <TouchableOpacity
                key={index}
                onPress={() => handleLocation(item)}
                style={[
                  styles.locationBorder,
                  {borderBottomColor: !isLastItem ? 'gray' : 'transparent'},
                ]}>
                <MapPinIcon size={20} color="gray" />
                <Text style={styles.locationItem}>
                  {item?.name}, {item?.country}
                </Text>
              </TouchableOpacity>
            );
          })}
        </View>
      )}
    </View>
  );
};

export default SearchSections;
