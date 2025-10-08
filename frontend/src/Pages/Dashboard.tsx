import React from 'react';
import MainLayout from '../Layout/MainLayout';
import SimpleBarChart from '../Components/Organisms/BarChart';

const chartData = [
  { name: 'Jan', value: 400 },
  { name: 'Feb', value: 300 },
  { name: 'Mar', value: 600 },
  { name: 'Apr', value: 800 },
  { name: 'May', value: 500 },
];

const Dashboard: React.FC = () => {
  return (
    <MainLayout>
      <h1 className="text-2xl font-bold mb-4">Dashboard</h1>
      <div className="bg-white p-4 rounded-lg shadow-md">
        <h2 className="text-xl font-semibold mb-2">Sales Data</h2>
        <SimpleBarChart data={chartData} />
      </div>
    </MainLayout>
  );
};

export default Dashboard;