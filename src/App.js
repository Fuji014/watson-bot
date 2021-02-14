
// components
import Home from './pages/Home';
import Map from './pages/Map';

// router
import { Switch, Route } from "react-router-dom";

// dependencys
import "leaflet/dist/leaflet.css";



function App() {
  return (
    <div>
      <Switch>
        <Route path="/" component={Home} exact />
        <Route path="/map" component={Map}  />
      </Switch>
    </div>
  );
}

export default App;
