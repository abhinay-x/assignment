import clsx from 'clsx';
import { Bell, Edit, MoreVertical } from 'lucide-react';

export type InvoiceStatus =
  | 'Update status'
  | 'Unpaid'
  | 'Paid'
  | 'Overdue'
  | 'Draft'
  | 'Partial paid';

interface InvoiceListItemProps {
  clientName: string;
  invoiceId: string;
  amount: string;
  date: string;
  status: InvoiceStatus;
}

const statusStyles: Record<InvoiceStatus, string> = {
  'Update status': 'bg-purple-600 text-white',
  Unpaid: 'bg-gray-200 text-gray-800',
  Paid: 'bg-green-100 text-green-800',
  Overdue: 'bg-red-100 text-red-800',
  Draft: 'bg-gray-100 text-gray-600 border border-gray-300',
  'Partial paid': 'bg-yellow-100 text-yellow-800',
};

export default function InvoiceListItem({ clientName, invoiceId, amount, date, status }: InvoiceListItemProps) {
  const getIcon = () => {
    switch (status) {
      case 'Overdue':
        return <Bell size={16} className="ml-2 text-red-600" />;
      case 'Draft':
        return <Edit size={16} className="ml-2 text-gray-600" />;
      case 'Update status':
        return <MoreVertical size={16} className="ml-2 text-white" />;
      default:
        return null;
    }
  };

  return (
    <div className="flex items-center justify-between rounded-2xl bg-white p-4 shadow-sm">
      <div>
        <h4 className="font-bold text-gray-900">{clientName}</h4>
        <p className="text-sm text-gray-500">{`#${invoiceId} | ${amount}`}</p>
        <p className="text-xs text-gray-400">{date}</p>
      </div>
      <button className={clsx('flex items-center rounded-full px-4 py-2 text-sm font-semibold', statusStyles[status])}>
        {status}
        {getIcon()}
      </button>
    </div>
  );
}