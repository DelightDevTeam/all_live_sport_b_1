import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from './Navbar'
import Footer from './Footer'
import FooterFixed from './FooterFixed'

const Layout = () => {
    return (
        <div >
            <Navbar />
            <div style={{ marginTop: '80px' }}>
                <Outlet />
            </div>
            <Footer />
            <FooterFixed />
        </div>
    )
}

export default Layout
