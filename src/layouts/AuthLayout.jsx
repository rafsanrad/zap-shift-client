import React from 'react';
import Logo from '../components/Logo/Logo';
import { Outlet } from 'react-router';
import authImage from "../assets/authImage.png"

const AuthLayout = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Logo></Logo>
            <div className='md:flex flex-col items-center '>
                <div className='flex-1'>
                    <Outlet></Outlet>
                </div>
                <div className='flex-1 bg-primary '>
                    <img src={authImage} alt="" />
                </div>
            </div>
        </div>
    );
};

export default AuthLayout;