import React, { use } from 'react';
import { AuthContext } from '../contexts/AuthContext/AuthContext';

//custom hook to access all in authInfo.
const useAuth = () => {
    const authInfo=use(AuthContext)
    return authInfo;
};

export default useAuth;