import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Multiplication from "./pages/Multiplication";
import Header from "./component/nav/Header";
import Table from "./pages/Tables/Table";

function App() {
  return (
    <div className="App bg-dark text-white vh-100">
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/table/:number" element={<Table />} />
      </Routes>
    </div>
  );
}

export default App;
