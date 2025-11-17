import { useState } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');

  // Sample data for charts
  const revenueData = [
    { month: 'Jan', revenue: 125000, projects: 45 },
    { month: 'Feb', revenue: 145000, projects: 52 },
    { month: 'Mar', revenue: 165000, projects: 61 },
    { month: 'Apr', revenue: 158000, projects: 58 },
    { month: 'May', revenue: 172000, projects: 65 },
    { month: 'Jun', revenue: 189000, projects: 72 }
  ];

  const serviceDistribution = [
    { name: 'Web Dev', value: 35 },
    { name: 'Cloud', value: 25 },
    { name: 'Security', value: 20 },
    { name: 'Consulting', value: 15 },
    { name: 'Analytics', value: 5 }
  ];

  const projectStatus = [
    { status: 'Completed', count: 42, color: '#10B981' },
    { status: 'In Progress', count: 28, color: '#3B82F6' },
    { status: 'Pending', count: 15, color: '#F59E0B' },
    { status: 'On Hold', count: 8, color: '#EF4444' }
  ];

  const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#8884D8'];

  const quickStats = [
    { title: 'Total Revenue', value: '$954K', change: '+12.5%', trend: 'up' },
    { title: 'Active Projects', value: '85', change: '+8.2%', trend: 'up' },
    { title: 'Client Satisfaction', value: '94%', change: '+2.1%', trend: 'up' },
    { title: 'Team Utilization', value: '78%', change: '-3.2%', trend: 'down' }
  ];

  const recentActivities = [
    { id: 1, project: 'E-commerce Platform', client: 'TechCorp', status: 'Completed', time: '2h ago' },
    { id: 2, project: 'Cloud Migration', client: 'GlobalBank', status: 'In Progress', time: '5h ago' },
    { id: 3, project: 'Security Audit', client: 'HealthPlus', status: 'Pending', time: '1d ago' },
    { id: 4, project: 'Mobile App Dev', client: 'StartUpXYZ', status: 'Completed', time: '1d ago' }
  ];

  return (
    <div className="min-h-screen bg-gray-50">
      {/* Header - Fixed for mobile */}
      <header className="bg-white shadow-sm border-b">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-3 sm:space-y-0">
            <div className="w-full sm:w-auto">
              <h1 className="text-xl sm:text-2xl mt-20 font-bold text-gray-900 truncate">IT Solutions Dashboard</h1>
              <p className="text-gray-500 text-sm sm:text-base">Welcome back, Admin</p>
            </div>
            <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-end">
              <div className="relative flex-1 sm:flex-none">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm"
                />
                <div className="absolute left-2.5 top-2.5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <button className="p-2 bg-gray-100 rounded-lg hover:bg-gray-200 sm:ml-2 flex-shrink-0">
                <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6">
        {/* Navigation Tabs - Scrollable on mobile */}
        <div className="bg-white rounded-xl shadow-sm mb-6">
          <div className="border-b border-gray-200 overflow-x-auto">
            <nav className="flex space-x-4 sm:space-x-8 px-4 min-w-max">
              {['overview', 'projects', 'clients', 'reports', 'team'].map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`py-3 sm:py-4 px-1 border-b-2 font-medium text-xs sm:text-sm capitalize whitespace-nowrap ${
                    activeTab === tab
                      ? 'border-blue-500 text-blue-600'
                      : 'border-transparent text-gray-500 hover:text-gray-700 hover:border-gray-300'
                  }`}
                >
                  {tab}
                </button>
              ))}
            </nav>
          </div>
        </div>

        {/* Quick Stats - 2 columns on mobile */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {quickStats.map((stat, index) => (
            <div key={index} className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{stat.title}</p>
                  <p className="text-lg sm:text-2xl font-bold text-gray-900 mt-1 sm:mt-2 truncate">{stat.value}</p>
                </div>
                <div className={`p-2 sm:p-3 rounded-full flex-shrink-0 ml-2 ${
                  stat.trend === 'up' ? 'bg-green-100' : 'bg-red-100'
                }`}>
                  <svg className={`w-4 h-4 sm:w-6 sm:h-6 ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={stat.trend === 'up' ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} />
                  </svg>
                </div>
              </div>
              <p className={`text-xs mt-1 sm:mt-2 truncate ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change} from last month
              </p>
            </div>
          ))}
        </div>

        {/* Charts Section - Stack on mobile */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6 mb-6">
          {/* Revenue Chart */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Revenue & Projects</h3>
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip />
                  <Legend />
                  <Line type="monotone" dataKey="revenue" stroke="#3B82F6" strokeWidth={2} />
                  <Line type="monotone" dataKey="projects" stroke="#10B981" strokeWidth={2} />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Service Distribution */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Service Distribution</h3>
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <PieChart>
                  <Pie
                    data={serviceDistribution}
                    cx="50%"
                    cy="50%"
                    labelLine={false}
                    label={({ name, percent }) => `${name} (${(percent * 100).toFixed(0)}%)`}
                    outerRadius={80}
                    fill="#8884d8"
                    dataKey="value"
                  >
                    {serviceDistribution.map((entry, index) => (
                      <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                    ))}
                  </Pie>
                  <Tooltip />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Project Status & Recent Activity - Stack on mobile */}
        <div className="grid grid-cols-1 gap-4 sm:gap-6">
          {/* Project Status */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Project Status</h3>
            <div className="space-y-3">
              {projectStatus.map((project, index) => (
                <div key={index} className="flex items-center justify-between">
                  <div className="flex items-center min-w-0 flex-1">
                    <div 
                      className="w-2 h-2 sm:w-3 sm:h-3 rounded-full mr-2 sm:mr-3 flex-shrink-0"
                      style={{ backgroundColor: project.color }}
                    ></div>
                    <span className="text-xs sm:text-sm font-medium text-gray-700 truncate">{project.status}</span>
                  </div>
                  <div className="flex items-center space-x-2 sm:space-x-4 ml-2">
                    <span className="text-xs sm:text-sm font-semibold text-gray-900 whitespace-nowrap">{project.count}</span>
                    <div className="w-16 sm:w-24 bg-gray-200 rounded-full h-1.5 sm:h-2">
                      <div 
                        className="h-1.5 sm:h-2 rounded-full"
                        style={{ 
                          width: `${(project.count / 93) * 100}%`,
                          backgroundColor: project.color
                        }}
                      ></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Activity */}
          <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900">Recent Activity</h3>
              <button className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium">
                View All
              </button>
            </div>
            <div className="space-y-3">
              {recentActivities.map((activity) => (
                <div key={activity.id} className="flex items-center justify-between p-2 sm:p-3 hover:bg-gray-50 rounded-lg">
                  <div className="min-w-0 flex-1 pr-2">
                    <p className="font-medium text-gray-900 text-sm sm:text-base truncate">{activity.project}</p>
                    <p className="text-gray-500 text-xs sm:text-sm truncate">{activity.client}</p>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`inline-flex items-center px-2 py-0.5 rounded-full text-xs font-medium ${
                      activity.status === 'Completed' 
                        ? 'bg-green-100 text-green-800'
                        : activity.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {activity.status}
                    </span>
                    <p className="text-gray-500 text-xs mt-0.5 whitespace-nowrap">{activity.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Performance - Scrollable table on mobile */}
        <div className="bg-white rounded-xl shadow-sm p-4 sm:p-6 mt-6">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4">Team Performance</h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200 text-sm">
              <thead>
                <tr>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Member</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projects</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200">
                <tr>
                  <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm mr-2 sm:mr-3">
                        JS
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">John Smith</div>
                        <div className="text-gray-500 text-xs truncate">john@company.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 truncate">Senior Dev</td>
                  <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">12</td>
                  <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">94%</td>
                  <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
                <tr>
                  <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <div className="w-6 h-6 sm:w-8 sm:h-8 bg-green-500 rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm mr-2 sm:mr-3">
                        SJ
                      </div>
                      <div className="min-w-0">
                        <div className="text-sm font-medium text-gray-900 truncate">Sarah Johnson</div>
                        <div className="text-gray-500 text-xs truncate">sarah@company.com</div>
                      </div>
                    </div>
                  </td>
                  <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 truncate">PM</td>
                  <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">8</td>
                  <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900">89%</td>
                  <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap">
                    <span className="inline-flex items-center px-1.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800">
                      Active
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard ;