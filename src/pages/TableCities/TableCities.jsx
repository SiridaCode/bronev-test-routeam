import React, { useState } from 'react';
import TableMain from '../../components/Table/TableMain/TableMain';
import TextField from '@mui/material/TextField';

const tableData = {
    name: 'Список городов',
    columns: [
        { id: 'shortName', label: 'Сокращение', minWidth: 100 },
        { id: 'name', label: 'Наименование', minWidth: 100 },
        { id: 'region.name', label: 'Оф.наименование', minWidth: 100 },
        { id: 'okato', label: 'Окато', minWidth: 100 },
        { id: 'oktmo', label: 'Октмо', minWidth: 100 },
        { id: 'shortName', label: 'Долгота', minWidth: 100 },
        { id: 'shortName', label: 'Широта', minWidth: 100 },
        { id: 'actions', label: 'Действия', minWidth: 100 },
    ],
};

const TableCities = () => {
    const [inputsData, setInputsData] = useState({
        name: '',
        okato: '',
        oktmo: '',
        shortName: '',
    });
    const url = process.env.REACT_APP_URL_SVIDA;
    const path = process.env.REACT_APP_PATH_CITIES;
    const params = {
        name: inputsData.name,
        okato: inputsData.okato,
        oktmo: inputsData.oktmo,
        shortName: inputsData.shortName,
    };

    const onChangeInput = ({ target }) => {
        setInputsData({ ...inputsData, [target.id]: target.value });
    };

    return (
        <TableMain
            inputsData={inputsData}
            setInputsData={setInputsData}
            tableData={tableData}
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
            <TextField
                fullWidth
                onChange={onChangeInput}
                value={inputsData.shortName}
                id="shortName"
                label="Поиск по сокращению"
            />
            <TextField
                fullWidth
                onChange={onChangeInput}
                value={inputsData.okato}
                id="okato"
                label="Поиск по ОКАТО"
            />
            <TextField
                fullWidth
                onChange={onChangeInput}
                value={inputsData.oktmo}
                id="oktmo"
                label="Поиск по ОКТМО"
            />
            <br />
            <TextField fullWidth disabled label="Поиск по долготе" />
            <TextField fullWidth disabled label="Поиск по широте" />
        </TableMain>
    );
};
export default TableCities;
