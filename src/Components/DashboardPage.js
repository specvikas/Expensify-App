import React from 'react';
import ExpenseList from './ExpenseList';
import ExpenseListFilters from './ExpenseListFilters';

const DashboardPage = () => (
    <div className="body">
        <ExpenseListFilters />
        <ExpenseList />
    </div>
);

export default DashboardPage;