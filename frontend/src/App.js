import React from "react";
import Header from "./components/partials/Header";
import Footer from "./components/partials/Footer";
import Homepage from "./components/Homepage";
import Compose from "./components/Compose";
import Blog from "./components/Blog";
import MyBlog from "./components/MyBlog";
import Signup from "./components/Signup";
import Login from "./components/Login";
import {
  BrowserRouter as Router,
  Switch,
  Route, 
} from "react-router-dom";


function App() {

  return (
    <Router>
      <Switch>
        <Route exact path="/">
          <Header  />
          <Homepage />
        </Route>
        <Route exact path="/blog">
          <Header />
          <Blog  />
        </Route>
        <Route exact path="/myblog">
          <Header />
          <MyBlog />
        </Route>
        <Route exact path="/compose">
          <Header />
          <Compose />
        </Route>
        <Route exact path="/signup">
          <Signup />
        </Route>
        <Route exact path="/login">
          <Login />
        </Route>
        <Route exact path="/logout">
          <Logout />
          <Header />
          <Homepage />
        </Route>
      </Switch>
      <Footer />
    </Router>
    );
}


function Logout() {
  localStorage.removeItem("usernaam");
  return null;
}

export default App;
