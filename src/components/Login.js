import React,{Component} from 'react'; 
import {emailAction, passwordAction, isAuthenticated} from '../actions'; 
import {connect} from 'react-redux'; 
import {Redirect} from 'react-router'; 


class Login extends Component {  
    state = {  
        errorMessage: '', 
        redirect:false
    }
 
   
    handleSubmit = (event) => { 
        fetch('http://localhost:3000/signin', { 
        method:'post', 
        headers:{'Content-Type' : 'application/json'}, 
        body:JSON.stringify({
            email:this.props.email, 
            password:this.props.password
        })
        }).then(response => response.json())
        .then(data => { 
            if(data.email) { 
                  this.props.isAuthenticated()
                  this.setState({redirect: true})
            }else { 
               this.setState({errorMessage: 'Wrong username or password!'})
            }
        })
        event.preventDefault(); 
        console.log(this.props.isauthenticated)
        
    }

    render() {   
        if (this.state.redirect) { 
           return  <Redirect push to='/'/> 
        }  
        return (
            <div  className="ui container">     
            <div style={{marginTop:'100px', marginLeft:'500px'}}> 
                <form className="ui form" onSubmit={this.handleSubmit}> 
                <label style={{color:'white'}}> Email </label> <br/> 
                <div className="ui input">
                <input type="email" placeholder="Email..." onChange={(event) => this.props.emailAction(event.target.value)}/> 
                </div>  
                <br/>  
                <div style={{marginTop:'40px'}}>
                <label style={{color: "white"}}> Password  </label> <br/> 
                <div  className="ui input"> 
                <input type="password" placeholder="Password..." onChange={(event) => this.props.passwordAction(event.target.value)}/>  
                </div> 
                <p style={{color: 'white'}}>  {this.state.errorMessage}  </p>  
                </div> <br/>  
                <input type="submit" value="Sign in" className="ui button"/> 
                </form> 
             </div> 
        </div>  
        )
    }
}

const mapStateToProps = (state) => { 
 return  { 
     email : state.emailReducer.email, 
     password: state.passwordReducer.password, 
     isauthenticated: state.emailReducer.isauthenticated
        }
    }
 

export default connect(mapStateToProps, {emailAction, passwordAction, isAuthenticated}) (Login); 