import { BrowserRouter, Switch, Route } from "react-router-dom";
import "./App.css";
import Home from "../src/pages/Home/Home/Home";
import Navbar from "../src/pages/Home/Navbar/Navbar";
import Footer from "../src/pages/Home/Footer/Footer";
import Order from "./pages/Order/Order";
import MyOrders from "./pages/MyOrders/MyOrders";
import ManageOrders from "./pages/ManageOrders/ManageOrders";
import AddPackage from "./pages/AddPackage/AddPackage";
import Login from "./pages/Login/Login";
import AuthProvider from "./context/AuthProvider";
import PrivateRoute from "./PrivateRoute/PrivateRoute";
import NotFound from "./pages/NotFound/NotFound";

function App() {
  return (
    <AuthProvider>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route exact path="/home">
            <Home></Home>
          </Route>
          <PrivateRoute path="/packages/:id">
            <Order></Order>
          </PrivateRoute>
          <PrivateRoute path="/my-orders">
            <MyOrders></MyOrders>
          </PrivateRoute>
          <Route path="/login">
            <Login></Login>
          </Route>
          <PrivateRoute path="/manage-orders">
            <ManageOrders></ManageOrders>
          </PrivateRoute>
          <PrivateRoute path="/add-package">
            <AddPackage></AddPackage>
          </PrivateRoute>
          <Route to="*">
            <NotFound></NotFound>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </AuthProvider>
  );
}

export default App;
