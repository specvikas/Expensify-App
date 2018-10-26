import React from 'react';
import ReactDOM from 'react-dom';
import { Provider }  from 'react-redux';
import AppRouter from './router/AppRouter';
import ConfigureStore from './store/ConfigureStore';
import { addExpense } from './actions/expenses';
import { setTextFilter, sortByAmount } from './actions/filters';
import getVisibleExpenses from './selectors/expenses';
import 'normalize.css/normalize.css';
import './styles/styles.scss';

const store = ConfigureStore();

const jsx = (
        <Provider store={store}>
            <AppRouter />
        </Provider>
);

ReactDOM.render(jsx, document.getElementById('area'));

