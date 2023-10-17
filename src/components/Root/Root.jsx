import React from 'react';
import Header from '../Header/Header';
import { Outlet } from 'react-router-dom';
import Banner from '../Banner/Banner';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto font-fontRancho'>
            <Header></Header>
            <Banner></Banner>
            <Outlet></Outlet>
        </div>
    );
};

export default Root;