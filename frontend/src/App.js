import { Outlet } from 'react-router-dom';
import Navbar from "./Components/common/Navbar";


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