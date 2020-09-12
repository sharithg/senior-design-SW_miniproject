import React from "react";
import { Switch, BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Login, Register } from "./components";
import { AuthProvider } from "./Auth";
import PrivateRoute from "./common/PrivateRoute";
import Admin from "./components/Admin";
import AdminRoute from "./common/AdminRoute";
import NotFound from "./common/NotFound";
class App extends React.Component {
  render() {
    return (
      <AuthProvider>
        <Router>
          <Switch>
            <PrivateRoute exact path="/" component={Home} />
            <AdminRoute exact path="/admin" component={Admin} />
            <Route exact path="/login" component={Login} />
            <Route exact path="/register" component={Register} />
            <Route
              component={() => (
                <NotFound error_code="404" error_message="Page not found" />
              )}
            />
          </Switch>
        </Router>
      </AuthProvider>
    );
  }
}

export default App;
