import React from 'react';
import useAuth from '../hooks/useAuth';
import useRole from '../hooks/useRole';
import Loader from '../pages/Shared/Loader/Loader';
import Forbidden from '../components/Forbidden/Forbidden';

const AdminRoute = ({children}) => {
    const {loading}=useAuth()
    const {role,roleLoading}=useRole()
    if(loading || roleLoading){
        <Loader></Loader>
    }
    if(role !=='admin'){
        return <Forbidden></Forbidden>
    }
    return children;
};

export default AdminRoute;