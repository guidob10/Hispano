import React from 'react';
import { Link } from 'react-router-dom';
import ListItem from '@material-ui/core/ListItem';
import { firebase } from '../../../firebase';
import setJWTToken from '../../../securityUtils/setJWTToken';
import { connect } from "react-redux";
import { logout } from "../../actions/securityActions";


//class Header extends Component {

const AdminNav = () => {

    const links = [
        {
            title: 'Matches',
            linkTo: '/admin_matches'
        },
        {
            title: 'Add Match',
            linkTo: '/admin_matches/edit_match'
        },
        {
            title: 'Players',
            linkTo: '/admin_players'
        },
        {
            title: 'Add Players',
            linkTo: '/admin_players/addplayer'
        }
    ]

    const style = {
        color: '#ffffff',
        fontWeight: '300',
        borderBottom:'1px solid #353535'
    }


    const renderItems = () => (
        links.map(link => (
            <Link to={link.linkTo} key={link.title}>
                <ListItem button style={style}>
                    {link.title}
                </ListItem> 
            </Link>
        ))
    )

    const logoutHandler = () => {
        firebase.auth().signOut().then(()=>{
            console.log('Log out succesfull')
        },(error)=>{
            console.log('Error logging out')
        })
    }
/*
    export const logout = () => dispatch => {
        localStorage.removeItem("jwtToken");
        setJWTToken(false);
        dispatch({
          type: SET_CURRENT_USER,
          payload: {}
        });
      };
*/
/*
    const logoutHandler = () => dispatch => {
     //   logout() {
            this.props.logout();
            window.location.href = "/";
      //    }        
        localStorage.removeItem("jwtToken");
        setJWTToken(false);
        console.log("asd");
    }
*/
    return (
        <div>
            {renderItems()}
            <ListItem button style={style} onClick={()=> logoutHandler()}>
                Log out
            </ListItem>
        </div>
    );
};

/*
const mapStateToProps = state => ({
    security: state.security
  });
  
  export default connect(
    mapStateToProps,
    { logout }
  )(Header);
  }*/
export default AdminNav;