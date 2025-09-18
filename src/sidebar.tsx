import React from 'react';
import {
  LayoutDashboard,
  Upload,
  Brain,
  Database,
  FileText,
  Shield,
  Stethoscope,
  TrendingUp,
} from 'lucide-react';
export type ViewKey = 'dashboard' | 'upload' | 'analysis' | 'database' | 'reports';
interface MenuItem {
  id: ViewKey;
  label: string;
  icon: React.ComponentType<any>;
}

interface SidebarProps {
  activeView: ViewKey;
  setActiveView: (view: ViewKey) => void;
}

const menuItems: MenuItem[] = [
  { id: 'dashboard', label: 'Dashboard', icon: LayoutDashboard },
  { id: 'upload', label: 'Scan Upload', icon: Upload },
  { id: 'analysis', label: 'AI Analysis', icon: Brain },
  { id: 'database', label: 'Database', icon: Database },
  { id: 'reports', label: 'Reports', icon: FileText },
];

const Sidebar: React.FC<SidebarProps> = ({ activeView, setActiveView }) => {
  return (
    <aside className="w-full lg:w-64 bg-white border-b lg:border-r lg:border-b-0 border-gray-200 flex flex-col lg:min-h-screen">
      <div className="p-3 sm:p-4 lg:p-6 border-b border-gray-200">
        <div className="flex items-center space-x-2 mb-2 lg:mb-4">
          <Shield className="w-6 h-6 text-green-600" />
          <span className="text-sm font-semibold text-green-800">
            HIPAA Compliant
          </span>
        </div>
        <div className="bg-blue-50 p-2 lg:p-3 rounded-lg">
          <div className="flex items-center space-x-2 mb-1">
            <Stethoscope className="w-4 h-4 text-blue-600" />
            <span className="text-xs font-medium text-blue-800">
              Medical AI Assistant
            </span>
          </div>
          <p className="text-xs text-blue-600 hidden sm:block">
            Supporting clinical decisions, not replacing them
          </p>
        </div>
      </div>

      <nav className="flex-1 p-2 sm:p-3 lg:p-4">
        <ul className="flex lg:flex-col lg:space-y-2 space-x-1 lg:space-x-0 overflow-x-auto lg:overflow-x-visible">
          {menuItems.map((item) => {
            const Icon = item.icon;
            const isActive = activeView === item.id;

            return (
              <li key={item.id}>
                <button
                  onClick={() => setActiveView(item.id)}
                  className={`w-full flex flex-col lg:flex-row items-center lg:space-x-3 px-2 sm:px-3 lg:px-4 py-2 lg:py-3 rounded-lg text-center lg:text-left transition-colors whitespace-nowrap ${
                    isActive ? 'bg-blue-600 text-white' : 'text-gray-700 hover:bg-gray-100'
                  }`}
                >
                  <Icon className="w-5 h-5" />
                  <span className="font-medium text-xs lg:text-sm mt-1 lg:mt-0">
                    {item.label}
                  </span>
                </button>
              </li>
            );
          })}
        </ul>
      </nav>

      <div className="p-2 sm:p-3 lg:p-4 border-t border-gray-200 hidden lg:block">
        <div className="bg-green-50 p-3 rounded-lg">
          <div className="flex items-center space-x-2 mb-1">
            <TrendingUp className="w-4 h-4 text-green-600" />
            <span className="text-xs font-medium text-green-800">Diagnostic Accuracy</span>
          </div>
          <p className="text-lg font-bold text-green-900">97.8%</p>
          <p className="text-xs text-green-600">Validated on 10K+ cases</p>
        </div>
      </div>
    </aside>
  );
};

export default Sidebar;
