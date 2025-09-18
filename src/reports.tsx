import React, { useState } from "react";
import {
  FileText,
  Download,
  Share,
  Printer,
  Calendar,
  User,
  TrendingUp,
  AlertTriangle,
  CheckCircle,
  BarChart3,
  Activity,
} from "lucide-react";

// Define report keys as a union type
type ReportKey = "diagnostic" | "statistical" | "comparison";

interface Report {
  title: string;
  type: string;
  generated: string;
  pages: number;
}

export default function Reports() {
  const [selectedReport, setSelectedReport] = useState<ReportKey>("diagnostic");
  const [dateRange, setDateRange] = useState("30days");

  const reports: Record<ReportKey, Report> = {
    diagnostic: {
      title: "Diagnostic Analysis Report",
      type: "Clinical Summary",
      generated: "2024-01-15 15:45",
      pages: 8,
    },
    statistical: {
      title: "Statistical Performance Report",
      type: "Analytics Dashboard",
      generated: "2024-01-15 14:30",
      pages: 12,
    },
    comparison: {
      title: "Temporal Comparison Report",
      type: "Longitudinal Analysis",
      generated: "2024-01-15 13:20",
      pages: 6,
    },
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          Clinical Reports & Analytics
        </h2>

        <div className="flex flex-col sm:flex-row items-end sm:items-center space-y-2 sm:space-y-0 sm:space-x-3">
          <select
            value={dateRange}
            onChange={(e) => setDateRange(e.target.value)}
            className="border border-gray-300 rounded-lg px-3 lg:px-4 py-2 text-sm focus:ring-2 focus:ring-blue-500"
          >
            <option value="7days">Last 7 days</option>
            <option value="30days">Last 30 days</option>
            <option value="90days">Last 90 days</option>
            <option value="1year">Last year</option>
          </select>

          <button className="bg-blue-600 text-white px-3 lg:px-4 py-2 text-sm rounded-lg hover:bg-blue-700 transition-colors">
            Generate Report
          </button>
        </div>
      </div>

      {/* Report Selection */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
          Available Reports
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-4">
          {(Object.entries(reports) as [ReportKey, Report][]).map(
            ([key, report]) => (
              <div
                key={key}
                onClick={() => setSelectedReport(key)}
                className={`p-4 rounded-lg border-2 cursor-pointer transition-colors ${
                  selectedReport === key
                    ? "border-blue-500 bg-blue-50"
                    : "border-gray-200 hover:border-gray-300"
                }`}
              >
                <div className="flex items-center space-x-2 lg:space-x-3 mb-2">
                  <FileText className="w-6 h-6 text-blue-600" />
                  <h4 className="text-sm lg:text-base font-semibold text-gray-900">
                    {report.title}
                  </h4>
                </div>
                <p className="text-xs sm:text-sm text-gray-600 mb-1">
                  {report.type}
                </p>
                <p className="text-xs text-gray-500">
                  Generated: {report.generated} • {report.pages} pages
                </p>
              </div>
            )
          )}
        </div>
      </div>

      {/* Rest of your code unchanged ... */}
      {/* (the Diagnostic / Statistical / Comparison preview blocks + Info panels) */}
    </div>
  );
}
