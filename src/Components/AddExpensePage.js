import React from 'react';
import { connect } from 'react-redux'
import ExpenseForm from './ExpenseForm';
import { addExpense } from '../actions/expenses';
import { setTextFilter } from '../actions/filters';

const AddExpensePage = (props) => (
    <div className="body">
        {console.log("-------------------- PROPS -----------------",props)}
        <h1>Add Expense</h1>
        <ExpenseForm 
            onSubmit = {(expense) => {
                props.dispatch(addExpense(expense));
                props.dispatch(setTextFilter(''));
                props.history.push('/');
            }}
        />
    </div>
);

export default connect()(AddExpensePage);