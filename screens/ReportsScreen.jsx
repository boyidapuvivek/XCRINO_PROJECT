import React, { useState } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, ScrollView, Image } from 'react-native';
import Reports from '../componets/reports_screen/Reports';
import { router } from 'expo-router';
import { Images } from '../constants/images';
import ComingSoon from './ComingSoon';
import { reportData } from '../constants/reports_screen';

const ReportsScreen = () => {
  const [activeTab, setActiveTab] = useState('Reports');

  const handelRouting = () => {
    router.back('/homescreen');
  };

  return (
    <View style={styles.container}>
      <View style={styles.header}>
        <TouchableOpacity style={styles.back} onPress={handelRouting}>
          <Image source={Images.reportscreen.back} style={{ height: 23, width: 23 }} />
          <Text style={styles.title}>Reports & Document</Text>
        </TouchableOpacity>
        <View style={styles.iconGroup}>
          <TouchableOpacity>
            <Image source={Images.reportscreen.search} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
          <TouchableOpacity style={{ marginLeft: 12 }}>
            <Image source={Images.reportscreen.bell} style={{ height: 20, width: 20 }} />
          </TouchableOpacity>
        </View>
      </View>

      <View style={styles.tabs}>
        {['Reports', 'Documents'].map((tab) => (
          <TouchableOpacity
            key={tab}
            style={[styles.tab, activeTab === tab && styles.activeTab]}
            onPress={() => setActiveTab(tab)}
          >
            <Text style={[styles.tabText, activeTab === tab && styles.activeTabText]}>{tab}</Text>
          </TouchableOpacity>
        ))}
      </View>

      <ScrollView contentContainerStyle={styles.scrollContent} showsVerticalScrollIndicator={false}>
        {activeTab === 'Reports' ? (
          <>
            {reportData.map((report, index) => (
              <Reports key={index} {...report} />
            ))}
          </>
        ) : (
          <View style={styles.comingSoonContainer}>
            <ComingSoon />
          </View>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: '#fff', paddingTop: 48 },
  header: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    paddingHorizontal: 22,
    paddingTop: 20,
    marginBottom: 18,
  },
  back: {
    flexDirection: 'row',
    textAlign: 'center',
    alignItems: 'center',
    gap: 8,
  },
  title: {
    fontSize: 16,
    fontFamily: 'manrope-semibold',
    color: '#1F1F1F',
    lineHeight: 22,
  },
  iconGroup: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    borderBottomWidth: 1,
    borderColor: '#E5E7EB',
  },
  tab: {
    paddingVertical: 12,
    flex: 1,
    alignItems: 'center',
  },
  tabText: {
    color: '#6B7280',
    fontSize: 16,
    fontFamily: 'manrope-regular',
  },
  activeTab: {
    borderBottomWidth: 2,
    borderBottomColor: '#1A237E',
  },
  activeTabText: {
    color: '#1A237E',
  },
  scrollContent: {
    paddingHorizontal: 16,
    paddingBottom: 32,
    flexGrow: 1,
  },
  comingSoonContainer: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 100,
  },
});

export default ReportsScreen;
