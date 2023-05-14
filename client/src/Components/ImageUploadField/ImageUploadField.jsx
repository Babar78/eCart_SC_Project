import React from "react";

function ImageUploadField({ selectedFile, onDragOver, onDrop, onChange }) {
  return (
    <div className="mt-1 flex flex-col justify-center px-6 py-5 border-2 border-gray-300 border-dashed rounded-md">
      <div
        className="space-y-1 text-center"
        style={{
          border: "1px dotted gray",
          padding: "1rem",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          height: selectedFile ? "150px" : "auto",
          overflow: "hidden",
        }}
        onDragOver={onDragOver}
        onDrop={onDrop}
      >
        {selectedFile ? (
          <>
            <img
              src={selectedFile}
              alt="Uploaded"
              style={{
                maxWidth: "100%",
                maxHeight: "100%",
                marginBottom: "1rem",
              }}
            />
          </>
        ) : (
          <>
            <svg
              className="mx-auto h-12 w-12 text-white"
              stroke="currentColor"
              fill="none"
              viewBox="0 0 48 48"
              aria-hidden="true"
            >
              <path
                d="M28 8H12a4 4 0 00-4 4v20m32-12v8m0 0v8a4 4 0 01-4 4H12a4 4 0 01-4-4v-4m32-4l-3.172-3.172a4 4 0 00-5.656 0L28 28M8 32l9.172-9.172a4 4 0 015.656 0L28 28m0 0l4 4m4-24h8m-4-4v8m-12 4h.02"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            <div className="flex text-sm text-gray-600">
              <label
                htmlFor="file-upload"
                className="relative cursor-pointer bg-white rounded font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500 px-1 mt-2"
              >
                <span className="">Upload a file</span>
                <input
                  id="file-upload"
                  name="file-upload"
                  type="file"
                  className="sr-only"
                  onChange={onChange}
                />
              </label>
              <p className="pl-1 text-white">or drag and drop</p>
            </div>
          </>
        )}
        <p className="text-xs text-white">PNG, JPG, GIF up to 10MB</p>
      </div>
      {selectedFile ? (
        <div className="flex text-sm text-gray-600">
          <label
            htmlFor="file-upload"
            className="relative cursor-pointer bg-white rounded font-medium text-orange-600 hover:text-orange-500 focus-within:outline-none focus-within:ring-2 focus-within:ring-offset-2 focus-within:ring-orange-500 px-1 mt-2"
          >
            <span className="">Upload a file</span>
            <input
              id="file-upload"
              name="file-upload"
              type="file"
              className="sr-only"
              onChange={onChange}
            />
          </label>
          <p className="pl-1 mt-2 text-white">or drag and drop</p>
        </div>
      ) : null}
    </div>
  );
}

export default ImageUploadField;
