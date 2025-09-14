import Header from './Header';
import CreateInvoiceCard from './CreateInvoiceCard';
import TimePeriodFilter from './TimePeriodFilter';
import SummaryCard from './SummaryCard';
import IncomeTrendChart from './IncomeTrendChart';
import InvoiceList from './InvoiceList';

export default function Dashboard() {
  const handleBackClick = () => {
    // Handle back navigation
    console.log('Back button clicked');
  };

  return (
    <div className="min-h-screen bg-[#F0F2F5] font-sans flex flex-col">
      <Header 
        title="Dashboard"
        userImageUrl="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
        onBackClick={handleBackClick}
      />
      <main className="m-4 rounded-3xl bg-white p-4 shadow-figma">
        <div className="flex flex-col md:flex-row gap-4">
          <div className="flex-1">
            <CreateInvoiceCard />
            <p className="mt-2 cursor-pointer text-center text-sm font-medium text-purple-600 hover:text-purple-700 transition-colors">
              Or Upload an existing invoice and set payment reminder
            </p>
          </div>
          <div className="w-full md:w-64">
            <TimePeriodFilter />
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          <SummaryCard title="Total Earnings" amount="$1,25,000" fullWidth className="sm:col-span-2 lg:col-span-1" />
          <SummaryCard title="Payment Awaited" amount="$25,000" />
          <SummaryCard title="Payment Overdue" amount="$25,000" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          <div className="lg:col-span-2">
            <IncomeTrendChart />
          </div>
          <div className="lg:col-span-1">
            <InvoiceList />
          </div>
        </div>

        <div className="py-4 text-center text-xs text-gray-400">
          <p>Sparkle ✨</p>
          <p>By Intellect Designs</p>
        </div>
      </main>
    </div>
  );
}