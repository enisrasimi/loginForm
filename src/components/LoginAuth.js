import React, {Component} from 'react'; 
import {connect} from 'react-redux';
import {isAuthenticated, notAuthenticated} from '../actions'; 
import {Link} from 'react-router-dom'; 

class LoginAuth extends Component { 

onSignOut = () => { 
   console.log('sign out was clicked ')
   this.props.notAuthenticated()
}
     


    renderAuthButton() { 
              if(this.props.isauthenticated ) {
                return (
                    <a className="ui item" onClick={this.onSignOut}> Sign out </a> 
                )
                }else  { 
                    return (
                        <Link to='/signin' className="item"> Sign In </Link> 
                    )
                }
            }
   
    render() { 
        return (
            <div>
                {this.renderAuthButton()}
             </div> 

        )
    }

}
const mapStateToProps = (state) => { 
    return { 
        isauthenticated: state.emailReducer.isauthenticated
         
    }
}

export default connect(mapStateToProps, {isAuthenticated, notAuthenticated}) (LoginAuth); 
