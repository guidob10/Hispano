import React from 'react';
import Layout from './hoc/layout';
import { Switch, Route }  from 'react-router-dom';

import PrivateRoute from './components/authRoutes/privateRoutes';
import PublicRoute from './components/authRoutes/publicRoutes';

import Home from './components/home';
//import SignIn from './components/signin/indexNovamas';

import Dashboard from './components/admin/Dashboard';
import AdminMatches from './components/admin/matches';
import AdminPlayers from './components/admin/players';
import AddEditPlayers from './components/admin/players/addEditPlayers';
import AddPlayer from './components/admin/players/addPlayer';
import Hello from './components/admin/players/hello';
import Login from './components/login';
import SecuredRoute from "./securityUtils/secureRoute";


//             <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
// <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
 //                   
//           <PublicRoute {...props} restricted={false} path="/signin" exact component={SignIn}/>

//            <PrivateRoute {...props} restricted={false} path="/admin_matches" exact component={AdminMatches}/>


const Routes = (props) => {
  return(
    <Layout>
        <Switch>

            <SecuredRoute  exact path="/admin_matches" component={AdminMatches} />

            <PublicRoute {...props} restricted={false} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
            <PublicRoute {...props} restricted={false} path="/admin_players" exact component={AdminPlayers}/> 
            <PublicRoute {...props} restricted={false} path="/admin_players/addplayer" exact component={AddPlayer}/>                 
            <PublicRoute {...props} restricted={false} path="/hello" exact component={Hello}/>                 
            <PublicRoute {...props} restricted={false} path="/dashboard" exact component={Dashboard}/>
            <PublicRoute {...props} restricted={false} path="/login" component={Login} />            
            <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
        </Switch>
    </Layout>
  )
}

export default Routes;
