import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { AnimatedCircularProgress } from 'react-native-circular-progress';
import MapView from 'react-native-maps';
import { homeScreen } from '../../constants/home_screen';
import { router } from 'expo-router';

const initialRegion = {
  latitude: 28.1041,
  longitude: 76.5742,
  latitudeDelta: 0.01,
  longitudeDelta: 0.01,
};

const ComplianceOverview = () => {
  const handleRouting = () => {
    router.push('/comingsoon');
  };

  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.bar} />
        <Text style={styles.header}>Compliance Overview</Text>
      </View>

      <View style={styles.progressRow}>
        {homeScreen.data.map((item, index) => (
          <View key={index} style={styles.circleItem}>
            <AnimatedCircularProgress
              size={60}
              width={8}
              fill={item.fill}
              tintColor={item.tintColor}
              backgroundColor="#E5E7EB"
            >
              {() => <Text style={styles.fillText}>{`${item.fill}%`}</Text>}
            </AnimatedCircularProgress>
            <Text style={styles.circleLabel}>{item.title}</Text>
          </View>
        ))}
      </View>

      <View style={styles.mapContainer}>
        <MapView style={styles.map} initialRegion={initialRegion} showsUserLocation={false} />
        <TouchableOpacity style={styles.button} onPress={handleRouting}>
          <Text style={styles.buttonText}>View Full Map</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginHorizontal: 22,
    marginTop: 32,
    backgroundColor: '#fff',
  },
  top: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    marginBottom: 12,
  },
  bar: {
    width: 4,
    height: 24,
    backgroundColor: '#CABDFF',
    borderRadius: 2,
  },
  header: {
    fontSize: 18,
    lineHeight: 22,
    fontFamily: 'manrope-semibold',
    color: '#111827',
  },
  progressRow: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginBottom: 16,
  },
  circleItem: {
    alignItems: 'center',
  },
  fillText: {
    fontSize: 12,
    fontFamily: 'manrope-regular',
    color: '#000',
  },
  circleLabel: {
    marginTop: 6,
    fontSize: 12,
    fontFamily: 'manrope-regular',
    color: '#4B5563',
  },
  mapContainer: {
    borderRadius: 12,
    overflow: 'hidden',
    marginTop: 8,
  },
  map: {
    width: '100%',
    height: 150,
  },
  button: {
    backgroundColor: '#F9FAFB',
    paddingVertical: 10,
    alignItems: 'center',
  },
  buttonText: {
    color: '#3B82F6',
    fontSize: 14,
    fontWeight: '600',
  },
});

export default ComplianceOverview;
