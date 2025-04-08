import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity, ScrollView } from 'react-native';
import fonts from '../../constants/fonts';
import { Images } from '../../constants/images';
import { router } from 'expo-router';

const Reports = ({
  img,
  label,
  id,
  statusImg,
  status,
  statusBgColor,
  statusTextColor,
  summary,
  date,
  boxText,
  actionText,
  images,
}) => {
  const fontLoader = fonts.fontLoader;
  const handleRouting = () => {
    router.push('/comingsoon');
  };
  return (
    <View style={styles.card}>
      <View style={styles.row}>
        <View style={styles.left}>
          <Image source={img} style={{ height: 20, width: 20 }} />
          <View>
            <Text style={styles.label}>{label}</Text>
            <Text styles={styles.id}>{id}</Text>
          </View>
        </View>
        <View style={[styles.status, { backgroundColor: statusBgColor }]}>
          <Image source={statusImg} style={{ height: 16, width: 16 }} />
          <Text style={[styles.statusText, { color: statusTextColor }]}>{status}</Text>
        </View>
      </View>

      <View style={styles.summaryContainer}>
        <Text style={styles.summary}>{summary}</Text>
      </View>

      <View style={styles.rowBetween}>
        <Text style={styles.date}>{date}</Text>
        <TouchableOpacity onPress={handleRouting}>
          <Text style={styles.details}>Details ▼</Text>
        </TouchableOpacity>
      </View>

      <Text style={styles.sectionTitle}>Inspector Notes</Text>
      <View style={styles.box}>
        <Text style={styles.boxText}>{boxText}</Text>
      </View>

      <Text style={styles.sectionTitle}>Attachments</Text>
      <View style={styles.images}>
        {images.map((img, idx) => (
          <Image key={idx} source={img} style={styles.image} />
        ))}
      </View>

      <Text style={styles.sectionTitle}>Recommended Actions</Text>
      <Text style={styles.action}>{actionText}</Text>

      <View style={styles.buttons}>
        <TouchableOpacity style={styles.primaryBtn} onPress={handleRouting}>
          <Image source={Images.reportscreen.download} style={{ height: 20, width: 20 }} />
          <Text style={styles.primaryText}>Download Report</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.secondaryBtn} onPress={handleRouting}>
          <Image source={Images.reportscreen.share} style={{ height: 20, width: 20 }} />
          <Text style={styles.secondaryText}>Share</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: '#fff',
    marginVertical: 16,
    padding: 16,
    borderRadius: 12,
    borderColor: '#E5E7EB',
    borderWidth: 1,
  },
  type: {
    fontSize: 13,
    color: '#6B7280',
    marginBottom: 4,
  },
  row: {
    flexDirection: 'row',
    height: 40,
    alignItems: 'center',
    justifyContent: 'space-between',
  },
  left: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
  },
  label: {
    fontWeight: 14,
    fontFamily: 'manrope-regular',
    color: '#4B5563',
  },
  id: {
    fontSize: 16,
    fontFamily: 'manrope-regular',
    color: '#1E293B',
  },
  status: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 2,
    paddingHorizontal: 10,
    paddingVertical: 4,
    borderRadius: 20,
  },
  statusText: {
    fontSize: 14,
    fontFamily: 'manrope-regular',
  },
  summaryContainer: {
    paddingHorizontal: 11,
    paddingVertical: 10,
  },
  summary: {
    color: '#4B5563',
    marginTop: 8,
    fontSize: 14,
    fontFamily: 'manrope-regular',
  },
  rowBetween: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginVertical: 12,
  },
  date: {
    color: '#6B7280',
    fontSize: 14,
    fontFamily: 'manrope-regular',
  },
  details: {
    color: '#2563EB',
    fontSize: 14,
    fontFamily: 'manrope-regular',
  },
  sectionTitle: {
    fontSize: 14,
    fontFamily: 'manrope-regular',
    marginTop: 14,
    marginBottom: 10,
  },
  box: {
    paddingHorizontal: 16,
    paddingVertical: 14,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 8,
  },
  boxText: {
    fontSize: 14,
    color: '#4B5563',
    fontFamily: 'manrope-regular',
  },
  images: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    gap: 8,
    marginTop: 8,
  },
  image: {
    width: '47%',
    height: 100,
    borderRadius: 8,
    marginBottom: 8,
  },
  action: {
    fontSize: 14,
    color: '#4B5563',
    marginBottom: 12,
  },
  buttons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  primaryBtn: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#2563EB',
    paddingVertical: 8,
    gap: 20,
    borderRadius: 8,
    minWidth: 240,
  },
  primaryText: {
    color: '#fff',
    fontWeight: '600',
  },
  secondaryBtn: {
    borderWidth: 1,
    borderColor: '#E5E7EB',
    flexDirection: 'row',
    paddingVertical: 10,
    gap: '10',
    paddingHorizontal: 16,
    minWidth: 120,
    borderRadius: 8,
  },
  secondaryText: {
    color: '#374151',
    fontWeight: '600',
  },
});

export default Reports;
