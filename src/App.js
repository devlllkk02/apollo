// ------ App ------
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProfileCollection from "./components/Profile/ProfileCollection/ProfileCollection";
import ProfileCreated from "./components/Profile/ProfileCreated/ProfileCreated";
import ProfileFavourite from "./components/Profile/ProfileFavourite/ProfileFavourite";
function App() {
  return (
    <Router>
      <div className="App">
        <Switch>
          {/* Collection */}
          <Route path="/" exact>
            <ProfileCollection />
          </Route>
          {/* Created */}
          <Route path="/created">
            <ProfileCreated />
          </Route>
          {/* Favourite */}
          <Route>
            <ProfileFavourite />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
