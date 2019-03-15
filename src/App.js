import React, { Component } from 'react'; 
import './App.css';
import Login from './components/Login'; 
import Header from './components/Header'; 
import {BrowserRouter, Route, Link, Redirect} from 'react-router-dom';
import Home from './components/Home'; 
import Employers from './components/Employers'; 
import Register from './components/Register';  
import {connect} from 'react-redux'; 
import {isAuthenticated} from './actions';  

const PrivateRoute = ({component,isauthenticated, ...rest}) => { 
  return <Route {...rest} render={(props) => (
    isauthenticated === true
   ? <component {...props} /> 
    : <Redirect to='/signin'/> 
 )} /> 
}

class App extends Component {   
  render() { 
    const {isauthenticated} = this.props;  
    return (
      <div > 
        <BrowserRouter> 
        <div>  
        <Header/>  
        <Route path='/' exact component={Home}/> 
        <PrivateRoute path='/employers'  isauthenticated={isauthenticated} component={Employers}/> 
        <Route path='/signin' component={Login}/> 
        <Route path='/register' component={Register}/> 
        </div>  
        </BrowserRouter>
       
      </div>
    );
  }
}

const mapStateToProps = (state) => { 
  return { 
    isauthenticated: state.emailReducer.isauthenticated
  }
}

export default connect(mapStateToProps, {isAuthenticated}) (App);
