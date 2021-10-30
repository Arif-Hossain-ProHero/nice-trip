import { BrowserRouter, Switch, Route } from "react-router-dom";
import Home from "../src/pages/Home/Home/Home";
import Navbar from "../src/pages/Home/Navbar/Navbar";
import Footer from "../src/pages/Home/Footer/Footer";
import Order from "./pages/Order/Order";
import MyOrders from "./pages/MyOrders/MyOrders";

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
        </Switch>
        <Footer></Footer>
      </BrowserRouter>
    </div>
  );
}

export default App;
