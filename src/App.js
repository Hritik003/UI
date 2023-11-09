
import './App.css';
import Login from './components/login';
import Dashboard from './pages/dashboard';
import {Routes, Route, BrowserRouter} from "react-router-dom";


function App() {
  return (
    <>
    <BrowserRouter>
      <Routes>
        <Route path="/" exact element={<Login />}></Route>
        <Route path="/Dashboard" exact element={<Dashboard />}></Route>
        <Route path="/Dashboard/Products" exact element={<Dashboard />}></Route>

        {/* <Route path="/Buy" exact element={<Buy />}></Route>
        <Route path="/Sell" exact element={<Home />}></Route> */}
        
      </Routes>
    
    </BrowserRouter>
    </>
  );
}

export default App;
