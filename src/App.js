import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Sidebar from "./Components/Sidebar";
import Dashboard from "./Pages/Dashboard";
import Projects from "./Pages/Projects";
import PaymentGateway from "./Pages/PaymentGateway";


function App() {
  
  return (
    <div>
      <BrowserRouter>
          <Sidebar>
            <Routes>
              <Route path="/" element={<Dashboard />} />
              <Route path="/projects" element={<Projects />} />
              <Route path="/paymentgateway" element={<PaymentGateway />} />
            </Routes>
          </Sidebar>
      </BrowserRouter>
    </div>
  );
}

export default App;
