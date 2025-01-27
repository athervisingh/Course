import { Routes, Route } from "react-router-dom";
import Admin from "./route/admin/admin.compoent";
import Navigation from "./route/navigation/navigation.component";
import Home from "./route/coursePortal/coursePortal.component";
import CourseDetail from "./route/courseDetail/courseDetail.component"; // Import the dynamic course detail component

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        {/* Dynamic route for course details */}
        <Route path="/course/:title" element={<CourseDetail />} />
      </Route>
    </Routes>
  );
}

export default App;
