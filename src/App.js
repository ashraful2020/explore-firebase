import "./App.css";
import Home from "./Pages/Home/Home/Home";
import "bootstrap/dist/css/bootstrap.min.css";
import { Switch, Route } from "react-router-dom";
import About from "./Pages/Home/About/About";
import Services from "./Pages/Home/Services/Services";
import NotFound from "./Pages/Shared/NotFound";
import Header from "./Pages/Shared/Header/Header";
import PrivateRoute from "./Pages/Home/PrivateRoute/PrivateRoute";
import PrivateRoute1 from "./Pages/Home/PrivateRoute/PrivateRoute1";
import Register from "./Pages/Authentication/Register";
import Login from "./Pages/Authentication/Login";
import Details from "./Pages/Home/Details/Details";
import AuthProvider from "./Pages/Contexts/AuthProvider";
import ProtectedRoute from "./Pages/Shared/PrivateRoute/ProtectedRoute";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Header />
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/home">
            <Home />
          </Route>
          <Route path="/about">
            <About />
          </Route>
          <Route path="/services">
            <Services />
          </Route>

          <Route path="/details/:id">
            <Details />
          </Route>

          
          <ProtectedRoute path="/private-route">
            <PrivateRoute />
          </ProtectedRoute>
          <ProtectedRoute path="/private-route1">
            <PrivateRoute1 />
          </ProtectedRoute>

          <Route path="/register">
            <Register />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route exact path="*">
            <NotFound />
          </Route>
        </Switch>
      </AuthProvider>
    </div>
  );
}

export default App;
