import React from 'react';
import { Link } from 'react-router-dom';
import { Menu, MenuItem, ListItem, ListItemIcon, Button } from '@mui/material';
import MenuBookIcon from '@mui/icons-material/MenuBook';

const BasicMenu = () => {
    const [anchorEl, setAnchorEl] = React.useState(null);
    const open = Boolean(anchorEl);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };
    const handleClose = () => {
        setAnchorEl(null);
    };

    const menuIcons = [
        { name: 'Водители', link: '/drivers' },
        { name: 'Направления', link: '/directions' },
        { name: 'Пассажиры', link: '/people' },
        { name: 'Города', link: '/cities' },
    ];
    return (
        <div>
            <Button
                id="basic-button"
                aria-controls={open ? 'basic-menu' : undefined}
                aria-haspopup="true"
                aria-expanded={open ? 'true' : undefined}
                onClick={handleClick}
            >
                <ListItem sx={{ display: 'block' }} button>
                    <ListItemIcon>
                        <MenuBookIcon />
                    </ListItemIcon>
                </ListItem>
            </Button>
            <Menu
                id="basic-menu"
                anchorEl={anchorEl}
                open={open}
                onClose={handleClose}
                MenuListProps={{
                    'aria-labelledby': 'basic-button',
                }}
            >
                {menuIcons.map((item, index) => {
                    return (
                        <MenuItem
                            key={index}
                            component={Link}
                            to={item.link}
                            onClick={handleClose}
                        >
                            {item.name}
                        </MenuItem>
                    );
                })}
            </Menu>
        </div>
    );
};

export default BasicMenu;
