import type { Invoice, ChartData, SummaryData, User } from '../types';

export const mockUser: User = {
  name: 'John Doe',
  avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=40&h=40&fit=crop&crop=face&auto=format'
};

export const mockSummaryData: SummaryData = {
  totalEarnings: 125500,
  paymentAwaited: 52000,
  paymentOverdue: 8500
};

export const mockChartData: ChartData[] = [
  { month: 'Jan', income: 45000, trend: 42000 },
  { month: 'Feb', income: 52000, trend: 48000 },
  { month: 'Mar', income: 38000, trend: 45000 },
  { month: 'Apr', income: 61000, trend: 52000 },
  { month: 'May', income: 55000, trend: 58000 },
  { month: 'Jun', income: 67000, trend: 61000 },
  { month: 'Jul', income: 72000, trend: 65000 },
  { month: 'Aug', income: 58000, trend: 68000 },
  { month: 'Sep', income: 63000, trend: 62000 },
  { month: 'Oct', income: 69000, trend: 66000 },
  { month: 'Nov', income: 74000, trend: 70000 },
  { month: 'Dec', income: 78000, trend: 75000 }
];

export const mockInvoices: Invoice[] = [
  {
    id: '1',
    clientName: 'Client Name',
    amount: 2500,
    dueDate: '2024-09-15',
    status: 'Pending',
    createdDate: '2024-08-15',
    description: 'Website development project'
  },
  {
    id: '2',
    clientName: 'Client Name',
    amount: 1800,
    dueDate: '2024-09-20',
    status: 'Paid',
    createdDate: '2024-08-20',
    description: 'Mobile app design'
  },
  {
    id: '3',
    clientName: 'Client Name',
    amount: 3200,
    dueDate: '2024-09-10',
    status: 'Overdue',
    createdDate: '2024-08-10',
    description: 'E-commerce platform'
  },
  {
    id: '4',
    clientName: 'Client Name',
    amount: 1500,
    dueDate: '2024-09-25',
    status: 'Draft',
    createdDate: '2024-09-01',
    description: 'Logo design project'
  },
  {
    id: '5',
    clientName: 'Client Name',
    amount: 4200,
    dueDate: '2024-09-30',
    status: 'Pending',
    createdDate: '2024-08-30',
    description: 'Full-stack development'
  },
  {
    id: '6',
    clientName: 'Client Name',
    amount: 2800,
    dueDate: '2024-10-05',
    status: 'Paid',
    createdDate: '2024-09-05',
    description: 'UI/UX consultation'
  },
  {
    id: '7',
    clientName: 'Client Name',
    amount: 1900,
    dueDate: '2024-09-08',
    status: 'Expired',
    createdDate: '2024-08-08',
    description: 'Brand identity package'
  },
  {
    id: '8',
    clientName: 'Client Name',
    amount: 3500,
    dueDate: '2024-10-10',
    status: 'Pending',
    createdDate: '2024-09-10',
    description: 'Database optimization'
  },
  {
    id: '9',
    clientName: 'Client Name',
    amount: 2200,
    dueDate: '2024-10-15',
    status: 'Draft',
    createdDate: '2024-09-15',
    description: 'API development'
  },
  {
    id: '10',
    clientName: 'Client Name',
    amount: 1600,
    dueDate: '2024-09-05',
    status: 'Overdue',
    createdDate: '2024-08-05',
    description: 'Content management system'
  }
];
