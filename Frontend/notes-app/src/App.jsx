import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home/home";
import Login from "./pages/Login/login";
import Signup from "./pages/Signup/signup";

const routes=(
  <Router>
    <Routes>
      <Route path ="/dashboard" exact  element={<Home />}  />
      <Route path ="/" exact  element={<Login />}  />
      <Route path ="/signup" exact  element={<Signup />}  />
      {/* <Route path="*" element=()/> */}
    </Routes>
  </Router>
)
const App = () => {
     return(
        <div>
          {routes}
        </div>
     )
}
export default App;