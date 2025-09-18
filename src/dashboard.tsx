import React from 'react';
import { 
  AlertTriangle, 
  TrendingUp, 
  Users, 
  Clock,
  Brain,
  Eye,
  Heart,
  Bone
} from 'lucide-react';

export default function Dashboard() {
  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-3xl font-bold text-gray-900">SpineGuard Dashboard</h2>
        <div className="flex items-center space-x-2 text-sm text-gray-600">
          <Clock className="w-4 h-4" />
          <span>Last updated: 2 minutes ago</span>
        </div>
      </div>

      {/* Key Metrics */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Scans Analyzed Today</p>
              <p className="text-3xl font-bold text-gray-900">47</p>
              <p className="text-sm text-green-600 mt-1">↑ 23% from yesterday</p>
            </div>
            <Brain className="w-12 h-12 text-blue-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Critical Findings</p>
              <p className="text-3xl font-bold text-red-600">3</p>
              <p className="text-sm text-gray-500 mt-1">Requires immediate attention</p>
            </div>
            <AlertTriangle className="w-12 h-12 text-red-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Average Analysis Time</p>
              <p className="text-3xl font-bold text-gray-900">2.3m</p>
              <p className="text-sm text-green-600 mt-1">↓ 45% reduction</p>
            </div>
            <Clock className="w-12 h-12 text-green-500" />
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-medium text-gray-600">Active Patients</p>
              <p className="text-3xl font-bold text-gray-900">284</p>
              <p className="text-sm text-blue-600 mt-1">Under monitoring</p>
            </div>
            <Users className="w-12 h-12 text-blue-500" />
          </div>
        </div>
      </div>

      {/* AI Capabilities Overview */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">AI Analysis Capabilities</h3>
          <div className="space-y-4">
            <div className="flex items-center space-x-4 p-4 bg-blue-50 rounded-lg">
              <Bone className="w-8 h-8 text-blue-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Soft Tissue Degeneration</h4>
                <p className="text-sm text-gray-600">Quantifies ligament, tendon, and disc changes over time</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-green-50 rounded-lg">
              <Eye className="w-8 h-8 text-green-600" />
              <div>
                <h4 className="font-semibold text-gray-900">3D Posture Simulation</h4>
                <p className="text-sm text-gray-600">Converts static scans into functional posture models</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-red-50 rounded-lg">
              <AlertTriangle className="w-8 h-8 text-red-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Hidden Abnormality Detection</h4>
                <p className="text-sm text-gray-600">Identifies subtle infections and tumor probabilities</p>
              </div>
            </div>

            <div className="flex items-center space-x-4 p-4 bg-purple-50 rounded-lg">
              <Heart className="w-8 h-8 text-purple-600" />
              <div>
                <h4 className="font-semibold text-gray-900">Blood Flow Analysis</h4>
                <p className="text-sm text-gray-600">Estimates oxygenation from MRI diffusion patterns</p>
              </div>
            </div>
          </div>
        </div>

        <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
          <h3 className="text-xl font-bold text-gray-900 mb-4">Recent Critical Findings</h3>
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">URGENT</span>
                <span className="text-xs text-gray-500">5 min ago</span>
              </div>
              <p className="font-semibold text-gray-900">Patient ID: SP-2024-0891</p>
              <p className="text-sm text-gray-600">Potential spinal tumor detected (92% confidence)</p>
              <p className="text-xs text-red-600 mt-1">Requires immediate specialist consultation</p>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">WARNING</span>
                <span className="text-xs text-gray-500">23 min ago</span>
              </div>
              <p className="font-semibold text-gray-900">Patient ID: SP-2024-0889</p>
              <p className="text-sm text-gray-600">Significant disc degeneration progression</p>
              <p className="text-xs text-yellow-600 mt-1">Consider treatment plan adjustment</p>
            </div>

            <div className="p-4 bg-blue-50 border border-blue-200 rounded-lg">
              <div className="flex justify-between items-start mb-2">
                <span className="bg-blue-100 text-blue-800 text-xs font-semibold px-2 py-1 rounded">INFO</span>
                <span className="text-xs text-gray-500">1 hr ago</span>
              </div>
              <p className="font-semibold text-gray-900">Patient ID: SP-2024-0887</p>
              <p className="text-sm text-gray-600">Improved blood flow detected post-treatment</p>
              <p className="text-xs text-blue-600 mt-1">Treatment showing positive response</p>
            </div>
          </div>
        </div>
      </div>

      {/* Performance Analytics */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-xl font-bold text-gray-900 mb-6">Diagnostic Performance Analytics</h3>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-green-100 rounded-full flex items-center justify-center mb-4">
              <TrendingUp className="w-12 h-12 text-green-600" />
            </div>
            <h4 className="text-2xl font-bold text-green-600">97.8%</h4>
            <p className="text-sm text-gray-600">Overall Accuracy</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-blue-100 rounded-full flex items-center justify-center mb-4">
              <Eye className="w-12 h-12 text-blue-600" />
            </div>
            <h4 className="text-2xl font-bold text-blue-600">94.2%</h4>
            <p className="text-sm text-gray-600">Early Detection Rate</p>
          </div>
          
          <div className="text-center">
            <div className="w-24 h-24 mx-auto bg-purple-100 rounded-full flex items-center justify-center mb-4">
              <Clock className="w-12 h-12 text-purple-600" />
            </div>
            <h4 className="text-2xl font-bold text-purple-600">2.3min</h4>
            <p className="text-sm text-gray-600">Average Analysis Time</p>
          </div>
        </div>
      </div>
    </div>
  );
}