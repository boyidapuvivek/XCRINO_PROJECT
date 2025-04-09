import React from 'react';
import { View, Text, StyleSheet, Image, TouchableOpacity } from 'react-native';
import { router } from 'expo-router';

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

const ProgressBar = ({ progress }) => {
  return (
    <View style={styles.progressContainer}>
      <View style={[styles.progressFill, { width: `${progress * 100}%` }]} />
    </View>
  );
};

const InspectionCard = ({ img, title, subTitle, status, progress }) => {
  const { bgColor, textColor } = getStatusStyle(status);
  const handleRouting = () => {
    router.push('/comingsoon');
  };

  return (
    <TouchableOpacity style={styles.card} onPress={handleRouting}>
      <View style={styles.topRow}>
        <View style={styles.leftContent}>
          <View style={styles.iconWrapper}>
            <Image source={img} style={styles.avatar} />
          </View>
          <View style={styles.textSection}>
            <Text style={styles.title} numberOfLines={1}>
              {title}
            </Text>
            <Text style={styles.subTitle} numberOfLines={1}>
              {subTitle}
            </Text>
          </View>
        </View>
        <View style={[styles.statusBadge, { backgroundColor: bgColor }]}>
          <Text style={[styles.statusText, { color: textColor }]}>{status}</Text>
        </View>
      </View>

      <View style={styles.bottomRow}>
        <ProgressBar progress={progress} />
        <View style={styles.bottomLabels}>
          <Text style={styles.progressLabel}>{Math.round(progress * 100)} % Complete</Text>
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
    borderRadius: 16,
    borderWidth: 1,
    borderColor: '#E5E7EB',
  },
  topRow: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    marginBottom: 14,
  },
  leftContent: {
    flexDirection: 'row',
    alignItems: 'flex-start',
    flex: 1,
  },
  iconWrapper: {
    width: 40,
    height: 40,
    backgroundColor: '#E0EDFF',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 10,
  },
  avatar: {
    width: 24,
    height: 24,
    resizeMode: 'contain',
  },
  textSection: {
    flex: 1,
  },
  title: {
    fontFamily: 'manrope-semibold',
    fontSize: 16,
    lineHeight: 20,
    color: '#111827',
  },
  subTitle: {
    fontFamily: 'manrope-regular',
    fontSize: 14,
    color: '#6B7280',
    marginTop: 2,
  },
  statusBadge: {
    paddingHorizontal: '4%',
    paddingVertical: '1%',
    borderRadius: 50,
  },
  statusText: {
    fontFamily: 'manrope-regular',
    fontSize: 10,
  },
  bottomRow: {
    marginTop: 16,
    gap: 6,
  },
  progressContainer: {
    height: 8,
    backgroundColor: '#E5E7EB',
    borderRadius: 8,
    overflow: 'hidden',
  },
  progressFill: {
    height: '100%',
    backgroundColor: '#4CAF50',
    borderRadius: 8,
  },
  bottomLabels: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 8,
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
