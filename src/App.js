// ------ App ------
import "./App.scss";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import ProfileCollection from "./components/Profile/ProfileCollection/ProfileCollection";

function App() {
  return (
    <div className="App">
      <ProfileCollection />
    </div>
  );
}

export default App;
