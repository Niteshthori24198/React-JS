import React from 'react'
import { shallowEqual, useSelector } from 'react-redux'
import { Navigate } from 'react-router-dom';

function PrivateRoute({ children }) {

    const IsAllowed = useSelector((state) => {

        return {

            auth: state.Loginreducer.auth,
            isloading: state.Loginreducer.isloading,
            iserror: state.Loginreducer.iserror,
            token: state.Loginreducer.token
        }


    }, shallowEqual)

    const { auth } = IsAllowed;

    return (

        <div>

            {

                auth ? children : <Navigate to={"/login"} />
            }

        </div>

    )
}

export default PrivateRoute
