import Upload from '../../components/upload/upload.component';

const Admin = () => {
  // const [uploadedFiles, setUploadedFiles] = useState([]);
  // const [selectedFileIndex, setSelectedFileIndex] = useState(null);
  // const [topics, setTopics] = useState([]);

  // // Load data from local storage on component mount
  // useEffect(() => {
  //   const storedFiles = JSON.parse(localStorage.getItem('uploadedFiles')) || {};
  //   const files = Object.keys(storedFiles).map((fileName) => ({
  //     fileName,
  //     topics: storedFiles[fileName].map((topic) => ({
  //       name: topic.name,
  //       page: topic.page,
  //     })),
  //   }));
  //   setUploadedFiles(files);
  // }, []);

  // // Save data to local storage whenever uploadedFiles changes
  // useEffect(() => {
  //   const filesToSave = uploadedFiles.reduce((acc, file) => {
  //     acc[file.fileName] = file.topics.map((topic) => ({
  //       name: topic.name,
  //       page: topic.page,
  //     }));
  //     return acc;
  //   }, {});
  //   localStorage.setItem('uploadedFiles', JSON.stringify(filesToSave));
  // }, [uploadedFiles]);

  // const handleSelectFile = (index) => {
  //   setSelectedFileIndex(index);
  //   setTopics(uploadedFiles[index].topics);
  // };

  // const saveToLocalStorage = (files, fileIndex, updatedTopics) => {
  //   if (fileIndex !== null && files[fileIndex]) {
  //     const updatedFiles = [...files];
  //     updatedFiles[fileIndex].topics = updatedTopics;
  //     setUploadedFiles(updatedFiles);
  //     const filesToSave = updatedFiles.reduce((acc, file) => {
  //       acc[file.fileName] = file.topics.map((topic) => ({
  //         name: topic.name,
  //         page: topic.page,
  //       }));
  //       return acc;
  //     }, {});
  //     localStorage.setItem('uploadedFiles', JSON.stringify(filesToSave));
  //   }
  // };

  // const handleBack = () => {
  //   setSelectedFileIndex(null);
  //   setTopics([]);
  // };

  // return (
  //   <div className="bg-gradient-to-r from-purple-500 to-indigo-600 flex items-center h-[100vh] p-8">
  //     <div className="bg-white shadow-xl rounded-xl p-8 w-full flex gap-8">
  //       <FileList
  //         uploadedFiles={uploadedFiles}
  //         onSelectFile={handleSelectFile}
  //       />

  //       <div className="w-1/3">
  //         {selectedFileIndex === null ? (
  //           <FileUpload
  //             uploadedFiles={uploadedFiles}
  //             setUploadedFiles={setUploadedFiles}
  //           />
  //         ) : (
  //           <TopicManager
  //             topics={topics}
  //             setTopics={setTopics}
  //             uploadedFiles={uploadedFiles}
  //             fileIndex={selectedFileIndex}
  //             saveToLocalStorage={saveToLocalStorage}
  //             handleBack={handleBack}
  //           />
  //         )}
  //       </div>
  //     </div>
  //   </div>
  // );


  return(
    <>
    <Upload/>
    </>
  )
};

export default Admin;
