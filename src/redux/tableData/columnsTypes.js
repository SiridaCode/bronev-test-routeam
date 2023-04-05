export const SET_DRIVERS = 'SET_DRIVERS';
export const SET_DIRECTIONS = 'SET_DIRECTIONS';
export const SET_PEOPLE = 'SET_PEOPLE';
export const INITIAL_STATE = {
    drivers: {
        name: 'Список водителей',
        columns: [
            { id: 'lastname', label: 'Фамилия', minWidth: 170 },
            { id: 'firstname', label: 'Имя', minWidth: 100 },
            { id: 'patronymic', label: 'Отчество', minWidth: 100 },
            { id: 'sex', label: 'Пол', minWidth: 100 },
            { id: 'birthDate', label: 'Дата рождения', minWidth: 100 },
            { id: 'active', label: 'Активность', minWidth: 100 },
            { id: 'actions', label: 'Действия', minWidth: 100 },
        ],
    },
    directions: {
        name: 'Список направлений',
        columns: [
            { id: 'name', label: 'Наименование', minWidth: 170 },
            { id: 'shortName', label: 'Сокращение', minWidth: 100 },
            { id: 'actions', label: 'Действия', minWidth: 100 },
        ],
    },
    people: {
        name: 'Список пассажиров',
        columns: [
            { id: 'firstname', label: 'Имя', minWidth: 170 },
            { id: 'lastname', label: 'Фамилия', minWidth: 170 },
            { id: 'patronymic', label: 'Отчество', minWidth: 170 },
            { id: 'phone', label: 'Телефон', minWidth: 170 },
            { id: 'email', label: 'E-mail', minWidth: 170 },
            { id: 'sex', label: 'Пол', minWidth: 170 },
            { id: 'birthdate', label: 'Дата рождения', minWidth: 170 },
            { id: 'active', label: 'Активность', minWidth: 100 },
            { id: 'actions', label: 'Действия', minWidth: 100 },
        ],
    },
};
