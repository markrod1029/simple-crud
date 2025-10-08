import { DollarSign, Package, TrendingUp, Users } from 'lucide-react';

// export default function StatCard({ title, value, icon: Icon, color }) {
export default function StatCard({ title, value, color }) {
  return (
    <div className="bg-white p-6 rounded-lg shadow-sm border">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm text-gray-500">{title}</p>
          <p className="text-2xl font-bold text-gray-900">{value}</p>
        </div>
        <div className={`p-3 rounded-lg ${color}`}>
          {/* <Icon className="text-gray-800" size={24} /> */}
        </div>
      </div>
    </div>
  );
}
