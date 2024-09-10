import Navbar from "./Components/common/Navbar";
import Homepage from "./Components/Pages/Homepage";
import Iprmanagement from "./Components/Pages/Iprmanagement";
import About from "./Components/Pages/About";

function App() {
  return (
    <div className="App bg-slate-500 w-full h-full">
      <div  className="w-full bg-grey-900 h-11/12 p-6">
      </div>
    <Navbar/>
    <Homepage/>
    <About/>
    <Iprmanagement/>
    </div>
  );
}

export default App;
