import React from 'react'; 
import {Link} from 'react-router-dom';  
import LoginAuth from '../components/LoginAuth'; 

class Header extends React.Component { 
   
    render() { 
        return ( 
           <div> 
            <div class="ui pointing menu">
            <Link to='/' className="item">Home</Link>
             <Link to='/employers' className="item"> Employers </Link>
            <div class="right menu">   
            <LoginAuth/> 
            <Link to='/register' className="item"> Register </Link>
              <div class="item">
                <div class="ui transparent icon input">
                  <input type="text" placeholder="Search..."/>
                  <i class="search link icon"></i>
                </div>
              </div>
            </div>
          </div> 
          </div> 
        )
    }
}

export default Header;  