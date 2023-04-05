import React, { useState } from 'react';
import TableMain from '../../components/Table/TableMain/TableMain';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

const TableDirections = () => {
    const { directions } = useSelector((state) => state.table);
    const [inputsData, setInputsData] = useState({
        name: '',
    });

    const url = process.env.REACT_APP_URL_CORE;
    const path = process.env.REACT_APP_PATH_DIRECTIONS;
    const params = {
        name: inputsData.name,
    };

    const onChangeInput = ({ target }) => {
        setInputsData({ ...inputsData, [target.id]: target.value });
    };

    return (
        <TableMain
            inputsData={inputsData}
            setInputsData={setInputsData}
            tableData={directions}
            url={url}
            path={path}
            params={params}
        >
            <TextField
                fullWidth
                onChange={onChangeInput}
                value={inputsData.name}
                id="name"
                label="Поиск по наименованию"
            />
            <TextField fullWidth disabled label="Поиск по сокращению" />
        </TableMain>
    );
};

export default TableDirections;
