import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Dashboard from "./containers/Dashboard";
import Welcome from "./containers/pages/welcome/Welcome";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="main" element={<Dashboard />}>
            <Route path="welcome" element={<Welcome />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
