import React from 'react';

import { appContext } from '../AuthContext/AuthContextProvider';

import { useContext } from 'react';

import { Navigate } from 'react-router-dom'

function Logout() {

    const { handleAuth } = useContext(appContext);

    
    React.useLayoutEffect(()=>{
        handleAuth()

    },[])

    return (
        <>

            {
                <Navigate to={"/Login"} />

            }

        </>
    )
}

export default Logout
