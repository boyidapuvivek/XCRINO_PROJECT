import React from 'react';
import { View, Text, StyleSheet, ScrollView, TouchableOpacity, Image } from 'react-native';
import { homeScreen } from '../../constants/home_screen';
import fonts from '../../constants/fonts';
import { Images } from '../../constants/images';
import { router } from 'expo-router';

const RecentReports = () => {
  const reports = homeScreen.recentReportsData;
  const fontsLoaded = fonts.fontsLoaded;
  const handelRouting = () => {
    router.push('/comingsoon');
  };
  return (
    <View style={styles.container}>
      <View style={styles.top}>
        <View style={styles.titleContainer}>
          <View style={styles.bar} />
          <Text style={styles.title}>Recent Reports</Text>
        </View>
        <TouchableOpacity style={styles.button} onPress={handelRouting}>
          <Text style={styles.text}>See All {'>'}</Text>
        </TouchableOpacity>
      </View>

      <ScrollView horizontal showsHorizontalScrollIndicator={false}>
        {reports.map((report, index) => (
          <TouchableOpacity key={index} style={styles.card} onPress={handelRouting}>
            <View style={styles.statusRow}>
              <Image source={report.img} style={styles.img} />
              <View style={[styles.statusBadge, { backgroundColor: report.color }]}>
                <Text style={[styles.statusText, { color: report.textColor }]}>
                  {report.status}
                </Text>
              </View>
            </View>
            <Text style={styles.reportTitle}>{report.title}</Text>
            <View style={styles.dateRow}>
              <Image source={Images.icons.clock} style={{ height: 16, width: 16 }} />
              <Text style={styles.dateText}>{report.date}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginVertical: 16,
    paddingHorizontal: 22,
  },
  top: {
    display: 'flex',
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  bar: {
    width: 4,
    height: 24,
    backgroundColor: '#CABDFF',
    borderRadius: 2,
  },
  titleContainer: {
    height: 36,
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  title: {
    fontFamily: 'manrope-semibold',
    fontSize: 18,
    lineHeight: 22,
    color: '#172B4D',
  },
  button: {
    height: 36,
    width: 82,
    justifyContent: 'center',
    alignItems: 'center',
    borderWidth: 1.5,
    borderColor: '#EFEFEF',
    borderRadius: 100,
  },
  text: {
    fontSize: 12,
    fontFamily: 'monrope-semibold',
    color: '#6F767E',
  },
  card: {
    width: 200,
    height: 120,
    marginRight: 12,
    padding: 12,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  statusRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    height: 24,
    width: 24,
  },
  statusBadge: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingHorizontal: 8,
    paddingVertical: 2,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 12,
    fontFamily: 'manrope-regular',
    lineHeight: 12,
  },
  reportTitle: {
    fontSize: 16,
    fontFamily: 'manrope-regular',
    color: '#111827',
    marginTop: 8,
    marginBottom: 8,
  },
  dateRow: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 4,
  },
  dateText: {
    fontSize: 14,
    fontFamily: 'manrope-regular',
    color: '#6B7280',
  },
});

export default RecentReports;
