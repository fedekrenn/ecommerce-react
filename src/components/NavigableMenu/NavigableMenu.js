import './NavigableMenu.css';
import { Link } from 'react-router-dom';
import React from 'react';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';

const NavigableMenu = () => {

    const [anchorEl, setAnchorEl] = React.useState(null);

    const open = Boolean(anchorEl);

    const categories = ["Mtb", "Rutera"]

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <nav>
            <ul className='nav__ul'>
                <li>
                    <Link to={"/item"}>
                        <Button variant="text" className='nav-btn'>Home</Button>
                    </Link>
                </li>
                <li>
                    <Button
                        className='nav-btn'
                        id="basic-button"
                        aria-controls={open ? 'basic-menu' : undefined}
                        aria-haspopup="true"
                        variant="text"
                        disableRipple
                        aria-expanded={open ? 'true' : undefined}
                        onClick={handleClick}
                    >Categorías</Button>

                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                            'aria-labelledby': 'basic-button',
                        }}>

                        {categories.map((cat, i) => <MenuItem onClick={handleClose} key={i}>{cat}</MenuItem>)}

                    </Menu>
                </li>
                <li>
                    <Button variant="text" className='nav-btn'>Contactarnos</Button>
                </li>
            </ul>
        </nav>
    )
}

export default NavigableMenu;