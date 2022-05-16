import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuNavegable from '../MenuNavegable/MenuNavegable'

import './NavBar.css'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <img src="./assets/icons/icono-bike-store.svg" alt="Logo de Bike Store" class="logo-bike-store"></img>
                <MenuNavegable />
            </AppBar>
        </Box>
    );
}
