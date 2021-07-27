import React, { Component } from 'react';
// eslint-disable-next-line
import { BrowserRouter,Route,Switch,Redirect,Link } from 'react-router-dom';
import Login from './Pages/Login';
import Registration from './Pages/Registration';
import Home from './Pages/Home';

export const authentication = {
  isLoggedIn: localStorage.getItem("auth"),
  onAuthentication() {
    this.isLoggedIn = true;
  },
  onLogout() {
    this.isLoggedIn = false;
  },
  getLoginStatus() {
    return this.isLoggedIn;
  },
}

export default class App extends Component {

  SecuredRoute(props) {
    return (
      <Route
        path={props.path}
        render={(data) =>
          authentication.getLoginStatus() ? (
            <>
            <props.component {...data} />
            </>
          ) : (
            <Redirect
              to={{
                pathname: "/",
              }}
            />
          )
        }
      />
    );
  }
  render() {
    return (
      <>
        <BrowserRouter>
        <Switch>
          <Route path='/' component={Login} exact/>
          <Route path='/registration' component={Registration} exact/>
          <this.SecuredRoute path='/home' component={Home} exact/>
        </Switch>
        </BrowserRouter>
      </>
    )
  }
}

