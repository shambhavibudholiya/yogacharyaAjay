import React from 'react';  
import './Navigation.css';
import Form from './Contact';
import { render } from 'react-dom';
import { BrowserRouter as Router, Route, NavLink } from 'react-router-dom';
import Page from './Page';
import Slide from './SlideEffect'; 
import Grid from './Grid';

const Navigation= () =>(
  <Router>
<header className="Navigation dt--fixed border-box bb b--black-10">
    <nav className="nav pa4-ns">
      <a className="yt dim black f4 f5-ns mr4" href="https://www.youtube.com/channel/UC-19kU4aNJRS77wRxo0uPHg" title="Watch on Youtube">YouTube</a>
      <NavLink to="/" className="as dim red f4 f5-ns mr4">Home</NavLink>
      <NavLink to="/Contact" className="as dim red f4 f5-ns mr4">Contact</NavLink>
    </nav>
     </header> 
     <Route   exact path="/yogacharyajay/" component={Page} />
      <Route exact path="/yogacharyajay/" component={Slide} />
      <Route exact  path="/yogacharyajay/" component={Grid} />

      <Route   exact path="/" component={Page} />
      <Route exact path="/" component={Slide} />
      <Route exact  path="/" component={Grid} />
      <Route exact path="/Contact" component={Form } />
  </Router>
);
export default Navigation;

