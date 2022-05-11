import * as React from 'react';
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import MenuNavegable from '../MenuNavegable/MenuNavegable'

import './NavBar.css'

export default function ButtonAppBar() {
    return (
        <Box sx={{ flexGrow: 1 }}>
            <AppBar position="static">
                <MenuNavegable />
                <h1>Bike store - Tienda de Ciclismo</h1>
            </AppBar>
        </Box>
    );
}
