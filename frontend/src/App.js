import { Outlet } from 'react-router-dom';
import Navbar from "./Components/common/Navbar";
import { Route, Routes } from "react-router-dom";
import Homepage from "./Components/Pages/Homepage";
import Iprmanagement from "./Components/Pages/Iprmanagement";
import Navbar from "./Components/common/Navbar";
import Error from "./Components/Pages/Error";
import Resources from "./Components/Pages/Resources";
import Research from "./Components/Pages/Research";

function App() {
  return (
    <div className="App bg-slate-500 w-full h-full">
      <div className="w-full bg-grey-900 h-11/12 p-6">
        <Navbar />
      </div>
      <Outlet />
    </div>
  );
}

export default App;