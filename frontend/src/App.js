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
      <Navbar/>
      <Routes>
        <Route path="/" element={<Homepage/>} />
        {/* <Route path="/login" element={<Login/>}/>
        <Route path="/signup" element={<Signup/>}/> */}
        <Route path="/iprmanagement" element={<Iprmanagement/>}/>
        <Route path="/research" element={<Research/>}/>
        <Route path="/resources" element={<Resources/>}/>
        <Route path='*' element={<Error/>}/>
      </Routes>
    </div>
  );
}

export default App;
