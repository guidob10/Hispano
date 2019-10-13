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
import AddEditPlayers from './components/admin/players/editPlayer';
import AddPlayer from './components/admin/players/addPlayer';
import AddMatch from './components/admin/matches/addMatch';
import EditMatch from './components/admin/matches/editMatch';
import EditPlayer from './components/admin/players/editPlayer';
//import Hello from './components/admin/players/hellob';
import Login from './components/login';
import TheTeam from './components/theTeam';
import TheMatches from './components/theMatches';
import NotFound from './components/ui/not_found'
import SecuredRoute from "./securityUtils/secureRoute";


//             <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>
// <PublicRoute {...props} restricted={true} path="/sign_in" exact component={SignIn}/>
 //                   
//           <PublicRoute {...props} restricted={false} path="/signin" exact component={SignIn}/>

//            <PrivateRoute {...props} restricted={false} path="/admin_matches" exact component={AdminMatches}/>
      //      <PublicRoute {...props} restricted={false} path="/hello" exact component={Hello}/>                 


const Routes = (props) => {
  return(
    <Layout>
        <Switch>

            <SecuredRoute  exact path="/admin_matches" component={AdminMatches} />
            <SecuredRoute  exact path="/admin_matches/addmatch" component={AddMatch}/>                 
            <SecuredRoute  path="/admin_matches/editmatch/:id" exact component={EditMatch}/>


            <PublicRoute {...props} restricted={false} path="/admin_players/editplayer/:id" exact component={EditPlayer}/>
            <PublicRoute {...props} restricted={false} path="/admin_players" exact component={AdminPlayers}/> 
            <PublicRoute {...props} restricted={false} path="/admin_players/addplayer" exact component={AddPlayer}/>                 
            <PublicRoute {...props} restricted={false} path="/dashboard" exact component={Dashboard}/>
            <PublicRoute {...props} restricted={false} path="/login" component={Login} />            
            <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
            <PublicRoute {...props} restricted={false} path="/the_matches" exact component={TheMatches}/>
            <PublicRoute {...props} restricted={false} path="/the_team" exact component={TheTeam}/>            
            <PublicRoute {...props} restricted={false}  component={NotFound}/>                        
        </Switch>
    </Layout>
  )
}

export default Routes;
