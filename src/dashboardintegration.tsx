import React, { useState } from 'react';
import { 
  Database, 
  Download, 
  Upload, 
  Shield, 
  Server,
  Wifi,
  Lock,
  CheckCircle,
  AlertCircle,
  RefreshCw,
  Search
} from 'lucide-react';

export default function DatabaseIntegration() {
  const [connectionStatus, setConnectionStatus] = useState('connected');
  const [syncStatus, setSyncStatus] = useState('synced');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">Hospital Database Integration</h2>
        <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <div className={`flex items-center space-x-2 px-2 sm:px-3 py-1 sm:py-2 rounded-lg text-sm ${
            connectionStatus === 'connected' 
              ? 'bg-green-50 text-green-800' 
              : 'bg-red-50 text-red-800'
          }`}>
            <Wifi className="w-4 h-4" />
            <span className="font-medium">
              {connectionStatus === 'connected' ? 'Connected' : 'Disconnected'}
            </span>
          </div>
          <button className="bg-blue-600 text-white px-3 sm:px-4 py-2 text-sm rounded-lg hover:bg-blue-700 transition-colors">
            Sync Now
          </button>
        </div>
      </div>

      {/* Connection Status */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 lg:gap-6">
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Server className="w-8 h-8 text-blue-600" />
              <h3 className="text-base lg:text-lg font-semibold text-gray-900">Database Status</h3>
            </div>
            <CheckCircle className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-sm text-gray-600 mb-2">Primary PACS Server</p>
          <p className="text-lg font-bold text-green-600">Online</p>
          <p className="text-xs text-gray-500 mt-1">Last sync: 2 minutes ago</p>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Shield className="w-8 h-8 text-green-600" />
              <h3 className="text-base lg:text-lg font-semibold text-gray-900">Security</h3>
            </div>
            <Lock className="w-6 h-6 text-green-500" />
          </div>
          <p className="text-sm text-gray-600 mb-2">Encryption Status</p>
          <p className="text-lg font-bold text-green-600">AES-256</p>
          <p className="text-xs text-gray-500 mt-1">HIPAA Compliant</p>
        </div>

        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200 sm:col-span-2 lg:col-span-1">
          <div className="flex items-center justify-between mb-4">
            <div className="flex items-center space-x-3">
              <Database className="w-8 h-8 text-purple-600" />
              <h3 className="text-base lg:text-lg font-semibold text-gray-900">Records</h3>
            </div>
            <RefreshCw className="w-6 h-6 text-purple-500" />
          </div>
          <p className="text-sm text-gray-600 mb-2">Total Patients</p>
          <p className="text-lg font-bold text-purple-600">18,447</p>
          <p className="text-xs text-gray-500 mt-1">284 active cases</p>
        </div>
      </div>

      {/* Data Sources */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Connected Data Sources</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Imaging Systems</h4>
            
            <div className="flex items-center justify-between p-3 lg:p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">GE Healthcare PACS</p>
                  <p className="text-xs sm:text-sm text-gray-600">MRI, CT, X-Ray</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>

            <div className="flex items-center justify-between p-3 lg:p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">Siemens Syngo</p>
                  <p className="text-xs sm:text-sm text-gray-600">Digital Radiography</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>

            <div className="flex items-center justify-between p-3 lg:p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-yellow-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">Philips IntelliSpace</p>
                  <p className="text-xs sm:text-sm text-gray-600">Advanced Imaging</p>
                </div>
              </div>
              <AlertCircle className="w-5 h-5 text-yellow-500" />
            </div>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Clinical Systems</h4>
            
            <div className="flex items-center justify-between p-3 lg:p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">Epic EMR</p>
                  <p className="text-xs sm:text-sm text-gray-600">Patient Records</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>

            <div className="flex items-center justify-between p-3 lg:p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">Cerner PowerChart</p>
                  <p className="text-xs sm:text-sm text-gray-600">Clinical Documentation</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>

            <div className="flex items-center justify-between p-3 lg:p-4 bg-green-50 border border-green-200 rounded-lg">
              <div className="flex items-center space-x-3">
                <div className="w-3 h-3 bg-green-500 rounded-full"></div>
                <div>
                  <p className="font-medium text-gray-900">Allscripts RIS</p>
                  <p className="text-xs sm:text-sm text-gray-600">Radiology Information</p>
                </div>
              </div>
              <CheckCircle className="w-5 h-5 text-green-500" />
            </div>
          </div>
        </div>
      </div>

      {/* Data Extraction Interface */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Patient Data Extraction</h3>
        
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
          <div className="space-y-4">
            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Patient ID</label>
              <div className="relative">
                <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400 w-4 h-4" />
                <input
                  type="text"
                  placeholder="Enter Patient ID or MRN"
                  className="pl-10 w-full border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Date Range</label>
              <div className="grid grid-cols-2 gap-2">
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
                <input
                  type="date"
                  className="border border-gray-300 rounded-lg px-3 py-2 text-sm focus:ring-2 focus:ring-blue-500"
                />
              </div>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Data Types</label>
              <div className="space-y-2">
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                  <span className="ml-2 text-xs sm:text-sm text-gray-700">MRI Scans</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                  <span className="ml-2 text-xs sm:text-sm text-gray-700">X-Ray Images</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600" />
                  <span className="ml-2 text-xs sm:text-sm text-gray-700">CT Scans</span>
                </label>
                <label className="flex items-center">
                  <input type="checkbox" className="rounded border-gray-300 text-blue-600" defaultChecked />
                  <span className="ml-2 text-xs sm:text-sm text-gray-700">Clinical Notes</span>
                </label>
              </div>
            </div>

            <button className="w-full bg-blue-600 text-white py-2 rounded-lg hover:bg-blue-700 transition-colors">
              Extract Data
            </button>
          </div>

          <div className="space-y-4">
            <h4 className="font-semibold text-gray-900">Recent Extractions</h4>
            
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 lg:p-3 bg-green-50 border border-green-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">SP-2024-0891</p>
                  <p className="text-xs sm:text-sm text-gray-600">MRI L-Spine • 2024-01-15</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <Download className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>

              <div className="flex items-center justify-between p-2 lg:p-3 bg-blue-50 border border-blue-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">SP-2024-0890</p>
                  <p className="text-xs sm:text-sm text-gray-600">X-Ray Lumbar • 2024-01-15</p>
                </div>
                <div className="flex items-center space-x-2">
                  <RefreshCw className="w-4 h-4 text-blue-500 animate-spin" />
                  <span className="text-xs sm:text-sm text-blue-600">Processing</span>
                </div>
              </div>

              <div className="flex items-center justify-between p-2 lg:p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">SP-2024-0889</p>
                  <p className="text-xs sm:text-sm text-gray-600">Complete Dataset • 2024-01-14</p>
                </div>
                <div className="flex items-center space-x-2">
                  <CheckCircle className="w-4 h-4 text-green-500" />
                  <Download className="w-4 h-4 text-gray-400 hover:text-gray-600 cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* System Integration Stats */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4 lg:mb-6">Integration Statistics</h3>
        
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-100 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-3">
              <Upload className="w-8 h-8 text-blue-600" />
            </div>
            <p className="text-lg lg:text-2xl font-bold text-blue-600">1,247</p>
            <p className="text-xs sm:text-sm text-gray-600">Scans Imported Today</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-3">
              <CheckCircle className="w-8 h-8 text-green-600" />
            </div>
            <p className="text-lg lg:text-2xl font-bold text-green-600">99.7%</p>
            <p className="text-xs sm:text-sm text-gray-600">Uptime This Month</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-3">
              <Database className="w-8 h-8 text-purple-600" />
            </div>
            <p className="text-lg lg:text-2xl font-bold text-purple-600">847GB</p>
            <p className="text-xs sm:text-sm text-gray-600">Data Processed</p>
          </div>

          <div className="text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-orange-100 rounded-full flex items-center justify-center mx-auto mb-2 lg:mb-3">
              <Shield className="w-8 h-8 text-orange-600" />
            </div>
            <p className="text-lg lg:text-2xl font-bold text-orange-600">100%</p>
            <p className="text-xs sm:text-sm text-gray-600">HIPAA Compliance</p>
          </div>
        </div>
      </div>
    </div>
  );
}