import { useState } from 'react';
import { Calendar } from 'lucide-react';
import clsx from 'clsx';

type Period = '1M' | '3M' | '1Y' | 'Custom';

export default function TimePeriodFilter() {
  const [activePeriod, setActivePeriod] = useState<Period>('3M');
  const [showCustomPicker, setShowCustomPicker] = useState(false);

  const periods: { id: Period; label: string }[] = [
    { id: '1M', label: '1Month' },
    { id: '3M', label: '3Months' },
    { id: '1Y', label: '1Year' },
    { id: 'Custom', label: 'Custom' },
  ];

  return (
    <div className="w-full max-w-md mx-auto bg-white rounded-xl shadow-sm overflow-hidden">
      <div className="p-4">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 mb-3">
          <h3 className="text-sm font-semibold text-gray-700">Time Period</h3>
          <span className="text-xs text-gray-500">01 Jan 2023 - 01 Apr 2023</span>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-1 bg-gray-100 p-1 rounded-lg overflow-hidden">
          {periods.map((period) => (
            <button
              key={period.id}
              onClick={() => {
                setActivePeriod(period.id);
                if (period.id === 'Custom') {
                  setShowCustomPicker(!showCustomPicker);
                } else {
                  setShowCustomPicker(false);
                }
              }}
              className={clsx(
                'py-2 text-xs sm:text-sm font-medium rounded-md transition-colors whitespace-nowrap overflow-hidden text-ellipsis',
                activePeriod === period.id
                  ? 'bg-white text-blue-600 shadow-sm'
                  : 'text-gray-500 hover:bg-gray-200'
              )}
            >
              {period.id === 'Custom' ? (
                <div className="flex items-center justify-center gap-1 sm:gap-2">
                  <Calendar size={12} className={clsx(
                    'flex-shrink-0',
                    activePeriod === 'Custom' ? 'text-blue-600' : 'text-gray-400'
                  )} />
                  <span className="truncate">{period.label}</span>
                </div>
              ) : (
                <span className="truncate block">{period.label}</span>
              )}
            </button>
          ))}
        </div>
      
        {showCustomPicker && (
          <div className="p-3 bg-white border-t border-gray-200 -mx-4 -mb-4 mt-3">
            <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-2 items-center">
              <input 
                type="date" 
                className="w-full text-xs sm:text-sm border rounded p-2"
                placeholder="Start date"
              />
              <span className="text-gray-500 text-center">to</span>
              <input 
                type="date" 
                className="w-full text-xs sm:text-sm border rounded p-2"
                placeholder="End date"
              />
            </div>
          </div>
        )}
      </div>
    </div>
  );
}