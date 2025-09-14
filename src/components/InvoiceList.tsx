import InvoiceListItem, { type InvoiceStatus } from './InvoiceListItem';

const invoices: {
  clientName: string;
  invoiceId: string;
  amount: string;
  date: string;
  status: InvoiceStatus;
}[] = [
  { clientName: 'Client Name', invoiceId: '12345', amount: '$12,000', date: 'Due: 2024-05-15', status: 'Update status' },
  { clientName: 'Income Trend', invoiceId: '12345', amount: '$12,000', date: 'Due: 2024-05-15', status: 'Unpaid' },
  { clientName: 'Income Trend', invoiceId: '12345', amount: '$12,000', date: 'Due: 2024-05-15', status: 'Paid' },
  { clientName: 'Income Trend', invoiceId: '12345', amount: '$12,000', date: 'Due: 2024-05-15', status: 'Partial paid' },
  { clientName: 'Income Trend', invoiceId: '12345', amount: '$12,000', date: 'Due: 2024-05-15', status: 'Overdue' },
  { clientName: 'Income Trend', invoiceId: '12345', amount: '$12,000', date: 'Due: 2024-05-15', status: 'Draft' },
];

export default function InvoiceList() {
  return (
    <div className="space-y-4">
      <div className="flex items-center justify-between px-2">
        <h3 className="text-lg font-bold text-gray-900">Your Invoices</h3>
        {/* You can add a filter dropdown here if needed */}
      </div>
      {invoices.map((invoice, index) => (
        <InvoiceListItem key={index} {...invoice} />
      ))}
    </div>
  );
}