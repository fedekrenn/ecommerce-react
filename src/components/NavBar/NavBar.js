import * as React from 'react';
import { Link } from 'react-router-dom';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import NavigableMenu from '../NavigableMenu/NavigableMenu'
import CartWidget from '../CartWidget/CartWidget'

import './NavBar.css'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static" className='header-main'>
                <div className='header__child'>
                    <Link to={"/"}><img src="../assets/icons/icono-bike-store.svg" alt="Logo de Bike Store" className="logo-bike-store"></img></Link>
                    <NavigableMenu />
                </div>
                <CartWidget />
            </AppBar>
        </Box>
    );
}
