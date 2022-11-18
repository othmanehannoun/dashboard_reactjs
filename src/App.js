import "./App.css";
import SideMenu from "./components/SideMenu";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import { useState } from "react";

import Dashboard from "./screens/Dashboard" 
import Users from "./screens/Users"
import Admin from "./screens/Admin";
import AppHeader from "./components/AppHeader";
import Pudget from "./screens/Budget";
const ShowAdmins = () => <h3>Admin/Welcome to page show All admin</h3>;
const AddAdmin = () => <h3>Admin/Welcome to page ADD admin</h3>;
const Videos = () => <h3>Setting</h3>;
const Design = () => <h3>logOut</h3>;


function App() {
  const [inactive, setInactive] = useState(false);

  return (
    <div className="App">
     
      <Router>
       
      <div className="home">
         
            <SideMenu
              onCollapse={(inactive) => {
                console.log("AZERTY", inactive);
                setInactive(inactive);
              }}
            />

          <div className={`containerApp ${inactive ? "inactive" : ""}`}>
            <AppHeader />

            <Switch>
              <Route exact path={"/"}><Dashboard /> </Route>

              <Route exact path={"/users"}><Users /> </Route>

              <Route exact path={"/admin"}><Admin /> </Route>

              <Route path={"/admin/afficher"}><ShowAdmins /> </Route>

              <Route path={"/admin/ajouter"}><AddAdmin /> </Route>

              <Route path={"/pudget"}><Pudget /> </Route>

              <Route path={"/setting"}><Videos /> </Route>

              <Route path={"/logout"}><Design /> </Route>

            </Switch>
          </div>
        </div>

      
      </Router>
    </div>
  );
}

export default App;

