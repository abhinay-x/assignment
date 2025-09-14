export type InvoiceStatus = 'Paid' | 'Pending' | 'Expired' | 'Draft' | 'Overdue';

export interface Invoice {
  id: string;
  clientName: string;
  amount: number;
  dueDate: string;
  status: InvoiceStatus;
  createdDate: string;
  description?: string;
}

export interface ChartData {
  month: string;
  income: number;
  trend: number;
}

export interface SummaryData {
  totalEarnings: number;
  paymentAwaited: number;
  paymentOverdue: number;
}

export interface User {
  name: string;
  avatar: string;
}

export type TimePeriod = 'Monthly' | 'Weekly' | 'Yearly';

export interface DropdownOption {
  label: string;
  value: string;
  color?: string;
}
