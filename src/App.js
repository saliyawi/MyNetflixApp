import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes' // Namespace import 
import {Home, Signin, Signup, Browse}  from './pages';
import { IsUserRedirect, ProtectedRoute} from "./helpers/routes";

export default function App() {
  const user =null;
  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGNIN}
        exact
      >
          <Signin/>
      </IsUserRedirect>

      <IsUserRedirect
         user={user}
         loggedInPath={ROUTES.BROWSE}
         path={ROUTES.SIGNUP}
         exact
      >
        <Signup/>
      </IsUserRedirect>
          
      <ProtectedRoute
         user={user}
         path={ROUTES.BROWSE}
         exact
      >
        <Browse/>
      </ProtectedRoute>

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME} exact>
          <Home/>
      </IsUserRedirect>

    </Router>
  );
}


