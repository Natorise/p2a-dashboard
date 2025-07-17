import './App.css'

import { Route, Switch } from "wouter";

import Home from './Pages/Home';
import TOS from './Pages/TOS';
import PrivacyPolicy from './Pages/PrivacyPolicy';
import NavBar from './Components/NavBar';

export function App() {
  return <>
      <NavBar />

  <Switch>
    <Route path="/" component={Home} />
    <Route path="/tos" component={TOS} />
    <Route path="/privacy" component={PrivacyPolicy} />

  </Switch>
  </>

}
