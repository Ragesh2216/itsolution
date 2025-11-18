import { useState, useEffect, useRef } from 'react';
import { 
  BarChart, Bar, LineChart, Line, PieChart, Pie, Cell,
  XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer 
} from 'recharts';

// Fixed Animated Number Component
const AnimatedNumber = ({ value, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    
    // Handle different value types (string with symbols or plain number)
    let numericValue;
    let prefix = '';
    let suffix = '';

    if (typeof value === 'string') {
      // Extract numeric part and any symbols
      const numericMatch = value.match(/([^0-9]*)([0-9]+)([^0-9]*)/);
      if (numericMatch) {
        prefix = numericMatch[1] || '';
        numericValue = parseInt(numericMatch[2]);
        suffix = numericMatch[3] || '';
      } else {
        numericValue = 0;
      }
    } else {
      numericValue = value;
    }

    const increment = numericValue / (duration / 16);
    const timer = setInterval(() => {
      start += increment;
      if (start >= numericValue) {
        setCount(numericValue);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  // Determine what to display based on value type
  const displayValue = typeof value === 'string' 
    ? `${prefix}${count}${suffix}`
    : count;

  return (
    <span ref={ref} className={className}>
      {displayValue}
    </span>
  );
};

// Alternative simpler version if you prefer:
const SimpleAnimatedNumber = ({ value, duration = 2000, className = "" }) => {
  const [count, setCount] = useState(0);
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.1 }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    if (!isVisible) return;

    let start = 0;
    const end = typeof value === 'string' ? parseInt(value.replace(/[^0-9]/g, '')) || 0 : value;
    const increment = end / (duration / 16);
    
    const timer = setInterval(() => {
      start += increment;
      if (start >= end) {
        setCount(end);
        clearInterval(timer);
      } else {
        setCount(Math.floor(start));
      }
    }, 16);

    return () => clearInterval(timer);
  }, [isVisible, value, duration]);

  return (
    <span ref={ref} className={className}>
      {typeof value === 'string' ? value.replace(/[0-9]+/, count) : count}
    </span>
  );
};

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState('overview');
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    setIsVisible(true);
  }, []);

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
    { title: 'Total Revenue', value: '$954K', change: '+12.5%', trend: 'up', icon: '💰' },
    { title: 'Active Projects', value: '85', change: '+8.2%', trend: 'up', icon: '🚀' },
    { title: 'Client Satisfaction', value: '94%', change: '+2.1%', trend: 'up', icon: '⭐' },
    { title: 'Team Utilization', value: '78%', change: '-3.2%', trend: 'down', icon: '👥' }
  ];

  const recentActivities = [
    { id: 1, project: 'E-commerce Platform', client: 'TechCorp', status: 'Completed', time: '2h ago', icon: '🛒' },
    { id: 2, project: 'Cloud Migration', client: 'GlobalBank', status: 'In Progress', time: '5h ago', icon: '☁️' },
    { id: 3, project: 'Security Audit', client: 'HealthPlus', status: 'Pending', time: '1d ago', icon: '🔒' },
    { id: 4, project: 'Mobile App Dev', client: 'StartUpXYZ', status: 'Completed', time: '1d ago', icon: '📱' }
  ];

  const teamMembers = [
    { name: 'John Smith', role: 'Senior Dev', projects: 12, rate: 94, status: 'Active', avatar: 'JS', color: 'from-blue-500 to-cyan-500' },
    { name: 'Sarah Johnson', role: 'Project Manager', projects: 8, rate: 89, status: 'Active', avatar: 'SJ', color: 'from-purple-500 to-pink-500' },
    { name: 'Mike Chen', role: 'DevOps Engineer', projects: 15, rate: 91, status: 'Active', avatar: 'MC', color: 'from-green-500 to-teal-500' },
    { name: 'Emily Davis', role: 'UI/UX Designer', projects: 10, rate: 87, status: 'Away', avatar: 'ED', color: 'from-orange-500 to-red-500' }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-blue-50 to-purple-50 relative overflow-hidden">
      {/* Animated Background Elements */}
      <div className="fixed inset-0 z-0 pointer-events-none">
        {[...Array(15)].map((_, i) => (
          <div
            key={i}
            className="absolute rounded-full animate-float-slow opacity-10"
            style={{
              width: `${Math.random() * 100 + 20}px`,
              height: `${Math.random() * 100 + 20}px`,
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              backgroundColor: ['#3B82F6', '#8B5CF6', '#EC4899', '#F59E0B', '#10B981'][Math.floor(Math.random() * 5)],
              animationDelay: `${Math.random() * 10}s`,
              animationDuration: `${Math.random() * 20 + 10}s`
            }}
          />
        ))}
      </div>

      {/* Header */}
      <header className="bg-white/80 backdrop-blur-md shadow-sm border-b border-white/20 relative z-10">
        <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6">
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center py-4 space-y-3 sm:space-y-0">
            <div className="w-full sm:w-auto">
              <h1 className="text-xl sm:text-2xl mt-20 font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
                IT Solutions Dashboard
              </h1>
              <p className="text-gray-500 text-sm sm:text-base animate-pulse-slow">Welcome back, Admin 👋</p>
            </div>
            <div className="flex items-center space-x-2 w-full sm:w-auto justify-between sm:justify-end">
              <div className="relative flex-1 sm:flex-none">
                <input
                  type="text"
                  placeholder="Search..."
                  className="w-full pl-9 pr-3 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent text-sm bg-white/50 backdrop-blur-sm"
                />
                <div className="absolute left-2.5 top-2.5">
                  <svg className="w-4 h-4 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
                  </svg>
                </div>
              </div>
              <button className="p-2 bg-white/50 backdrop-blur-sm rounded-lg hover:bg-white/70 transition-all duration-300 transform hover:scale-105 sm:ml-2 flex-shrink-0 border border-white/20">
                <div className="relative">
                  <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                  </svg>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full animate-ping"></div>
                  <div className="absolute -top-1 -right-1 w-2 h-2 bg-red-500 rounded-full"></div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="max-w-7xl mx-auto px-3 sm:px-4 lg:px-6 py-4 sm:py-6 relative z-10">
        {/* Navigation Tabs */}
        

        {/* Quick Stats with Animated Numbers */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3 sm:gap-4 mb-6">
          {quickStats.map((stat, index) => (
            <div 
              key={index}
              className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 border border-white/20 hover:shadow-lg transition-all duration-500 transform hover:-translate-y-1 animate-fade-in-up group"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              <div className="flex items-center justify-between">
                <div className="min-w-0 flex-1">
                  <div className="flex items-center space-x-2 mb-2">
                    <span className="text-xl">{stat.icon}</span>
                    <p className="text-xs sm:text-sm font-medium text-gray-600 truncate">{stat.title}</p>
                  </div>
                  <p className="text-lg sm:text-2xl font-bold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent mt-1 sm:mt-2 truncate">
                    <SimpleAnimatedNumber value={stat.value} duration={1500} />
                  </p>
                </div>
                <div className={`p-2 sm:p-3 rounded-full flex-shrink-0 ml-2 transition-all duration-300 group-hover:scale-110 ${
                  stat.trend === 'up' ? 'bg-green-100/80' : 'bg-red-100/80'
                }`}>
                  <svg className={`w-4 h-4 sm:w-6 sm:h-6 ${
                    stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
                  }`} fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} 
                      d={stat.trend === 'up' ? "M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" : "M13 17h8m0 0V9m0 8l-8-8-4 4-6-6"} />
                  </svg>
                </div>
              </div>
              <p className={`text-xs mt-1 sm:mt-2 truncate flex items-center space-x-1 ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                <span>{stat.change}</span>
                <span>from last month</span>
              </p>
            </div>
          ))}
        </div>

        {/* Charts Section */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
          {/* Revenue Chart */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 border border-white/20 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
              📈 Revenue & Projects
            </h3>
            <div className="h-64 sm:h-80">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={revenueData}>
                  <CartesianGrid strokeDasharray="3 3" stroke="#f0f0f0" />
                  <XAxis dataKey="month" fontSize={12} />
                  <YAxis fontSize={12} />
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      borderRadius: '12px',
                      boxShadow: '0 10px 25px rgba(0,0,0,0.1)'
                    }}
                  />
                  <Legend />
                  <Line 
                    type="monotone" 
                    dataKey="revenue" 
                    stroke="url(#revenueGradient)" 
                    strokeWidth={3}
                    dot={{ fill: '#3B82F6', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#3B82F6' }}
                  />
                  <Line 
                    type="monotone" 
                    dataKey="projects" 
                    stroke="url(#projectsGradient)" 
                    strokeWidth={3}
                    dot={{ fill: '#10B981', strokeWidth: 2, r: 4 }}
                    activeDot={{ r: 6, fill: '#10B981' }}
                  />
                  <defs>
                    <linearGradient id="revenueGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#3B82F6" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#3B82F6" stopOpacity={0.3}/>
                    </linearGradient>
                    <linearGradient id="projectsGradient" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="0%" stopColor="#10B981" stopOpacity={1}/>
                      <stop offset="100%" stopColor="#10B981" stopOpacity={0.3}/>
                    </linearGradient>
                  </defs>
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Service Distribution */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 border border-white/20 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
              🎯 Service Distribution
            </h3>
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
                    animationBegin={0}
                    animationDuration={1500}
                  >
                    {serviceDistribution.map((entry, index) => (
                      <Cell 
                        key={`cell-${index}`} 
                        fill={COLORS[index % COLORS.length]}
                        stroke="white"
                        strokeWidth={2}
                      />
                    ))}
                  </Pie>
                  <Tooltip 
                    contentStyle={{ 
                      backgroundColor: 'rgba(255, 255, 255, 0.9)',
                      backdropFilter: 'blur(10px)',
                      border: 'none',
                      borderRadius: '12px'
                    }}
                  />
                </PieChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        {/* Project Status & Recent Activity */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6">
          {/* Project Status */}
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 border border-white/20 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
            <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
              📊 Project Status
            </h3>
            <div className="space-y-4">
              {projectStatus.map((project, index) => (
                <div 
                  key={index} 
                  className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-white to-gray-50/50 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group"
                >
                  <div className="flex items-center min-w-0 flex-1">
                    <div 
                      className="w-3 h-3 rounded-full mr-3 flex-shrink-0 animate-pulse"
                      style={{ backgroundColor: project.color }}
                    ></div>
                    <span className="text-sm font-medium text-gray-700 truncate group-hover:text-gray-900">
                      {project.status}
                    </span>
                  </div>
                  <div className="flex items-center space-x-4 ml-2">
                    <span className="text-sm font-semibold text-gray-900 whitespace-nowrap">
                      <SimpleAnimatedNumber value={project.count} duration={1000} />
                    </span>
                    <div className="w-24 bg-gray-200 rounded-full h-2 overflow-hidden">
                      <div 
                        className="h-2 rounded-full transition-all duration-1000 ease-out"
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
          <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 border border-white/20 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-base sm:text-lg font-semibold text-gray-900 flex items-center">
                🔔 Recent Activity
              </h3>
              <button className="text-xs sm:text-sm text-blue-600 hover:text-blue-700 font-medium transition-all duration-300 transform hover:scale-105">
                View All →
              </button>
            </div>
            <div className="space-y-3">
              {recentActivities.map((activity, index) => (
                <div 
                  key={activity.id} 
                  className="flex items-center justify-between p-3 rounded-xl bg-gradient-to-r from-white to-gray-50/50 hover:shadow-md transition-all duration-300 transform hover:scale-[1.02] group animate-fade-in-up"
                  style={{ animationDelay: `${index * 100}ms` }}
                >
                  <div className="flex items-center min-w-0 flex-1 pr-2">
                    <span className="text-lg mr-3 group-hover:scale-110 transition-transform duration-300">
                      {activity.icon}
                    </span>
                    <div className="min-w-0 flex-1">
                      <p className="font-medium text-gray-900 text-sm sm:text-base truncate group-hover:text-blue-600 transition-colors">
                        {activity.project}
                      </p>
                      <p className="text-gray-500 text-xs sm:text-sm truncate">{activity.client}</p>
                    </div>
                  </div>
                  <div className="text-right flex-shrink-0">
                    <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 group-hover:scale-105 ${
                      activity.status === 'Completed' 
                        ? 'bg-green-100 text-green-800'
                        : activity.status === 'In Progress'
                        ? 'bg-blue-100 text-blue-800'
                        : 'bg-yellow-100 text-yellow-800'
                    }`}>
                      {activity.status}
                    </span>
                    <p className="text-gray-500 text-xs mt-1 whitespace-nowrap group-hover:text-gray-700">
                      {activity.time}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Team Performance */}
        <div className="bg-white/80 backdrop-blur-md rounded-2xl shadow-sm p-4 sm:p-6 mt-6 border border-white/20 hover:shadow-lg transition-all duration-500 animate-fade-in-up">
          <h3 className="text-base sm:text-lg font-semibold text-gray-900 mb-4 flex items-center">
            👥 Team Performance
          </h3>
          <div className="overflow-x-auto">
            <table className="min-w-full divide-y divide-gray-200/50 text-sm">
              <thead>
                <tr>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Team Member</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Role</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Projects</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Rate</th>
                  <th className="px-3 py-2 sm:px-4 sm:py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-200/50">
                {teamMembers.map((member, index) => (
                  <tr 
                    key={index}
                    className="hover:bg-white/50 transition-all duration-300 transform hover:scale-[1.01] animate-fade-in-up"
                    style={{ animationDelay: `${index * 100}ms` }}
                  >
                    <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap">
                      <div className="flex items-center">
                        <div className={`w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-r ${member.color} rounded-full flex items-center justify-center text-white font-semibold text-xs sm:text-sm mr-2 sm:mr-3 shadow-lg`}>
                          {member.avatar}
                        </div>
                        <div className="min-w-0">
                          <div className="text-sm font-medium text-gray-900 truncate group-hover:text-blue-600 transition-colors">
                            {member.name}
                          </div>
                          <div className="text-gray-500 text-xs truncate">{member.name.toLowerCase().replace(' ', '.')}@company.com</div>
                        </div>
                      </div>
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 truncate">
                      {member.role}
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 font-semibold">
                      <SimpleAnimatedNumber value={member.projects} duration={1200} />
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap text-xs sm:text-sm text-gray-900 font-semibold">
                      <SimpleAnimatedNumber value={`${member.rate}%`} duration={1200} />
                    </td>
                    <td className="px-3 py-2 sm:px-4 sm:py-4 whitespace-nowrap">
                      <span className={`inline-flex items-center px-2 py-1 rounded-full text-xs font-medium transition-all duration-300 hover:scale-105 ${
                        member.status === 'Active' 
                          ? 'bg-green-100 text-green-800 animate-pulse-slow'
                          : 'bg-yellow-100 text-yellow-800'
                      }`}>
                        {member.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>

      {/* Enhanced CSS Animations */}
      <style jsx global>{`
        @keyframes fadeInUp {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        @keyframes floatSlow {
          0%, 100% {
            transform: translateY(0px) translateX(0px);
          }
          33% {
            transform: translateY(-20px) translateX(10px);
          }
          66% {
            transform: translateY(10px) translateX(-10px);
          }
        }
        
        @keyframes pulseSlow {
          0%, 100% {
            opacity: 1;
          }
          50% {
            opacity: 0.7;
          }
        }

        .animate-fade-in-up {
          animation: fadeInUp 0.6s ease-out forwards;
          opacity: 0;
        }
        
        .animate-float-slow {
          animation: floatSlow 20s ease-in-out infinite;
        }
        
        .animate-pulse-slow {
          animation: pulseSlow 2s ease-in-out infinite;
        }

        .animate-ping {
          animation: ping 1s cubic-bezier(0, 0, 0.2, 1) infinite;
        }

        @keyframes ping {
          75%, 100% {
            transform: scale(2);
            opacity: 0;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;