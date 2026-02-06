import React from 'react';
import errorImg from "../../assets/error.png"
import Navbar from '../Shared/Navbar/Navbar';
import Footer from '../Shared/Footer/Footer';
import { Link } from 'react-router';

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <h2 className='text-center font-bold text-3xl mt-10'>---ERROR 404---</h2>
            <img className='w-100 h-100 p-10 mx-auto' src={errorImg} alt="" />
            <div className='text-center mb-10'>
                <Link to="/"><button className='btn btn-primary text-black rounded-2xl  '>Go Home</button></Link>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;