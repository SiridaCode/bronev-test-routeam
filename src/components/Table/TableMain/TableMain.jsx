import React, { useEffect, useState } from 'react';
import RenderTableRow from './RenderTableRow/RenderTableRow';
import getEmptyInputsData from '../../../utils/getEmptyInputsData';
import HeaderSecond from '../../SideBar/HeaderSecond/HeaderSecond';
import fetchData from '../../../api/axios';
import AddIcon from '@mui/icons-material/Add';
import { styled } from '@mui/material/styles';
import {
    Paper,
    Table,
    TableBody,
    TableCell,
    TableContainer,
    TableHead,
    TableRow,
    Button,
    Box,
    Pagination,
    Stack,
} from '@mui/material';

import './styles.css';

const StickyHeadTable = ({
    inputsData,
    setInputsData,
    children,
    tableData,
    url,
    path,
    params,
}) => {
    const [data, setData] = useState(null);

    useEffect(() => {
        fetchData(url, path).then((data) => setData(data));
    }, [url, path]);

    const handleSearch = async (event, value) => {
        const dataSearch = await fetchData(url, path, params);
        setData(dataSearch);
    };

    const clearInputs = async () => {
        const newInputsData = getEmptyInputsData(inputsData);
        setInputsData({ ...newInputsData });
        const dataReset = await fetchData(url, path);
        setData(dataReset);
    };

    const handleChangePage = async (event, value) => {
        const dataPage = await fetchData(url, path, { ...params, page: value });
        setData(dataPage);
    };

    const getQuantityPages = () => {
        return Math.ceil(data && data['hydra:totalItems'] / 30);
    };

    const DrawerHeader = styled('div')(({ theme }) => ({
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'flex-end',
        padding: theme.spacing(0, 1),
        ...theme.mixins.toolbar,
    }));

    return (
        <>
            <DrawerHeader />
            <HeaderSecond name={tableData.name} />
            <DrawerHeader sx={{ marginTop: '-45px' }} />
            <Paper
                sx={{
                    overflow: 'hidden',
                    padding: '25px',
                    marginLeft: '15px',
                    marginRight: '15px',
                    marginBottom: '50px',
                }}
            >
                <Button
                    sx={{
                        marginLeft: '15px',
                        backgroundColor: '#6c757d',
                    }}
                    variant="contained"
                    size="normal"
                >
                    <AddIcon sx={{ marginRight: '5px' }} />
                    Добавить
                </Button>
                <Box
                    sx={{
                        display: 'flex',
                        alignItems: 'center',
                        '& > :not(style)': { m: 2 },
                    }}
                >
                    {children}
                </Box>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'flex-end',
                        alignItems: 'flex-end',
                        '& > :not(style)': { m: 1 },
                    }}
                >
                    <Button
                        onClick={clearInputs}
                        sx={{ background: '#dc3545' }}
                        variant="contained"
                        size="small"
                    >
                        Сбросить
                    </Button>
                    <Button
                        onClick={handleSearch}
                        variant="contained"
                        size="small"
                    >
                        Поиск
                    </Button>
                </Box>

                <TableContainer>
                    <Table stickyHeader aria-label="sticky table">
                        <TableHead>
                            <TableRow>
                                {tableData.columns.map((column) => (
                                    <TableCell
                                        key={column.id}
                                        align={column.align}
                                        style={{ minWidth: column.minWidth }}
                                    >
                                        {column.label}
                                    </TableCell>
                                ))}
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {data &&
                                data['hydra:member'].map((row, index) => {
                                    return (
                                        <RenderTableRow
                                            key={index}
                                            row={row}
                                            columns={tableData.columns}
                                        />
                                    );
                                })}
                        </TableBody>
                    </Table>
                </TableContainer>

                <Stack
                    sx={{
                        marginTop: '25px',
                    }}
                    spacing={2}
                >
                    {data && data['hydra:totalItems'] > 30 && (
                        <Pagination
                            sx={{
                                display: 'flex',
                                justifyContent: 'center',
                            }}
                            onChange={handleChangePage}
                            variant="outlined"
                            shape="rounded"
                            count={getQuantityPages()}
                        />
                    )}
                </Stack>
            </Paper>
        </>
    );
};

export default StickyHeadTable;
