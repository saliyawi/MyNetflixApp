import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes' // Namespace import 
import {Home, Signin, Signup, Browse}  from './pages';

export default function App() {
  return (
    <Router>
      <Route exact path={ROUTES.BROWSE}>
         <Browse></Browse>
      </Route>
      <Route exact path={ROUTES.SIGNUP}>
           <Signup></Signup>
      </Route>
      <Route exact path={ROUTES.SIGNIN}>
          <Signin></Signin>
      </Route>
      <Route exact path={ROUTES.HOME}>
          <Home></Home>
      </Route>

    </Router>
  );
}


