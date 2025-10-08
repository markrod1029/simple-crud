import React from 'react';
import MainLayout from '../Layout/MainLayout';
import SimpleBarChart from '../Components/Organisms/BarChart';
import SimplePieChart from '../Components/Organisms/pie-chart';

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

        <div className='grid grid-cols-1 md:grid-cols-2 gap-4 mb-4'>
          
          <div className='bg-gray-100 p-4 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold mb-2'>bar Chart</h3>
            <SimpleBarChart data={chartData} />
          </div>

          <div className='bg-gray-100 p-6 rounded-lg shadow-md'>
            <h3 className='text-lg font-semibold '>Pie Chart</h3>
            <SimplePieChart data={chartData} />
          </div>


        </div>
      </div>
    </MainLayout>
  );
};

export default Dashboard;