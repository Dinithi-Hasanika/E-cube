import Navbar from "./Components/Navbar";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import 'bootstrap/dist/css/bootstrap.min.css';
import Users from "./Components/Dashboard/Users";
import Customize from "./Components/Dashboard/Customize";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Switch>
        <Route exact path="/users" to component={Users} />
        <Route exact path="/customize" to component={Customize} />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
