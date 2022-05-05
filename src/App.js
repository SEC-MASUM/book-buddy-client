import { Route, Routes } from "react-router-dom";
import { ToastContainer } from "react-toastify";
import "./App.css";
import AddInventory from "./Pages/AddInventory/AddInventory";
import Admin from "./Pages/Admin/Admin";
import Blogs from "./Pages/Blogs/Blogs";
import Home from "./Pages/Home/Home";
import InventoryDetails from "./Pages/InventoryDetails/InventoryDetails";
import Login from "./Pages/Login/Login";
import ManageInventories from "./Pages/ManageInventories/ManageInventories";
import MyItems from "./Pages/MyItems/MyItems";
import NotFound from "./Pages/NotFound/NotFound";
import PrivateRoute from "./Pages/PrivateRoute/PrivateRoute";
import ResetPassword from "./Pages/ResetPassword/ResetPassword";
import Header from "./Pages/Shared/Header/Header";
import SignUp from "./Pages/SignUp/SignUp";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route
          path="/admin"
          element={
            <PrivateRoute>
              <Admin />
            </PrivateRoute>
          }
        />
        <Route path="login" element={<Login />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/resetPassword" element={<ResetPassword />} />
        <Route
          path="/manageInventories"
          element={
            <PrivateRoute>
              <ManageInventories />
            </PrivateRoute>
          }
        />
        <Route
          path="/addInventory"
          element={
            <PrivateRoute>
              <AddInventory />
            </PrivateRoute>
          }
        />
        <Route
          path="/inventoryDetails/:id"
          element={
            <PrivateRoute>
              <InventoryDetails />
            </PrivateRoute>
          }
        />
        <Route
          path="/myItems"
          element={
            <PrivateRoute>
              <MyItems />
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <ToastContainer />
    </div>
  );
}

export default App;
