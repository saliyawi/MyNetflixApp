import React from "react";
import {BrowserRouter as Router, Route} from 'react-router-dom';
import * as ROUTES from './constants/routes' // Namespace import 
import {Home, Signin, Signup, Browse}  from './pages';
import { IsUserRedirect, ProtectedRoute} from "./helpers/routes";
import { useAuthListener } from "./hooks";

export default function App() {
  
  const {user} = useAuthListener();

  return (
    <Router>
      <IsUserRedirect
        user={user}
        loggedInPath={ROUTES.BROWSE}
        path={ROUTES.SIGNIN}
      >
          <Signin/>
      </IsUserRedirect>

      <IsUserRedirect
         user={user}
         loggedInPath={ROUTES.BROWSE}
         path={ROUTES.SIGNUP}
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

      <IsUserRedirect user={user} loggedInPath={ROUTES.BROWSE} path={ROUTES.HOME}>
          <Home/>
      </IsUserRedirect>

    </Router>
  );
}


