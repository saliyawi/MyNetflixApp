import React from 'react';
import { Redirect } from 'react-router';
import {Route} from 'react-router-dom';

export function IsUserRedirect ({user, loggedInPath, children, ...rest }){
    return (
        <Route
           {...rest}
           render={()=>{
              if(!user){
                  return children;
              }

              if(user){
                  return (
                      <Redirect
                        to={
                            {pathname: loggedInPath}
                        }
                      />
                  )
              }

              return null;
            }
           }        
        />
    )
}

// Protected Route
 export function ProtectedRoute ({user, children, ...rest}){
     return(
         <Route
           {...rest}
           render={ ({location})=>{   // this location is coming from preserved history
              if(user){
                  return children;
              }

              if(!user){
                  return(
                      <Redirect
                         to={{
                             pathname: 'signin',
                             state: {from: location}
                         }}
                      />
                  )
              }
            }
           }
         />
     )

 }