import React from 'react';
import { View, TouchableOpacity, Text, Image, StyleSheet } from 'react-native';
import { Images } from '../../constants/images';

export default function CustomTabBar({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const label = descriptors[route.key].options.title || route.name;
        const isFocused = state.index === index;
        const iconName = route.name.toLowerCase();

        return (
          <TouchableOpacity
            key={route.key}
            onPress={() => navigation.navigate(route.name)}
            style={styles.tab}
          >
            {isFocused && <View style={styles.topBar} />}
            <Image
              source={Images.bottomnavicons[iconName]}
              style={[styles.icon, { tintColor: isFocused ? '#007AFF' : '#888' }]}
              resizeMode="contain"
            />
            <Text style={{ color: isFocused ? '#007AFF' : '#888', fontSize: 10 }}>{label}</Text>
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    height: 75,
    backgroundColor: '#fff',
  },
  tab: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  topBar: {
    height: 2,
    width: 48,
    backgroundColor: '#007AFF',
    borderRadius: 2,
    position: 'absolute',
    top: 0,
  },
  icon: {
    width: 24,
    height: 24,
    marginBottom: 4,
  },
});
