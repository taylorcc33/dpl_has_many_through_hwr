import logo from "./logo.svg";
import "./App.css";
import { Container } from "semantic-ui-react";
import { Route, Switch } from "react-router-dom";
import Home from "./demo/Home";
import Appointments from "./demo/Appointments";
import NoMatch from "./components/NoMatch";
import Navbar from "./components/Navbar";

function App() {
  return (
    <>
      <Navbar />
      <Container>
        <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/appointments" component={Appointments} />
          <Route component={NoMatch} />
        </Switch>
      </Container>
    </>
  );
}

export default App;
