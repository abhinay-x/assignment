import type { InvoiceStatus } from '../types';

interface StatusBadgeProps {
  status: InvoiceStatus;
}

export default function StatusBadge({ status }: StatusBadgeProps) {
  const getStatusConfig = (status: InvoiceStatus) => {
    switch (status) {
      case 'Paid':
        return {
          bg: 'bg-success-100',
          text: 'text-success-700',
          label: 'Paid'
        };
      case 'Pending':
        return {
          bg: 'bg-primary-100',
          text: 'text-primary-700',
          label: 'Pending'
        };
      case 'Overdue':
        return {
          bg: 'bg-danger-100',
          text: 'text-danger-700',
          label: 'Overdue'
        };
      case 'Expired':
        return {
          bg: 'bg-danger-100',
          text: 'text-danger-700',
          label: 'Expired'
        };
      case 'Draft':
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-700',
          label: 'Draft'
        };
      default:
        return {
          bg: 'bg-gray-100',
          text: 'text-gray-700',
          label: status
        };
    }
  };

  const config = getStatusConfig(status);

  return (
    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${config.bg} ${config.text}`}>
      {config.label}
    </span>
  );
}
