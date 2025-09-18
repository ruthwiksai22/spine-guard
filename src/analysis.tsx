import React, { useState } from 'react';
import { 
  Brain,
  TrendingDown,
  AlertTriangle,
  Heart,
  Bone,
  Eye,
  BarChart3,
  Activity,
  Zap
} from 'lucide-react';

export default function Analysis() {
  const [selectedPatient, setSelectedPatient] = useState('SP-2024-0891');

  return (
    <div className="space-y-6">
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">AI Analysis Results</h2>
        <select 
          value={selectedPatient}
          onChange={(e) => setSelectedPatient(e.target.value)}
          className="border border-gray-300 rounded-lg px-3 lg:px-4 py-2 text-sm lg:text-base focus:ring-2 focus:ring-blue-500"
        >
          <option value="SP-2024-0891">Patient SP-2024-0891</option>
          <option value="SP-2024-0890">Patient SP-2024-0890</option>
          <option value="SP-2024-0889">Patient SP-2024-0889</option>
        </select>
      </div>

      {/* Patient Overview */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex flex-col sm:flex-row sm:items-center justify-between mb-4 space-y-2 sm:space-y-0">
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Patient Overview - {selectedPatient}</h3>
          <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-1 sm:space-y-0 sm:space-x-2">
            <span className="bg-red-100 text-red-800 text-sm font-semibold px-3 py-1 rounded-full">
              HIGH PRIORITY
            </span>
            <span className="text-xs sm:text-sm text-gray-500">Scanned: 2024-01-15 14:32</span>
          </div>
        </div>
        
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 lg:gap-4">
          <div className="text-center">
            <p className="text-sm text-gray-600">Age</p>
            <p className="text-xl lg:text-2xl font-bold text-gray-900">54</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Gender</p>
            <p className="text-xl lg:text-2xl font-bold text-gray-900">Female</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Scan Type</p>
            <p className="text-xl lg:text-2xl font-bold text-gray-900">MRI T2</p>
          </div>
          <div className="text-center">
            <p className="text-sm text-gray-600">Risk Level</p>
            <p className="text-xl lg:text-2xl font-bold text-red-600">High</p>
          </div>
        </div>
      </div>

      {/* AI Analysis Grid */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 lg:gap-6">
        
        {/* Soft Tissue Degeneration */}
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <TrendingDown className="w-8 h-8 text-orange-600" />
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Soft Tissue Degeneration</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex justify-between items-center p-2 lg:p-3 bg-red-50 rounded-lg">
              <span className="font-medium text-gray-900">L4-L5 Disc</span>
              <div className="text-right">
                <span className="text-xl lg:text-2xl font-bold text-red-600">73%</span>
                <p className="text-xs text-red-600">Severe degeneration</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-2 lg:p-3 bg-yellow-50 rounded-lg">
              <span className="font-medium text-gray-900">Ligamentum Flavum</span>
              <div className="text-right">
                <span className="text-xl lg:text-2xl font-bold text-yellow-600">45%</span>
                <p className="text-xs text-yellow-600">Moderate thickening</p>
              </div>
            </div>
            
            <div className="flex justify-between items-center p-2 lg:p-3 bg-green-50 rounded-lg">
              <span className="font-medium text-gray-900">Posterior Longitudinal</span>
              <div className="text-right">
                <span className="text-xl lg:text-2xl font-bold text-green-600">12%</span>
                <p className="text-xs text-green-600">Minimal changes</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-blue-50 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">Progression Analysis</h4>
            <p className="text-xs sm:text-sm text-blue-700">
              Degeneration rate: 8.3% per year (compared to 2.1% normal aging)
            </p>
            <p className="text-xs sm:text-sm text-blue-700 mt-1">
              Recommendation: Consider intervention within 6 months
            </p>
          </div>
        </div>

        {/* Hidden Abnormality Detection */}
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <AlertTriangle className="w-8 h-8 text-red-600" />
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Hidden Abnormality Detection</h3>
          </div>
          
          <div className="space-y-4">
            <div className="p-4 bg-red-50 border border-red-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-red-900">Potential Tumor</h4>
                <span className="bg-red-100 text-red-800 text-xs font-semibold px-2 py-1 rounded">
                  92% CONFIDENCE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-red-700 mb-2">
                Location: L4 vertebral body, posterior-lateral aspect
              </p>
              <p className="text-xs text-red-600">
                ⚠️ Requires immediate oncology consultation
              </p>
            </div>

            <div className="p-4 bg-yellow-50 border border-yellow-200 rounded-lg">
              <div className="flex items-center justify-between mb-2">
                <h4 className="font-semibold text-yellow-900">Infection Risk</h4>
                <span className="bg-yellow-100 text-yellow-800 text-xs font-semibold px-2 py-1 rounded">
                  34% CONFIDENCE
                </span>
              </div>
              <p className="text-xs sm:text-sm text-yellow-700 mb-2">
                Subtle signal changes in L4-L5 region
              </p>
              <p className="text-xs text-yellow-600">
                Consider inflammatory markers testing
              </p>
            </div>
          </div>

          <div className="mt-4 p-4 bg-gray-50 rounded-lg">
            <h4 className="font-semibold text-gray-900 mb-2">AI Explanation</h4>
            <p className="text-xs sm:text-sm text-gray-600">
              Analysis based on pixel-level intensity patterns, morphological features, 
              and comparison with 50,000+ validated cases.
            </p>
          </div>
        </div>

        {/* 3D Posture Simulation */}
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <Eye className="w-8 h-8 text-blue-600" />
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900">3D Posture Simulation</h3>
          </div>
          
          <div className="bg-gray-100 h-40 sm:h-48 rounded-lg flex items-center justify-center mb-4">
            <div className="text-center">
              <Activity className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-blue-500 mx-auto mb-2" />
              <p className="text-sm lg:text-base text-gray-600">Interactive 3D spine model</p>
              <p className="text-sm text-gray-500">Functional posture analysis</p>
            </div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div className="text-center p-3 bg-red-50 rounded-lg">
              <p className="text-xs sm:text-sm font-medium text-gray-700">Flexion Capacity</p>
              <p className="text-xl lg:text-2xl font-bold text-red-600">32°</p>
              <p className="text-xs text-red-600">Severely limited</p>
            </div>
            <div className="text-center p-3 bg-yellow-50 rounded-lg">
              <p className="text-xs sm:text-sm font-medium text-gray-700">Load Distribution</p>
              <p className="text-xl lg:text-2xl font-bold text-yellow-600">Uneven</p>
              <p className="text-xs text-yellow-600">L4-L5 overload</p>
            </div>
          </div>
        </div>

        {/* Blood Flow Analysis */}
        <div className="bg-white p-4 lg:p-6 rounded-lg shadow-sm border border-gray-200">
          <div className="flex items-center space-x-3 mb-4">
            <Heart className="w-8 h-8 text-purple-600" />
            <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Blood Flow & Oxygenation</h3>
          </div>
          
          <div className="space-y-4">
            <div className="flex items-center justify-between p-2 lg:p-3 bg-red-50 rounded-lg">
              <span className="font-medium text-gray-900">Spinal Cord Perfusion</span>
              <div className="text-right">
                <span className="text-xl lg:text-2xl font-bold text-red-600">68%</span>
                <p className="text-xs text-red-600">Reduced flow</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-2 lg:p-3 bg-yellow-50 rounded-lg">
              <span className="font-medium text-gray-900">Nerve Root Oxygenation</span>
              <div className="text-right">
                <span className="text-xl lg:text-2xl font-bold text-yellow-600">74%</span>
                <p className="text-xs text-yellow-600">Mild ischemia</p>
              </div>
            </div>
            
            <div className="flex items-center justify-between p-2 lg:p-3 bg-blue-50 rounded-lg">
              <span className="font-medium text-gray-900">Vertebral Perfusion</span>
              <div className="text-right">
                <span className="text-xl lg:text-2xl font-bold text-blue-600">91%</span>
                <p className="text-xs text-blue-600">Normal range</p>
              </div>
            </div>
          </div>

          <div className="mt-4 p-4 bg-purple-50 rounded-lg">
            <h4 className="font-semibold text-purple-900 mb-2">Diffusion Analysis</h4>
            <p className="text-xs sm:text-sm text-purple-700">
              Detected micro-vascular changes consistent with chronic compression.
              ADC values suggest early ischemic changes.
            </p>
          </div>
        </div>
      </div>

      {/* Comprehensive Report */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <div className="flex items-center space-x-3 mb-4">
          <BarChart3 className="w-8 h-8 text-green-600" />
          <h3 className="text-lg lg:text-xl font-semibold text-gray-900">Comprehensive Analysis Report</h3>
        </div>
        
        <div className="bg-gradient-to-r from-red-50 to-orange-50 p-6 rounded-lg border border-red-200">
          <div className="flex items-start space-x-3">
            <Zap className="w-6 h-6 text-red-600 mt-1" />
            <div>
              <h4 className="text-lg font-bold text-red-900 mb-2">Critical Clinical Summary</h4>
              <p className="text-xs sm:text-sm text-red-800 mb-3">
                <strong>Primary Finding:</strong> High-probability spinal tumor (92% confidence) 
                at L4 vertebral body with associated severe disc degeneration (73%) and 
                compromised spinal cord perfusion (68%).
              </p>
              
              <div className="bg-white p-4 rounded-lg mb-3">
                <h5 className="font-semibold text-gray-900 mb-2">Immediate Actions Required:</h5>
                <ul className="text-xs sm:text-sm text-gray-700 space-y-1">
                  <li>1. Urgent oncology consultation within 24-48 hours</li>
                  <li>2. Contrast-enhanced MRI to characterize lesion</li>
                  <li>3. Laboratory workup including inflammatory markers</li>
                  <li>4. Neurological assessment for cord compression signs</li>
                </ul>
              </div>

              <p className="text-xs text-red-600">
                <strong>AI Confidence:</strong> This analysis is based on patterns learned from 
                50,000+ validated cases with 97.8% accuracy rate. Clinical correlation required.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}