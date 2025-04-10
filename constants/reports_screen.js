import { Images } from './images';
export const reportData = [
  {
    img: Images.reportscreen.commercial,
    label: 'Commercial',
    id: 'INS-2024-001',
    statusImg: Images.reportscreen.done,
    status: 'Passed',
    statusBgColor: '#DCFCE7',
    statusTextColor: '#166534',
    summary: 'Annual safety inspection completed. All systems comply with regulations.',
    date: 'Jan 15, 2024',
    boxText:
      'Building maintains excellent safety standards. Regular maintenance schedule followed.',
    actionText: 'Continue current maintenance schedule',
    images: [
      Images.attachmentImage[1],
      Images.attachmentImage[2],
      Images.attachmentImage[3],
      Images.attachmentImage[4],
    ],
  },
  {
    img: Images.reportscreen.industrial,
    label: 'Industrial',
    id: 'INS-2024-002',
    statusImg: Images.reportscreen.warn,
    status: 'Warning',
    statusBgColor: '#FEF9C3',
    statusTextColor: '#854D0E',
    summary: 'Minor violations found in storage area. Immediate attention required.',
    date: 'Jan 14, 2024',
    boxText: 'Storage area requires better organization. Some materials not properly labeled.',
    actionText: 'Reorganize storage area within 2 weeks',
    images: [Images.attachmentImage[5], Images.attachmentImage[6]],
  },
  {
    img: Images.reportscreen.residental,
    label: 'Residental',
    id: 'INS-2024-003',
    statusImg: Images.reportscreen.violation,
    status: 'Violation',
    statusBgColor: '#FEE2E2',
    statusTextColor: '#991B1B',
    summary: 'Multiple code violations found. Immediate action required.',
    date: 'Jan 13, 2024',
    boxText: 'Serious electrical code violations discovered. Requires immediate attention.',
    actionText: 'Schedule licensed electrician inspection within 48 hours',
    images: [
      Images.attachmentImage[2],
      Images.attachmentImage[5],
      Images.attachmentImage[1],
      Images.attachmentImage[3],
    ],
  },
  {
    img: Images.reportscreen.warehouse,
    label: 'Warehouse',
    id: 'INS-2024-004',
    statusImg: Images.reportscreen.pending,
    status: 'Pending',
    statusBgColor: '#F3F4F6',
    statusTextColor: '#1F2937',
    summary: 'Initial inspection scheduled. Awaiting completion.',
    date: 'Jan 12, 2024',
    boxText: 'Preliminary walkthrough completed. Full inspection pending.',
    actionText: 'Complete full inspection by end of week',
    images: [Images.attachmentImage[4], Images.attachmentImage[3]],
  },
  {
    img: Images.reportscreen.industrial,
    label: 'Industrial',
    id: 'INS-2024-005',
    statusImg: Images.reportscreen.warn,
    status: 'Warning',
    statusBgColor: '#FEF9C3',
    statusTextColor: '#854D0E',
    summary: 'Minor violations found in storage area. Immediate attention required.',
    date: 'Jan 11, 2024',
    boxText: 'Storage area requires better organization. Some materials not properly labeled.',
    actionText: 'Reorganize storage area within 2 weeks',
    images: [Images.attachmentImage[5], Images.attachmentImage[6]],
  },
  {
    img: Images.reportscreen.residental,
    label: 'Residental',
    id: 'INS-2024-006',
    statusImg: Images.reportscreen.violation,
    status: 'Violation',
    statusBgColor: '#FEE2E2',
    statusTextColor: '#991B1B',
    summary: 'Multiple code violations found. Immediate action required.',
    date: 'Jan 10, 2024',
    boxText: 'Serious electrical code violations discovered. Requires immediate attention.',
    actionText: 'Schedule licensed electrician inspection within 48 hours',
    images: [Images.attachmentImage[2], Images.attachmentImage[5], Images.attachmentImage[1]],
  },
];
