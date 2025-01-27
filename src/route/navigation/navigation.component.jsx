import { Outlet } from "react-router-dom";
import { Button } from '../../components/button/button.component'
const Navigation = () => {
  return (
    <div className="w-[100vw]"> 
    <header className="flex items-center justify-between px-10 border-b">
          <div className="flex items-center space-x-6">
            <img 
              src="/logo.png" 
              alt="Bharat Acharya Education" 
              className="h-20 w-40"
            />
          </div>
          <div className="flex items-center space-x-4">
            <Button variant="ghost">Courses</Button>
            <Button className="bg-blue-500 hover:bg-blue-600 text-white">
              Login
            </Button>
          </div>
        </header>
      
        <Outlet />
    </div>
  )
}

export default Navigation