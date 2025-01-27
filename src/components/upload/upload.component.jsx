// import React from 'react'
import { useEffect,useState } from 'react';
import RecentUpload from '../recentUpload/recentUpload.component';
import AdminDashboard from '../adminDashboard/adminDashboard.component';
const Upload = () => {
    const [uploadedFiles, setUploadedFiles] = useState([]);
      const [selectedFile, setSelectedFile] = useState(null);
      const [pdfName, setPdfName] = useState(''); // New state for custom PDF name
      const [topics, setTopics] = useState([]);
      const [currentTopic, setCurrentTopic] = useState('');
      const [currentPage, setCurrentPage] = useState('');
      const [selectedFileIndex, setSelectedFileIndex] = useState(null);
    
      // Load data from local storage on component mount
      useEffect(() => {
        const storedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || {};
        const files = Object.keys(storedFiles).map((fileName) => ({
          fileName,
          topics: storedFiles[fileName].map((topic) => ({
            name: topic.name,
            page: topic.page,
          })),
        }));
        setUploadedFiles(files);
      }, []);
    
      // Save data to local storage whenever uploadedFiles changes
      useEffect(() => {
        const filesToSave = uploadedFiles.reduce((acc, file) => {
          acc[file.fileName] = file.topics.map((topic) => ({
            name: topic.name,
            page: topic.page,
          }));
          return acc;
        }, {});
        localStorage.setItem('uploadedFiles', JSON.stringify(filesToSave));
      }, [uploadedFiles]);
    
      const handleFileChange = (event) => {
        const file = event.target.files[0];
        if (file) {
          setSelectedFile(file.name);
        }
      };
    
      const handleTopicAdd = () => {
        if (currentTopic.trim() !== '' && currentPage.trim() !== '') {
          const newTopic = {
            name: currentTopic.trim(),
            page: currentPage.trim(),
          };
    
          setTopics((prevTopics) => {
            const updatedTopics = [...prevTopics, newTopic];
            saveToLocalStorage(uploadedFiles, selectedFileIndex, updatedTopics);
            return updatedTopics;
          });
    
          setCurrentTopic('');
          setCurrentPage('');
        }
      };
    
      const handleUpload = async () => {
        if (selectedFile && pdfName.trim() !== '' && topics.length > 0) {
          const formData = new FormData();
          const fileInput = document.querySelector('input[type="file"]');
          formData.append('file', fileInput.files[0]); // Add the file to the form data
          formData.append('pdfName', pdfName.trim()); // Add the custom PDF name
          formData.append('topics', JSON.stringify(topics)); // Add the topics as a JSON string
    console.log(formData);
          // try {
          //   const response = await fetch('http://your-backend-url/upload', {
          //     method: 'POST',
          //     body: formData,
          //   });
    
          //   if (response.ok) {
          //     const data = await response.json();
          //     console.log('Upload successful:', data);
    
          //     const newFile = { fileName: pdfName.trim(), topics };
          //     setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
          //     setSelectedFile(null);
          //     setPdfName('');
          //     setTopics([]);
          //     alert('Upload successful!');
          //   } else {
          //     console.error('Failed to upload:', response.statusText);
          //     alert('Failed to upload. Please try again.');
          //   }
          // } catch (error) {
          //   console.error('Error uploading:', error);
          //   alert('An error occurred while uploading. Please try again.');
          // }
          const newFile = { fileName: pdfName.trim(), topics };
              setUploadedFiles((prevFiles) => [...prevFiles, newFile]);
              setSelectedFile(null);
              setPdfName('');
              setTopics([]);
              alert('Upload successful!');
         
        } else {
          alert('Please fill in all fields before uploading.');
        }
      };
    
      const handleTopicDelete = (fileIndex, topicIndex) => {
        const updatedFiles = [...uploadedFiles];
        updatedFiles[fileIndex].topics.splice(topicIndex, 1);
        setUploadedFiles(updatedFiles);
        setTopics(updatedFiles[fileIndex].topics);
        saveToLocalStorage(updatedFiles, fileIndex, updatedFiles[fileIndex].topics);
      };
    
      const handleSelectFile = (index) => {
        setSelectedFileIndex(index);
        setTopics(uploadedFiles[index].topics);
      };
    
      const handlePageUpdate = (index, newPage) => {
        const updatedTopics = [...topics];
        updatedTopics[index].page = newPage;
        setTopics(updatedTopics);
        saveToLocalStorage(uploadedFiles, selectedFileIndex, updatedTopics);
      };
    
      const saveToLocalStorage = (files, fileIndex, updatedTopics) => {
        if (fileIndex !== null && files[fileIndex]) {
          const updatedFiles = [...files];
          updatedFiles[fileIndex].topics = updatedTopics;
          setUploadedFiles(updatedFiles);
          const filesToSave = updatedFiles.reduce((acc, file) => {
            acc[file.fileName] = file.topics.map((topic) => ({
              name: topic.name,
              page: topic.page,
            }));
            return acc;
          }, {});
          localStorage.setItem('uploadedFiles', JSON.stringify(filesToSave));
        }
      };
    
      const isUploadDisabled = !selectedFile || pdfName.trim() === '';
    
      const handleBack = () => {
        setSelectedFileIndex(null);
        setTopics([]);
      };
    
      return (
        <div className="bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center h-[100vh] p-8">
          <div className="bg-white shadow-xl rounded-xl p-8 w-full flex gap-8">
            <RecentUpload
            uploadedFiles={uploadedFiles}
            handleSelectFile={handleSelectFile}
            />
    
            <div className="w-1/3">
              {selectedFileIndex === null ? (
                <>
                  <AdminDashboard
                  pdfName={pdfName}
                  setPdfName={setPdfName}
                  handleFileChange={handleFileChange}
                  selectedFile={selectedFile}
                  currentPage={currentPage}
                  currentTopic={currentTopic}
                  setCurrentTopic={setCurrentTopic}
                  setCurrentPage={setCurrentPage}
                  handleTopicAdd={handleTopicAdd}
                  isUploadDisabled={isUploadDisabled}
                  handleUpload={handleUpload}
                  topics={topics}
                  />
                </>
              ) : (
                <>
                  <h2 className="text-xl font-semibold mb-4">Topics for {uploadedFiles[selectedFileIndex].fileName}</h2>
                  <ul className="space-y-4">
                    {topics.map((topic, index) => (
                      <li key={index} className="p-4 bg-white rounded-xl shadow-lg">
                        <div>
                          <p className="text-gray-800 font-semibold">{topic.name}</p>
                          <p className="text-gray-600">Page: 
                            <input
                              type="number"
                              value={topic.page}
                              onChange={(e) => handlePageUpdate(index, e.target.value)}
                              className="w-16 p-1 border rounded-md text-gray-700"
                            />
                          </p>
                        </div>
                        <div className="flex gap-2 mt-3">
                          <button
                            className="text-blue-500 hover:underline text-sm"
                            onClick={() => {
                              const updatedTopic = prompt(
                                'Update topic name:',
                                topic.name
                              );
                              if (updatedTopic.trim() !== '') {
                                const updatedTopics = [...topics];
                                updatedTopics[index].name = updatedTopic.trim();
                                setTopics(updatedTopics);
                                saveToLocalStorage(uploadedFiles, selectedFileIndex, updatedTopics);
                              }
                            }}
                          >
                            Update Topic
                          </button>
                          <button
                            className="text-red-500 hover:underline text-sm"
                            onClick={() => handleTopicDelete(selectedFileIndex, index)}
                          >
                            Delete Topic
                          </button>
                        </div>
                      </li>
                    ))}
                  </ul>
                  {/* Back button */}
                  <button
                    className="mt-4 w-full py-3 px-4 rounded-lg font-semibold bg-gradient-to-r from-gray-400 to-gray-500 text-white hover:bg-gray-600"
                    onClick={handleBack}
                  >
                    Back to Upload
                  </button>
                </>
              )}
            </div>
          </div>
        </div>
      );
    
  
}

export default Upload