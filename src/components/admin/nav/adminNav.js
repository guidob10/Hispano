import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";


class AdminNav extends Component {
 
    logoutHandler = ()   => {
        this.props.logout();
        window.location.href = "/hispano";
        console.log('Log out succesfull');

    }

    render() {    
        const style = {
            color: '#ffffff',
            fontWeight: '300',
            borderBottom:'1px solid #353535'
        }

        const links = [
            {
                title: 'Partidos',
                linkTo: '/admin_matches'
            },
            {
                title: 'Agregar Partido',
                linkTo: '/admin_matches/addmatch'
            },
            {
                title: 'Jugadores',
                linkTo: '/admin_players'
            },
            {
                title: 'Agregar Jugador',
                linkTo: '/admin_players/addplayer'
            },
            {
                title: 'Equipos',
                linkTo: '/admin_teams'
            },
            {
                title: 'Agregar Equipo',
                linkTo: '/admin_teams/addteam'
            }                         
        ]
    
        const renderItems = () => (
            links.map(link => (
                <Link to={link.linkTo} key={link.title}>
                    <ListItem button style={style}>
                        {link.title}
                    </ListItem> 
                </Link>
            ))
        )        

        return (
            <div>
                {renderItems()}
              {//   <ListItem button style={style} onClick={()=> this.logoutHandler.bind(this)}>
              // onSubmit={this.handleSubmit}>
              }
                <ListItem button style={style} onClick={this.logoutHandler}>
                    Log out
                </ListItem>
            </div>
        );
    }
}
 
const mapStateToProps = state => ({
    security: state.security
  });
  
  export default connect(
    mapStateToProps,
    { logout }
  )(AdminNav);
  
 // export default AdminNav;