import React from 'react';
import useAxiosSecure from '../../../hooks/useAxiosSecure';
import { useParams } from 'react-router';
import { useQuery } from '@tanstack/react-query';
import Loader from '../../Shared/Loader/Loader';

const Payment = () => {
    const {parcelId}=useParams()
    const axiosSecure=useAxiosSecure();

    const {isLoading,data: parcel}=useQuery({
        queryKey: ['parcels',parcelId],
        queryFn: async()=>{
            const res=await axiosSecure.get(`/parcels/${parcelId}`)
            return res.data;
        }
    })
    if(isLoading){
        <Loader></Loader>
    }
    return (
        <div>
            <h2>Please Pay : {parcel?.parcelName}</h2>
            <button className='btn btn-primary text-black'>Pay</button>
        </div>
    );
};

export default Payment;