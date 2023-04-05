import React, { useState } from 'react';
import TableMain from '../../components/Table/TableMain/TableMain';
import TextField from '@mui/material/TextField';
import { useSelector } from 'react-redux';

const TablePeople = () => {
    const { people } = useSelector((state) => state.table);
    const [inputsData, setInputsData] = useState({
        FIO: '',
        document: '',
        phone: '',
    });

    const url = process.env.REACT_APP_URL_CORE;
    const path = process.env.REACT_APP_PATH_PEOPLE;
    const params = {
        FIO: inputsData.FIO,
        document: inputsData.document,
        phone: inputsData.phone,
    };

    const onChangeInput = ({ target }) => {
        setInputsData({ ...inputsData, [target.id]: target.value });
    };

    return (
        <TableMain
            inputsData={inputsData}
            setInputsData={setInputsData}
            tableData={people}
            url={url}
            path={path}
            params={params}
        >
            <TextField
                fullWidth
                onChange={onChangeInput}
                value={inputsData.FIO}
                helperText=" "
                id="FIO"
                label="Поиск по ФИО"
            />
            <TextField
                fullWidth
                onChange={onChangeInput}
                value={inputsData.document}
                helperText=" "
                id="document"
                label="Поиск по серии или номеру документа"
            />
            <TextField
                fullWidth
                onChange={onChangeInput}
                value={inputsData.phone}
                helperText=" "
                id="phone"
                label="Поиск по телефону"
            />
        </TableMain>
    );
};
export default TablePeople;
