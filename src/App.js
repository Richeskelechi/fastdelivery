import "./assets/css/style.css";
import { BrowserRouter as Router, Switch, Route, Redirect } from 'react-router-dom';
import Home from "./components/Home";
import Service from "./components/Services";
import About from "./components/About";
import Contact from "./components/Contact";
import Track from "./components/Track";
import NotFound from "./components/NotFound";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Router>
      <Switch>
        <Route exact path='/' component={Home} />
        <Route exact path='/service' component={Service} />
        <Route exact path='/about' component={About} />
        <Route exact path='/contact' component={Contact} />
        <Route exact path='/track' component={Track} />

        {/* any other route will be redirected to notFound page  */}
        <Route exact path="/notFound" component={NotFound }/>
        <Redirect to='/notFound' component={NotFound} />
      </Switch>
    </Router>
    </>
  );
}

export default App;
