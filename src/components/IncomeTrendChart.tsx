import { BarChart, Bar, XAxis, YAxis, ResponsiveContainer, Line, ComposedChart, Tooltip } from 'recharts';

const data = [
  { name: 'Jan', income: 4000, trend: 3500 },
  { name: 'Feb', income: 3000, trend: 4200 },
  { name: 'Mar', income: 5000, trend: 3800 },
  { name: 'Apr', income: 4800, trend: 4100 },
  { name: 'May', income: 2500, trend: 4900 },
  { name: 'Jun', income: 4300, trend: 3700 },
];

// Custom gradient for the bars
const Gradient = () => (
    <defs>
      <linearGradient id="barGradient" x1="0" y1="0" x2="0" y2="1">
        <stop offset="0%" stopColor="#A855F7" stopOpacity={0.9} />
        <stop offset="100%" stopColor="#D8B4FE" stopOpacity={0.7} />
      </linearGradient>
    </defs>
);

export default function IncomeTrendChart() {
  return (
    <div className="w-full rounded-3xl bg-white p-5 shadow-sm">
      <div className="mb-4">
        <h3 className="text-base font-bold text-gray-900">Income Trend</h3>
        <p className="text-xs text-gray-500">Your monthly income and growth for the past 6 months</p>
      </div>
      <div style={{ width: '100%', height: 200 }}>
        <ResponsiveContainer>
          <ComposedChart data={data} margin={{ top: 20, right: 0, left: -20, bottom: 0 }}>
            <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fontSize: 12, fill: '#6B7280' }} />
            <YAxis
              yAxisId="left"
              orientation="left"
              tickFormatter={(value) => `$${value / 1000}k`}
              tickLine={false}
              axisLine={false}
              tick={{ fontSize: 12, fill: '#6B7280' }}
            />
            <YAxis yAxisId="right" orientation="right" tickFormatter={(value) => `${value}%`} tickLine={false} axisLine={false} ticks={[0, 50, 100]} tick={{ fontSize: 12, fill: '#6B7280' }} />
            <Tooltip cursor={{ fill: 'rgba(230, 230, 230, 0.4)' }} />
            <Bar dataKey="income" yAxisId="left" barSize={20} radius={[10, 10, 0, 0]} fill="url(#barGradient)">
                <Gradient />
            </Bar>
            <Line type="monotone" dataKey="trend" yAxisId="left" stroke="#FFBF00" strokeWidth={3} dot={false} />
          </ComposedChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}