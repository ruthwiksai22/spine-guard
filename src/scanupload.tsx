import React, { useState } from "react";
import {
  Upload,
  FileImage,
  CheckCircle,
  AlertCircle,
  X,
  Eye,
  Download,
  RotateCcw,
} from "lucide-react";

interface UploadedFile {
  id: number;
  name: string;
  type: string;
  size: string;
  status: "processed" | "processing";
  uploadTime: string;
  findings: string | null;
}

export default function ScanUpload() {
  const [uploadedFiles, setUploadedFiles] = useState<UploadedFile[]>([
    {
      id: 1,
      name: "L4-L5_MRI_Sagittal.dcm",
      type: "MRI",
      size: "2.4 MB",
      status: "processed",
      uploadTime: "2024-01-15 14:32",
      findings: "Mild disc degeneration detected",
    },
    {
      id: 2,
      name: "Lumbar_Xray_AP.jpg",
      type: "X-Ray",
      size: "1.8 MB",
      status: "processing",
      uploadTime: "2024-01-15 14:35",
      findings: null,
    },
  ]);

  const [dragActive, setDragActive] = useState(false);

  const handleDrag = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    if (e.type === "dragenter" || e.type === "dragover") {
      setDragActive(true);
    } else if (e.type === "dragleave") {
      setDragActive(false);
    }
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setDragActive(false);

    // Simulate new file upload
    const newFile: UploadedFile = {
      id: uploadedFiles.length + 1,
      name: "New_Scan.dcm",
      type: "MRI",
      size: "3.2 MB",
      status: "processing",
      uploadTime: new Date().toLocaleString(),
      findings: null,
    };

    setUploadedFiles((prev) => [...prev, newFile]);
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-xl sm:text-2xl lg:text-3xl font-bold text-gray-900">
          Medical Scan Upload
        </h2>
        <div className="hidden sm:flex items-center space-x-2 bg-green-50 px-3 py-2 rounded-lg">
          <CheckCircle className="w-5 h-5 text-green-600" />
          <span className="text-sm font-medium text-green-800">
            DICOM Compatible
          </span>
        </div>
      </div>

      {/* Upload Area */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
          Upload Medical Images
        </h3>

        <div
          className={`border-2 border-dashed rounded-lg p-4 sm:p-6 lg:p-8 text-center transition-colors ${
            dragActive
              ? "border-blue-500 bg-blue-50"
              : "border-gray-300 hover:border-gray-400"
          }`}
          onDragEnter={handleDrag}
          onDragLeave={handleDrag}
          onDragOver={handleDrag}
          onDrop={handleDrop}
        >
          <Upload className="w-8 h-8 sm:w-10 sm:h-10 lg:w-12 lg:h-12 text-gray-400 mx-auto mb-3 lg:mb-4" />
          <h4 className="text-base lg:text-lg font-semibold text-gray-900 mb-2">
            Upload MRI or X-Ray Scans
          </h4>
          <p className="text-sm lg:text-base text-gray-600 mb-3 lg:mb-4">
            Drag and drop files here, or click to select files
          </p>
          <p className="text-xs sm:text-sm text-gray-500 mb-3 lg:mb-4">
            Supported formats: DICOM (.dcm), JPEG, PNG, TIFF | Max file size:
            50MB
          </p>
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors">
            Select Files
          </button>
        </div>

        {/* Scan Support Info */}
        <div className="mt-4 lg:mt-6 grid grid-cols-1 md:grid-cols-2 gap-3 lg:gap-4">
          <div className="bg-blue-50 p-4 rounded-lg">
            <h4 className="font-semibold text-blue-900 mb-2">MRI Scans</h4>
            <ul className="text-xs sm:text-sm text-blue-700 space-y-1">
              <li>• T1, T2, FLAIR sequences supported</li>
              <li>• Sagittal, Coronal, Axial views</li>
              <li>• 3D reconstruction ready</li>
            </ul>
          </div>

          <div className="bg-green-50 p-4 rounded-lg">
            <h4 className="font-semibold text-green-900 mb-2">X-Ray Images</h4>
            <ul className="text-xs sm:text-sm text-green-700 space-y-1">
              <li>• AP, Lateral, Oblique views</li>
              <li>• Flexion/Extension studies</li>
              <li>• Digital or film radiographs</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Uploaded Files */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
          Recent Uploads
        </h3>

        <div className="overflow-x-auto -mx-6 px-6">
          <table className="min-w-full divide-y divide-gray-200">
            <thead className="bg-gray-50">
              <tr>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  File Details
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Status
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Analysis Results
                </th>
                <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="bg-white divide-y divide-gray-200">
              {uploadedFiles.map((file) => (
                <tr key={file.id} className="hover:bg-gray-50">
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="flex items-center">
                      <FileImage className="w-8 h-8 text-blue-500 mr-3" />
                      <div>
                        <div className="text-sm font-medium text-gray-900">
                          {file.name}
                        </div>
                        <div className="text-sm text-gray-500">
                          {file.type} • {file.size} • {file.uploadTime}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span
                      className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                        file.status === "processed"
                          ? "bg-green-100 text-green-800"
                          : "bg-yellow-100 text-yellow-800"
                      }`}
                    >
                      {file.status === "processed" ? (
                        <>
                          <CheckCircle className="w-3 h-3 mr-1" />
                          Processed
                        </>
                      ) : (
                        <>
                          <RotateCcw className="w-3 h-3 mr-1 animate-spin" />
                          Processing
                        </>
                      )}
                    </span>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <div className="text-sm text-gray-900">
                      {file.findings ? (
                        <div className="flex items-center">
                          <AlertCircle className="w-4 h-4 text-yellow-500 mr-2" />
                          {file.findings}
                        </div>
                      ) : (
                        <span className="text-gray-400">Analyzing...</span>
                      )}
                    </div>
                  </td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium">
                    <div className="flex items-center space-x-2">
                      <button className="text-blue-600 hover:text-blue-900">
                        <Eye className="w-4 h-4" />
                      </button>
                      <button className="text-green-600 hover:text-green-900">
                        <Download className="w-4 h-4" />
                      </button>
                      <button className="text-red-600 hover:text-red-900">
                        <X className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      {/* 3D Visualization Preview */}
      <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-200">
        <h3 className="text-lg lg:text-xl font-semibold text-gray-900 mb-4">
          3D Visualization Preview
        </h3>
        <div className="bg-gray-100 h-48 sm:h-56 lg:h-64 rounded-lg flex items-center justify-center">
          <div className="text-center">
            <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 bg-blue-500 rounded-full mx-auto mb-3 lg:mb-4 flex items-center justify-center">
              <Eye className="w-8 h-8 text-white" />
            </div>
            <p className="text-sm lg:text-base text-gray-600">
              3D spine model will appear here
            </p>
            <p className="text-sm text-gray-500 mt-2">
              Upload a DICOM scan to generate 3D visualization
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
