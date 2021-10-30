import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home/Home";
import Navbar from "../src/pages/Home/Navbar/Navbar";
import Footer from "../src/pages/Home/Footer/Footer";
import Order from "./pages/Order/Order";
import MyOrders from "./pages/MyOrders/MyOrders";
import ManageOrders from "./pages/ManageOrders/ManageOrders";
import AddPackage from "./pages/AddPackage/AddPackage";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar></Navbar>
        <Switch>
          <Route exact path="/">
            <Home></Home>
          </Route>
          <Route path="/packages/:id">
            <Order></Order>
          </Route>
          <Route path="/my-orders">
            <MyOrders></MyOrders>
          </Route>
          <Route path="/manage-orders">
            <ManageOrders></ManageOrders>
          </Route>
          <Route path="/add-package">
            <AddPackage></AddPackage>
          </Route>
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
