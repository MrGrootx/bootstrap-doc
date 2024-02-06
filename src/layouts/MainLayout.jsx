import { Outlet } from "react-router-dom";
import TheNavbar from "../components/TheNavbar";
import Home from "../Pages/Home";
// import Home from "../Pages/Home";
const MainLayout = () => {
  return (
    <div>
       <div>
      <TheNavbar />
      <Home/>
      <div>
      <Outlet />
      </div>
    </div>
    </div>
  )
}

export default MainLayout