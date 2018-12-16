import React from 'react';
import { Link } from 'react-router-dom';
import Users from '../containers/Users'
import GuestUsers from '../containers/GuestUsers'
 const LoginHeader = (user) => {
   console.log(user)
     return(
       <React.Fragment>
         <li><Link to={'/login'}>Log in</Link></li>
         <li><Link to={'/signup'}>Sign Up</Link></li>
       </React.Fragment>
     )

    }

export default LoginHeader
