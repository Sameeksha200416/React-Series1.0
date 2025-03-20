import React from 'react';
import Header from './components/Header/Header';
import Footer from './components/Footer/Footer';
import { Outlet } from 'react-router-dom';//outlet helps to render the child routes
function Layout(){
    return(
        <>
        <Header/>
        <Outlet/>
        <Footer/>
        </>
    )
}
export default Layout;