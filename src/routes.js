import React from 'react';
import Layout from './hoc/Layout';
import { Switch, Route }  from 'react-router-dom';
import PrivateRoute from './components/authRoutes/privateRoutes';
import PublicRoute from './components/authRoutes/publicRoutes';
import Home from './components/home';
import Dashboard from './components/admin/Dashboard';
import AdminMatches from './components/admin/matches';
import AdminPlayers from './components/admin/players';
import AddEditPlayers from './components/admin/players/editPlayer';
import AddPlayer from './components/admin/players/addPlayer';
import AddMatch from './components/admin/matches/addMatch';
import EditMatch from './components/admin/matches/editMatch';
import EditPlayer from './components/admin/players/editPlayer';
import AddTeam from './components/admin/teams/addTeam';
import EditTeam from './components/admin/teams/editTeam';
import AdminTeams from './components/admin/teams';
import Login from './components/login';
import TheTeam from './components/theTeam';
import TheMatches from './components/theMatches';
import NotFound from './components/ui/not_found'
import SecuredRoute from "./securityUtils/secureRoute";

//   <PrivateRoute {...props} path="/dashboard" exact component={Dashboard}/>


const Routes = (props) => {
  return(
    <Layout>
        <Switch>

            <SecuredRoute  exact path="/admin_matches" component={AdminMatches} />
            <SecuredRoute  exact path="/admin_matches/addmatch" component={AddMatch}/>                 
            <SecuredRoute  path="/admin_matches/editmatch/:id" exact component={EditMatch}/>

            <SecuredRoute  path="/admin_players" exact component={AdminPlayers}/>
            <SecuredRoute  path="/admin_players/addplayer" exact component={AddPlayer}/>               
            <SecuredRoute  path="/admin_players/editplayer/:id" exact component={EditPlayer} />              

            <SecuredRoute  path="/admin_teams" exact component={AdminTeams}/>
            <SecuredRoute  path="/admin_teams/addteam" exact component={AddTeam}/>               
            <SecuredRoute  path="/admin_teams/editteam/:id" exact component={EditTeam} />  

            <SecuredRoute  path="/dashboard" exact component={Dashboard}/>     

            <PublicRoute {...props} restricted={false} path="/login" component={Login} />            
            <PublicRoute {...props} restricted={false} path="/" exact component={Home}/>
            <PublicRoute {...props} restricted={false} path="/the_matches" exact component={TheMatches}/>
            <PublicRoute {...props} restricted={false} path="/the_team" exact component={TheTeam}/>            
            <PublicRoute {...props} restricted={false} component={NotFound}/>                        
        </Switch>
    </Layout>
  )
}

export default Routes;
