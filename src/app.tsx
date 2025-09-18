import React, { useState } from 'react';
import Header from './header';
import Sidebar, { ViewKey } from './sidebar';
import Dashboard from './dashboard';
import ScanUpload from './scanupload'; // file has double "o"
import Analysis from './analysis'; // file is .jsx
import DatabaseIntegration from './dashboardintegration'; // file is .jsx
import Reports from './reports';
import FileUpload from './fileupload';
function App() {
  const [activeView, setActiveView] = useState<ViewKey>('dashboard');

  const renderContent = () => {
    switch (activeView) {
      case 'dashboard':
        return <Dashboard />;
      case 'upload':
        return <FileUpload />;
      case 'analysis':
        return <Analysis />;
      case 'database':
        return <DatabaseIntegration />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col lg:flex-row">
      <Sidebar activeView={activeView} setActiveView={setActiveView} />
      <div className="flex-1 flex flex-col min-w-0">
        <Header />
        <main className="flex-1 p-3 sm:p-4 lg:p-6">
          {renderContent()}
        </main>
      </div>
    </div>
  );
}

export default App;
