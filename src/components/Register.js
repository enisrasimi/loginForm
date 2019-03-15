import React, {Component} from 'react'; 
import {connect} from 'react-redux'; 
import {registerName, registerPassword, registerLastName, registerEmail} from '../actions'; 


class Register extends Component {  

    handleSubmit = (event) => { 
        fetch('http://localhost:3000/register', { 
            method:'post', 
            headers:{'Content-Type' : 'application/json'}, 
            body:JSON.stringify({ 
                name:this.props.name,  
                email:this.props.email, 
                password: this.props.password
            })
        }).then(data => {  
               console.log('successful') 
        })
        
        event.preventDefault()  
    }

    render() { 
        return (
            <div className ="ui grid" style={{marginLeft:'750px', marginTop:'50px'}}> 
              <div className="four wide column">  
                <form onSubmit={this.handleSubmit} className="ui form">
                    <div className="field">
                        <label style={{color:'white'}}>First Name</label>
                        <input type="text" name="first-name" placeholder="First Name" onChange={(event) => this.props.registerName(event.target.value)}/>
                    </div> 
                    <div className="field"  >
                        <label style={{color:'white'}}>Last Name</label>
                        <input type="text" name="last-name" placeholder="Last Name" onChange={(event) => this.props.registerLastName(event.target.value)}/>
                    </div> 

                    <div className="field"  >
                        <label style={{color:'white'}}>Email</label>
                        <input type="email" name="email" placeholder="Email" onChange={(event) => this.props.registerEmail(event.target.value)}/>
                    </div> 

                    <div className="field"  >
                        <label style={{color:'white'}}>Password</label>
                        <input type="password" name="password" placeholder="Password" onChange={(event) => this.props.registerPassword(event.target.value)}/>
                    </div> 

                    <div className="field">
                        <div className="ui checkbox">
                        <input type="checkbox" tabindex="0" className="active"/>
                        <label style={{color:'white'}}>I agree to the Terms and Conditions</label>
                        </div>
                    </div>
                    <input type="submit" value="Submit" className="ui button" /> 
                    </form>
                </div> 
            </div> 

        )
    }
}

const mapsStateToProps = (state) => { 
    return { 
        name: state.registerReducer.name, 
        lastname: state.registerReducer.lastname, 
        email: state.registerReducer.email, 
        password: state.registerReducer.password

    }
}

export default connect(mapsStateToProps, {registerEmail,registerLastName,registerName,registerPassword}) (Register); 