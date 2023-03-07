import { BrowserRouter, Routes, Route } from "react-router-dom";
import CarsPage from "./pages/Cars";
import Home from "./pages/Home";
import Search from "./pages/Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route element={<Home />} path="/" exact />
          <Route element={<CarsPage />} path="/cars" />
          <Route element={<Search />} path="/search" />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
