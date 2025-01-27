import { Routes, Route } from "react-router-dom";
import Admin from "./route/admin/admin.compoent";
import Navigation from "./route/navigation/navigation.component";
import Home from "./route/coursePortal/coursePortal.component";

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigation />}>
        <Route index element={<Home />} />
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
}

export default App;
