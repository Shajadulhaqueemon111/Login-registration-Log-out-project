import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRouter = ({children}) => {

    const {user,loding}=useContext(AuthContext)

    if(!loding&&!user){
        return <span className="loading loading-spinner loading-xs"></span>;
    }
    if(user){
        return children;
    }

    return <Navigate to='/login'></Navigate>
};

export default PrivateRouter;