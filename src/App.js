import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Home, Login, Register } from "./components";
import { AuthProvider } from "./Auth";

class App extends React.component {
  

  
  render() {
    return (
      <AuthProvider>
      <Router>
        <div>
          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login} />
          <Route exact path="/register" component={Register} />
        </div>
      </Router>
    </AuthProvider>
    );
  }
}

export default App;  
