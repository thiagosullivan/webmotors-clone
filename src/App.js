import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Login from "./pages/Login";
import RegisterPage from "./pages/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<Login />} path="/login" />
          <Route element={<RegisterPage />} path="/login/registro" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
