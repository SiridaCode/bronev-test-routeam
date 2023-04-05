import React, { useState } from 'react';
import {
    RemoveRedEye as RemoveRedEyeIcon,
    FindInPage as FindInPageIcon,
    Delete as DeleteIcon,
} from '@mui/icons-material';
import { Box } from '@mui/system';
import {
    TableCell,
    TableRow,
    ButtonGroup,
    Button,
    Typography,
} from '@mui/material';

import './styles.css';

const RenderTableRow = ({ row, columns }) => {
    const [isOpened, setIsOpened] = useState(false);
    const activeStatus = (bool) => (bool ? 'Да' : 'Нет');
    const sexStatus = (num) => (num === 1 ? 'муж' : 'жен');

    const birthDateStatus = (str) => {
        const date = new Date(str);
        const year = date.getFullYear();
        const month = String(date.getMonth() + 1).padStart(2, '0');
        const day = String(date.getDate()).padStart(2, '0');
        const joined = [day, month, year].join('.');
        return joined;
    };

    return (
        <>
            <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                {columns.map((column) => {
                    const value = row[column.id];
                    return (
                        <TableCell key={column.id} align={column.align}>
                            {column.id === 'actions' ? (
                                <ButtonGroup
                                    size="small"
                                    variant="text"
                                    aria-label="outlined primary button group"
                                >
                                    <Button
                                        onClick={() => setIsOpened(!isOpened)}
                                    >
                                        <RemoveRedEyeIcon
                                            sx={{ color: '#212529' }}
                                        />
                                    </Button>
                                    <Button>
                                        <FindInPageIcon
                                            sx={{ color: '#212529' }}
                                        />
                                    </Button>
                                    <Button>
                                        <DeleteIcon sx={{ color: '#212529' }} />
                                    </Button>
                                </ButtonGroup>
                            ) : column.id === 'active' ? (
                                <div className="active-status">
                                    {activeStatus(value)}
                                </div>
                            ) : column.id === 'sex' ? (
                                <div>{sexStatus(value)}</div>
                            ) : column.id === 'birthDate' ||
                              column.id === 'birthdate' ? (
                                <div>{birthDateStatus(value)}</div>
                            ) : column.format && typeof value === 'number' ? (
                                column.format(value)
                            ) : (
                                value
                            )}
                        </TableCell>
                    );
                })}
            </TableRow>
            {isOpened && (
                <Box className="container">
                    <Box className="window">
                        <Box className="window-children">
                            {columns.slice(0, 2).map((item) => {
                                const value = row[item.id];
                                return (
                                    <Typography className="property-header">
                                        {value}
                                    </Typography>
                                );
                            })}
                        </Box>
                        {columns.slice(0, -2).map((item) => {
                            const value = row[item.id];
                            return (
                                <Box className="window-row">
                                    <Box className="property-key">
                                        {item.label}
                                    </Box>
                                    <Box
                                        className="property-value"
                                        key={item.id}
                                        align={item.align}
                                    >
                                        {item.format &&
                                        typeof value === 'number'
                                            ? item.format(value)
                                            : value}
                                    </Box>
                                </Box>
                            );
                        })}
                    </Box>
                </Box>
            )}
        </>
    );
};

export default RenderTableRow;
