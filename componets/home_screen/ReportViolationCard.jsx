import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import fonts from '../../constants/fonts';

const ReportVolationCard = ({ title, location, time, priority }) => {
  const fontsLoaded = fonts.fontsLoaded;
  return (
    <TouchableOpacity style={styles.container}>
      <Image
        source={require('../../assets/icons/violation.png')}
        style={{ height: 40, width: 40, marginRight: 10 }}
      />
      <View style={styles.content}>
        <Text style={styles.title}>{title}</Text>
        <View style={styles.locationContainer}>
          <Image
            source={require('../../assets/icons/ping.png')}
            style={{ height: 16, width: 16 }}
          />
          <Text style={styles.location}>{location}</Text>
        </View>
        <Text style={styles.time}>{time}</Text>
      </View>
      <View style={styles.status}>
        <Image source={require('../../assets/icons/arrow.png')} style={{ height: 20, width: 20 }} />
        <Text style={styles.text}>{priority}</Text>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    borderRadius: 8,
    padding: 16,
    marginBottom: 12,
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  content: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontFamily: 'monrope-regular',
    color: '#42526E',
    marginBottom: 2,
  },
  locationContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    textAlign: 'center',
    gap: 4,
  },
  location: {
    fontSize: 14,
    color: '#6B7280',
    marginBottom: 4,
  },
  time: {
    fontSize: 14,
    fontFamily: 'manrope-regular',
    color: '#6B7280',
    lineHeight: 20,
  },
  status: {
    alignItems: 'flex-end',
    gap: 35,
  },
  text: {
    fontSize: 14,
    fontFamily: 'manrope-regular',
    lineHeight: 20,
    color: '#EF4444',
    marginRight: 10,
  },
});

export default ReportVolationCard;
