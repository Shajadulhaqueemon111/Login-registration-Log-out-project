import React, { useContext } from 'react';
import { AuthContext } from './AuthProvider';
// import{AuthContext}from "../ALL component/AuthProvider"

const Home = () => {

    const authInfo=useContext(AuthContext)
    console.log(authInfo)
    return (
        <div>
           <h2 className='text-3xl'>This is home: {authInfo.name}</h2> 
        </div>
    );
};

export default Home;