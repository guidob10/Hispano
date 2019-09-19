import React from 'react';
import Layout from './Hoc/Layout';
import { Switch, Route }  from 'react-router-dom';

import PrivateRoute from './Components/authRoutes/privateRoutes';
import PublicRoute from './Components/authRoutes/publicRoutes';

import Home from './Components/home';
import SignIn from './Components/signin';

import Dashboard from './Components/admin/Dashboard';
import AdminMatches from './Components/admin/matches';
import AdminPlayers from './Components/admin/players';
import AddEditPlayers from './Components/admin/players/addEditPlayers';
import AddPlayer from './Components/admin/players/addPlayer';
import Hello from './Components/admin/players/hello';


//             <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
// <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
 //                   

const Routes = (props) => {
  return(
    <Layout>
        <Switch>

            <PublicRoute {...props} restricted={false} path="/admin_matches" exact component={AdminMatches}/>
            <PublicRoute {...props} restricted={false} path="/admin_players/add_players/:id" exact component={AddEditPlayers}/>
            <PublicRoute {...props} restricted={false} path="/admin_players" exact component={AdminPlayers}/> 
            <PublicRoute {...props} restricted={false} path="/admin_players/addplayer" exact component={AddPlayer}/>                 
            <PublicRoute {...props} restricted={false} path="/hello" exact component={Hello}/>                 
            <PublicRoute {...props} restricted={false} path="/dashboard" exact component={Dashboard}/>
            <PublicRoute {...props} restricted={false} path="/sign_in" exact component={SignIn}/>
            <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
        </Switch>
    </Layout>
  )
}

export default Routes;
