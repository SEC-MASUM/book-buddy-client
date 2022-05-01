import { Route, Routes } from "react-router-dom";
import "./App.css";
import Admin from "./Pages/Admin/Admin";
import Home from "./Pages/Home/Home";
import Login from "./Pages/Login/Login";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Header from "./Pages/Shared/Header/Header";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/admin" element={<Admin />} />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route path="/manageInventories" element={<ManageInventories />} />
      </Routes>
    </div>
  );
}

export default App;
