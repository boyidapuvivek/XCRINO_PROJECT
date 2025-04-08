export const homeScreen = {
  cardBoxData: [
    {
      img: require('../assets/icons/inspection.png'),
      title: 'New Inspection',
      bgColor: '#EFF6FF',
      color: '#2563EB',
    },
    {
      img: require('../assets/icons/reports.png'),
      title: 'Reports',
      bgColor: '#FAF5FF',
      color: '#9333EA',
    },
    {
      img: require('../assets/icons/warning.png'),
      title: 'Violations',
      bgColor: '#FCF4EA',
      color: '#EA580C',
    },
    {
      img: require('../assets/icons/book.png'),
      title: 'Guidlines',
      bgColor: '#EFFCF3',
      color: '#16A34A',
    },
  ],
  inspectionData: [
    {
      img: require('../assets/icons/hospital.png'),
      title: 'City General Hospital',
      subTitle: '123 Healthcare Ave',
      status: 'Pending',
      progress: 0.75,
      timeLineStatus: 1,
    },
    {
      img: require('../assets/icons/hospital.png'),
      title: 'Apollo Hospital',
      subTitle: '123 Healthcare Ave',
      status: 'In Progress',
      progress: 0.45,
      timeLineStatus: 1,
    },
    {
      img: require('../assets/icons/hospital.png'),
      title: 'Kims Hospital',
      subTitle: '123 Healthcare Ave',
      status: 'Completed',
      progress: 1.0,
      timeLineStatus: 1,
    },
    {
      img: require('../assets/icons/hospital.png'),
      title: '7 Hills Hospital',
      subTitle: '123 Healthcare Ave',
      status: 'Pending',
      progress: 0.23,
      timeLineStatus: 1,
    },
  ],
  recentReportsData: [
    {
      title: 'Safety Inspection',
      date: 'Jan 15, 2024',
      status: 'Completed',
      img: require('../assets/icons/done.png'),
      color: '#DCFCE7',
      textColor: '#16A34A',
    },
    {
      title: 'Structure Review',
      date: 'Jan 14, 2024',
      status: 'Pending',
      img: require('../assets/icons/warn.png'),
      color: '#FFEDD5',
      textColor: '#F97316',
    },
    {
      title: 'Safety Inspection',
      date: 'Jan 15, 2024',
      status: 'Completed',
      img: require('../assets/icons/done.png'),
      color: '#DCFCE7',
      textColor: '#16A34A',
    },
    {
      title: 'Structure Review',
      date: 'Jan 14, 2024',
      status: 'Pending',
      img: require('../assets/icons/warn.png'),
      color: '#FFEDD5',
      textColor: '#EA580C',
    },
  ],
  notifications: [
    {
      id: 1,
      title: 'Fire Exit Blockage',
      location: 'Downtown Mall',
      time: '2 hours ago',
      priority: 'Critical',
    },
    {
      id: 2,
      title: 'Maintenance Required',
      location: 'East Wing',
      time: '5 hours ago',
      priority: 'High',
    },
    {
      id: 3,
      title: 'Fire Exit Blockage',
      location: 'Downtown Mall',
      time: '2 hours ago',
      priority: 'Critical',
    },
    {
      id: 4,
      title: 'Maintenance Required',
      location: 'East Wing',
      time: '5 hours ago',
      priority: 'High',
    },
  ],
  data: [
    { title: 'Fire Safety', fill: 85, tintColor: '#EF4444' },
    { title: 'Zoning', fill: 92, tintColor: '#3B82F6' },
    { title: 'Environmental', fill: 78, tintColor: '#22C55E' },
  ],
};
