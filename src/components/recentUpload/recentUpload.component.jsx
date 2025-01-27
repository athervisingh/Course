

const RecentUpload = ({ uploadedFiles, handleSelectFile }) => {
  return (
    <div className="w-2/3 overflow-y-auto bg-gradient-to-t from-gray-50 via-gray-100 to-gray-200 rounded-xl p-6 border-2 border-gray-200">
      <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Uploads</h2>
      {uploadedFiles.length > 0 ? (
        <ul className="space-y-4">
          {uploadedFiles.map((file, index) => (
            <li
              key={index}
              className="p-4 bg-white rounded-xl shadow-lg hover:bg-gray-100 transition duration-300"
              onClick={() => handleSelectFile(index)}
            >
              <div>
                <p className="text-gray-800 font-semibold truncate">{file.fileName}</p>
                {file.topics.map((topic, index) => (
                  <p key={index} className="text-gray-600 text-sm truncate">
                    Topic: {topic.name}, Page: {topic.page}
                  </p>
                ))}
              </div>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-gray-600 text-center">No recent uploads</p>
      )}
    </div>
  );
};



export default RecentUpload;
