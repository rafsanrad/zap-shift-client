import React from 'react';
import useRole from '../../../hooks/useRole';
import Loader from '../../Shared/Loader/Loader';
import AdminDashboardHome from './AdminDashboardHome';
import RiderDashboardHome from './RiderDashboardHome';
import UserDashboardHome from './UserDashboardHome';

const DashboardHome = () => {
    const {role,roleLoading}=useRole()
    if(roleLoading){
        return <Loader></Loader>
    }
    if(role==='admin'){
        return <AdminDashboardHome></AdminDashboardHome>
    }
    else if(role==='rider'){
        return <RiderDashboardHome></RiderDashboardHome>
    }
    else{
        return <UserDashboardHome></UserDashboardHome>
    }
};

export default DashboardHome;