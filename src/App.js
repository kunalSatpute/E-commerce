import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./components/Home";
import AddProduct from "./components/AddProduct";
import UpdateProduct from "./components/UpdateProduct";
import Login from "./components/Login";
import Register from "./components/Register";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Header />
        <h1>E-commerce Project</h1>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/add" element={<AddProduct />} />
          <Route path="/update" element={<UpdateProduct />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />

        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
