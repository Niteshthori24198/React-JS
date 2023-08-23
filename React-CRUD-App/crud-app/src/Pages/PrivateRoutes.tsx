
import { Navigate } from 'react-router-dom';
import { useAppSelector, AppState } from '../Redux/store'

import React from 'react';



interface IProps {
    children: React.ReactNode;
}



function PrivateRoutes({ children }: IProps) {

    const auth = useAppSelector((state: AppState) => state.authReducer.isAuth);

    return (
        <div>
            {
                auth ? children : <Navigate to={"/login"} />
            }

        </div>
    )
}

export default PrivateRoutes
