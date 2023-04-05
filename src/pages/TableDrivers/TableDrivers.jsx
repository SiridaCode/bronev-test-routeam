import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { TextField, MenuItem, FormControl, Select } from '@mui/material';
import TableMain from '../../components/Table/TableMain/TableMain';

const TableDrivers = () => {
    const { drivers } = useSelector((state) => state.table);

    const [inputsData, setInputsData] = useState({
        firstname: '',
        lastname: '',
        patronymic: '',
        showAll: false,
    });

    const url = process.env.REACT_APP_URL_CORE;
    const path = process.env.REACT_APP_PATH_DRIVERS;
    const params = {
        lastname: inputsData.lastname,
        firstname: inputsData.firstname,
        patronymic: inputsData.patronymic,
        showAll: inputsData.showAll,
    };

    const onChangeInput = ({ target }) => {
        target.name === 'showAll'
            ? setInputsData({ ...inputsData, [target.name]: target.value })
            : setInputsData({ ...inputsData, [target.id]: target.value });
    };

    return (
        <TableMain
            inputsData={inputsData}
            setInputsData={setInputsData}
            tableData={drivers}
            url={url}
            path={path}
            params={params}
        >
            <TextField
                onChange={onChangeInput}
                value={inputsData.firstname}
                fullWidth
                id="firstname"
                label="Поиск по имени"
            />
            <TextField
                onChange={onChangeInput}
                value={inputsData.lastname}
                fullWidth
                id="lastname"
                label="Поиск по фамилии"
            />
            <TextField
                onChange={onChangeInput}
                value={inputsData.patronymic}
                fullWidth
                id="patronymic"
                label="Поиск по отчеству"
            />
            <FormControl fullWidth>
                <Select
                    displayEmpty
                    inputProps={{ 'aria-label': 'Without label' }}
                    name="showAll"
                    label="Активные"
                    value={inputsData.showAll}
                    onChange={onChangeInput}
                >
                    <MenuItem value={false}>Активные</MenuItem>
                    <MenuItem value={true}>Все</MenuItem>
                </Select>
            </FormControl>
        </TableMain>
    );
};

export default TableDrivers;
