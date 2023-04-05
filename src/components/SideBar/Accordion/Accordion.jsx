import React from 'react';
import { NavLink } from 'react-router-dom';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MenuBookIcon from '@mui/icons-material/MenuBook';
import {
    Accordion,
    AccordionSummary,
    AccordionDetails,
    ListItem,
    ListItemIcon,
    ListItemText,
    Button,
    Box,
} from '@mui/material';

const SimpleAccordion = () => {
    const chapters = [
        { chap: 'Водители', link: '/drivers' },
        { chap: 'Направления', link: '/directions' },
        { chap: 'Пассажиры', link: '/people' },
        { chap: 'Страны', link: '/country' },
        { chap: 'Города', link: '/cities' },
    ];

    return (
        <Box>
            <Accordion
                sx={{
                    margin: '8px 0px',
                    boxShadow: '0px 0px',
                }}
            >
                <AccordionSummary
                    expandIcon={<ExpandMoreIcon />}
                    aria-controls="panel1a-content"
                    id="panel1a-header"
                >
                    <ListItem button>
                        <ListItemIcon>
                            <MenuBookIcon />
                        </ListItemIcon>
                        <ListItemText
                            sx={{ color: '#607d8b' }}
                            primary="Справочники"
                        />
                    </ListItem>
                </AccordionSummary>
                {chapters.map((item, index) => (
                    <AccordionDetails key={index} sx={{ padding: '0px 0px' }}>
                        <Box>
                            <Button
                                fullWidth
                                component={NavLink}
                                to={item.link}
                                sx={{
                                    padding: '8px 16px',
                                    justifyContent: 'flex-start',
                                    textDecoration: 'none',
                                    color: '#607d8b',
                                }}
                                activeStyle={{
                                    fontWeight: 'bold',
                                    color: '#263238',
                                }}
                                size="small"
                            >
                                {item.chap}
                            </Button>
                        </Box>
                    </AccordionDetails>
                ))}
            </Accordion>
        </Box>
    );
};

export default SimpleAccordion;
