import React, { useState } from "react";
import { UploadCloud, FileImage, CheckCircle } from "lucide-react";

const FileUpload: React.FC = () => {
  const [file, setFile] = useState<File | null>(null);
  const [preview, setPreview] = useState<string | null>(null);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files.length > 0) {
      const selected = e.target.files[0];
      setFile(selected);
      setPreview(URL.createObjectURL(selected));
    }
  };

  const handleUpload = () => {
    if (!file) {
      alert("Please select a file first!");
      return;
    }

    const formData = new FormData();
    formData.append("file", file);

    fetch("http://localhost:5000/upload", {
      method: "POST",
      body: formData,
    })
      .then((res) => res.json())
      .then((data) => {
        console.log("Upload success:", data);
        alert("File uploaded successfully!");
      })
      .catch((err) => {
        console.error("Upload error:", err);
        alert("Upload failed!");
      });
  };

  return (
    <div className="max-w-2xl mx-auto mt-12 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-semibold text-gray-800 mb-6">
        Upload Patient Scan
      </h2>

      {/* Drop Zone */}
      <label
        htmlFor="scan"
        className="flex flex-col items-center justify-center w-full h-40 border-2 border-dashed rounded-xl cursor-pointer bg-gray-50 hover:bg-gray-100 transition"
      >
        <UploadCloud className="w-12 h-12 text-blue-500 mb-2" />
        <span className="text-gray-600">
          Drag & drop your scan here, or{" "}
          <span className="text-blue-600 font-medium">browse</span>
        </span>
        <input
          id="scan"
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
      </label>

      {/* File name & preview */}
      {file && (
        <div className="mt-6 flex items-center gap-4 p-4 bg-gray-50 rounded-xl">
          <FileImage className="w-8 h-8 text-blue-600" />
          <div>
            <p className="text-gray-800 font-medium">{file.name}</p>
            {preview && (
              <img
                src={preview}
                alt="preview"
                className="mt-2 h-20 rounded-lg object-cover shadow"
              />
            )}
          </div>
        </div>
      )}

      <button
        onClick={handleUpload}
        className="mt-6 w-full py-3 bg-blue-600 hover:bg-blue-700 text-white font-medium rounded-xl shadow transition"
      >
        <CheckCircle className="inline w-5 h-5 mr-2" />
        Upload & Analyze
      </button>
    </div>
  );
};

export default FileUpload;
