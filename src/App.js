import React from 'react';
import ReactDOM from 'react-dom';
import './resources/css/app.css';
import store from "./store";
import { BrowserRouter } from 'react-router-dom';
import Routes from './routes';
import jwt_decode from "jwt-decode";
import setJWTToken from "./securityUtils/setJWTToken";
import { SET_CURRENT_USER } from "./components/actions/types";
import { logout } from "./components/actions/securityActions";
import SecuredRoute from "./securityUtils/secureRoute";
import { Provider } from "react-redux";


const App = () => {

    const jwtToken = localStorage.jwtToken;
 
    if (jwtToken) {
        setJWTToken(jwtToken);
        const decoded_jwtToken = jwt_decode(jwtToken);
        store.dispatch({
          type: SET_CURRENT_USER,
          payload: decoded_jwtToken
        });
      
        const currentTime = Date.now() / 1000;
        if (decoded_jwtToken.exp < currentTime) {
          store.dispatch(logout());
          window.location.href = "/";
        }
    }

    return (
      <Provider store={store}>
        <BrowserRouter basename="/hispano" >
            <Routes/>
        </BrowserRouter>
      </Provider>
 
    )
}

export default App;