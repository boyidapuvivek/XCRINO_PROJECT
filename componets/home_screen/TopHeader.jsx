import React from 'react';
import { View, Text, StyleSheet, TextInput, Image, TouchableOpacity } from 'react-native';
import { LinearGradient } from 'expo-linear-gradient';
import { Ionicons } from '@expo/vector-icons';

const TopHeader = () => {
  return (
    <View style={styles.container}>
      <View style={styles.headerContainer}>
        <View style={styles.profileRow}>
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

        <View style={styles.searchBox}>
          <TextInput
            placeholder="Search by Address or Permit No."
            placeholderTextColor="#999"
            style={styles.searchInput}
          />
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
  profileRow: {
    flexDirection: 'row',
    alignItems: 'center',
    minWidth: 350,
    height: 50,
  },
  profileImage: {
    width: 45,
    height: 45,
    borderRadius: 21,
    marginRight: 12,
  },
  textContainer: {
    flex: 1,
  },
  headText: {
    fontSize: 20,
    color: '#fff',
    fontWeight: 'bold',
  },
  subText: {
    fontSize: 12,
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
  },
  notificationDot: {
    position: 'absolute',
    top: 10,
    right: 10,
    width: 10,
    height: 10,
    backgroundColor: '#ED544E',
    borderRadius: 4,
    zIndex: 3,
  },
  searchBox: {
    flexDirection: 'row',
    minHeight: 57,
    width: 350,
    backgroundColor: '#FBFBFB',
    borderRadius: 12,
    alignItems: 'center',
    textAlign: 'center',
    paddingHorizontal: 12,
    marginTop: 50,
  },
  searchInput: {
    flex: 1,
    height: 44,
    fontSize: 16,
    color: '#333',
  },
  searchIcon: {
    backgroundColor: '#6759FF',
    padding: 10,
    borderRadius: 10,
  },
});

export default TopHeader;
