

const AdminDashboard = ({
  pdfName,
  setPdfName,
  handleFileChange,
  selectedFile,
  currentPage,
  currentTopic,
  setCurrentTopic,
  setCurrentPage,
  handleTopicAdd,
  isUploadDisabled,
  handleUpload,
  topics
}) => {
  return (
    <>
      <h1 className="text-3xl font-bold text-gray-800 mb-6 text-center">Admin Dashboard</h1>
      <p className="text-gray-600 text-center mb-6">Upload PDF files securely and manage your documents efficiently.</p>

      <div className="border-2 border-gray-200 rounded-lg p-6 bg-gray-50 mb-6 shadow-lg">
        <div className="mb-4">
          <input
            type="text"
            value={pdfName}
            onChange={(e) => setPdfName(e.target.value)}
            placeholder="Enter PDF name"
            className="w-full px-3 py-2 border-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500"
          />
        </div>

        <div className="flex items-center justify-center">
          <label className="flex flex-col items-center px-4 py-6 bg-gradient-to-r from-green-400 to-green-600 text-white rounded-xl shadow-lg hover:bg-green-500 cursor-pointer transition ease-in-out duration-300">
            <svg className="w-8 h-8" fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20">
              <path d="M16.707 9.293a1 1 0 00-1.414 0L11 13.586V3a1 1 0 00-2 0v10.586l-4.293-4.293a1 1 0 00-1.414 1.414l6 6a1 1 0 001.414 0l6-6a1 1 0 000-1.414z" />
            </svg>
            <span className="mt-2 text-sm leading-normal">Select a PDF file</span>
            <input
              type="file"
              accept="application/pdf"
              className="hidden"
              onChange={handleFileChange}
            />
          </label>
        </div>
        {selectedFile && (
          <p className="mt-4 text-sm text-center text-gray-700">Selected file: {selectedFile}</p>
        )}

        <div className="mt-4 flex flex-col gap-3">
          <input
            type="text"
            value={currentTopic}
            onChange={(e) => setCurrentTopic(e.target.value)}
            placeholder="Enter a topic"
            className={`w-full px-3 py-2 border-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 ${isUploadDisabled ? 'bg-gray-200 cursor-not-allowed' : 'focus:ring-green-500'}`}
            disabled={isUploadDisabled}
          />
          <input
            type="number"
            value={currentPage}
            onChange={(e) => setCurrentPage(e.target.value)}
            placeholder="Page number"
            className={`w-full px-3 py-2 border-2 rounded-lg text-gray-700 focus:outline-none focus:ring-2 ${isUploadDisabled ? 'bg-gray-200 cursor-not-allowed' : 'focus:ring-green-500'}`}
            disabled={isUploadDisabled}
          />

          <div className="mt-4">
            <button
              className={`w-full py-3 px-4 rounded-lg font-semibold transition duration-300 ease-in-out ${isUploadDisabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-xl hover:from-blue-600 hover:to-blue-700'}`}
              onClick={handleTopicAdd}
              disabled={isUploadDisabled}
            >
              Add Topic
            </button>
          </div>

          {topics.length > 0 && (
            <div className="mt-6 h-[10vh] overflow-scroll">
              <h3 className="text-lg font-semibold text-gray-700">Current Topics:</h3>
              <ul className="space-y-2">
                {topics.map((topic, index) => (
                  <li key={index} className="p-3 bg-gray-100 rounded-md shadow-sm">
                    <p className="text-gray-800">{topic.name} - Page {topic.page}</p>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>

      <button
        className={`w-full py-3 px-4 rounded-lg font-semibold transition duration-300 ease-in-out ${isUploadDisabled ? 'bg-gray-300 text-gray-500 cursor-not-allowed' : 'bg-gradient-to-r from-blue-500 to-blue-600 text-white hover:shadow-xl hover:from-blue-600 hover:to-blue-700'}`}
        onClick={handleUpload}
        disabled={isUploadDisabled}
      >
        Upload PDF
      </button>
    </>
  );
}



export default AdminDashboard;
