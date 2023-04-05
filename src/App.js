import React, { useEffect } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Authorization from './components/Authorization/Authorization';
import Layout from './components/Layout/Layout';
import TableDrivers from './pages/TableDrivers/TableDrivers';
import TableDirections from './pages/TableDirections/TableDirections';
import TablePeople from './pages/TablePeople/TablePeople';
import TableCities from './pages/TableCities/TableCities';
import { useSelector, useDispatch } from 'react-redux';
import { fetchUser } from './redux/user/userActions';

const routes = [
    { path: '/drivers', component: TableDrivers },
    { path: '/directions', component: TableDirections },
    { path: '/people', component: TablePeople },
    { path: '/cities', component: TableCities },
];

function App() {
    const { user } = useSelector((state) => state);
    const dispatch = useDispatch();

    useEffect(() => {
        if (localStorage.getItem('token')) {
            dispatch(fetchUser());
        }
    }, [dispatch]);

    if (!user.name && !localStorage.getItem('token')) {
        window.history.pushState(null, null, '/login');
        return <Authorization />;
    }

    return (
        <BrowserRouter>
            <Switch>
                <Layout>
                    {routes.map((item, index) => (
                        <Route
                            key={index}
                            path={item.path}
                            component={item.component}
                            exact
                        />
                    ))}
                </Layout>
            </Switch>
        </BrowserRouter>
    );
}

export default App;
