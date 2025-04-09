import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  TextInput,
  Image,
  TouchableOpacity,
  useWindowDimensions,
} from 'react-native';
import Star from './Star';
import { Ionicons } from '@expo/vector-icons';

const TopHeader = () => {
  const { width } = useWindowDimensions();

  return (
    <View style={styles.container}>
      <View style={[styles.headerContainer, { width }]}>
        <View style={styles.starsContainer}>
          <Star size={50} style={{ position: 'absolute', top: '120%', left: '1%' }} />
          <Star size={30} style={{ position: 'absolute', top: '92%', right: '2%' }} />
          <Star size={25} style={{ position: 'absolute', top: '20%', left: '25%' }} />
        </View>

        <View style={[styles.profileRow, { width: width * 0.9 }]}>
          <Image source={require('../../assets/profile.png')} style={styles.profileImage} />
          <View style={styles.textContainer}>
            <Text style={styles.headText}>Welcome Back</Text>
            <Text style={styles.subText}>INSPECTOR JOHN DOE</Text>
          </View>
          <TouchableOpacity style={styles.bellIcon}>
            <Ionicons
              name="notifications-outline"
              size={28}
              color="#FFFFFF"
              style={{ zIndex: 2 }}
            />
            <View style={styles.notificationDot} />
          </TouchableOpacity>
        </View>

        <View style={[styles.searchBox, { width: width * 0.9 }]}>
          <View style={styles.searchInputContainer}>
            <TextInput
              placeholder="Search by Address or Permit No."
              placeholderTextColor="#999"
              style={styles.searchInput}
              numberOfLines={1}
              ellipsizeMode="tail"
            />
          </View>
          <TouchableOpacity style={styles.searchIcon}>
            <Ionicons name="search" size={20} color="#FFFFFF" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    height: 270,
    backgroundColor: '#FFFFFF',
    borderBottomLeftRadius: 52,
    borderBottomRightRadius: 52,
  },
  headerContainer: {
    paddingTop: 80,
    borderBottomLeftRadius: 52,
    borderBottomRightRadius: 52,
    height: 210,
    alignItems: 'center',
    backgroundColor: '#2563EB',
  },
  starsContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    zIndex: 0,
  },
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 22.5,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  headText: {
    fontSize: 20,
    fontFamily: 'manrope-semibold',
    color: '#fff',
  },
  subText: {
    fontSize: 12,
    fontFamily: 'manrope-meduim',
    color: '#d0d8ff',
    marginTop: 2,
  },
  bellIcon: {
    position: 'relative',
    padding: 8,
    backgroundColor: '#EAEAFF',
    opacity: 0.54,
    borderRadius: 50,
    height: 45,
    width: 45,
    zIndex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    backgroundColor: '#ED544E',
    borderRadius: 5,
    zIndex: 3,
  },
  searchBox: {
    flexDirection: 'row',
    minHeight: 57,
    backgroundColor: '#FBFBFB',
    borderRadius: 12,
    borderWidth: 1.5,
    borderColor: '#EAEAFF',
    alignItems: 'center',
    paddingHorizontal: 12,
    marginTop: 50,
  },
  searchInputContainer: {
    flex: 1,
    justifyContent: 'center',
  },
  searchInput: {
    fontSize: 16,
    color: '#333',
    paddingVertical: 0,
    paddingHorizontal: 8,
  },
  searchIcon: {
    backgroundColor: '#6759FF',
    padding: 10,
    borderRadius: 10,
    marginLeft: 8,
  },
});

export default TopHeader;
