import clsx from 'clsx';

interface SummaryCardProps {
  title: string;
  amount: string;
  fullWidth?: boolean;
  className?: string;
}

export default function SummaryCard({ title, amount, fullWidth = false, className }: SummaryCardProps) {
  return (
    <div
      className={clsx(
        'rounded-3xl bg-white p-4 shadow-sm',
        { 'col-span-2': fullWidth },
        className
      )}
    >
      <p className="text-sm text-gray-500">{title}</p>
      <p className="text-2xl font-bold text-gray-900">{amount}</p>
    </div>
  );
}