import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import fonts from '../../constants/fonts';
import ProgressBar from './ProgressBar';

const getStatusStyle = (status) => {
  switch (status) {
    case 'Pending':
      return { bgColor: '#EF4444', textColor: '#FFFFFF' };
    case 'In Progress':
      return { bgColor: '#FACC15', textColor: '#FFFFFF' };
    case 'Completed':
      return { bgColor: '#4CAF50', textColor: '#FFFFFF' };
    default:
      return { bgColor: '#E5E7EB', textColor: '#FFFFFF' };
  }
};

const InspectionCard = ({ img, title, subTitle, status, progress }) => {
  const [fontsLoaded] = fonts();
  const { bgColor, textColor } = getStatusStyle(status);

  return (
    <TouchableOpacity style={styles.card}>
      <View style={styles.topRow}>
        <View style={styles.leftContent}>
          <Image source={img} style={styles.avatar} />
          <View style={styles.textSection}>
            <Text style={styles.title}>{title}</Text>
            <Text style={styles.subTitle}>{subTitle}</Text>
          </View>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: bgColor }]}>
          <Text style={[styles.statusText, { color: textColor }]}>{status}</Text>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <ProgressBar progress={progress} />
        <View style={styles.bottom}>
          <Text style={styles.progressLabel}>{Math.round(progress * 100)}% Complete</Text>
          <Text style={styles.dueLabel}>Due in 2 days</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  card: {
    width: '100%',
    padding: 16,
    marginBottom: 16,
    backgroundColor: '#FFFFFF',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'center',
    gap: 10,
    flex: 1,
  },
  avatar: {
    width: 40,
    height: 40,
    resizeMode: 'contain',
  },
  textSection: {
    flex: 1,
  },
  title: {
    fontFamily: 'manrope-semibold',
    fontSize: 16,
    color: '#111827',
  },
  subTitle: {
    fontFamily: 'manrope-regular',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  statusBadge: {
    textAlign: 'center',
    justifyContent: 'center',
    paddingHorizontal: 14,
    paddingVertical: 4,
    borderRadius: 50,
  },
  statusText: {
    fontFamily: 'manrope-regular',
    fontSize: 12,
    lineHeight: 16,
  },
  bottomRow: {
    marginTop: 5,
    width: 320,
    alignSelf: 'flex-end',
  },
  bottom: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 5,
  },
  progressLabel: {
    fontFamily: 'manrope-regular',
    fontSize: 12,
    color: '#4B5563',
  },
  dueLabel: {
    fontFamily: 'manrope-regular',
    fontSize: 12,
    color: '#FF6E40',
  },
});

export default InspectionCard;
