import React from 'react';
import { Link } from 'react-router-dom';
import { removeExpense } from '../actions/expenses';
import moment from 'moment';

const ExpenseLisItem = (props) => (
    <div>
        <Link to={`/edit/${props.expense.id}`} className="link">  <h3>{props.expense.description}</h3>  </Link>
        <p> <b>Amount:</b>&nbsp;{props.expense.amount}&nbsp;&nbsp;<b>Date:</b>{moment(props.expense.createdAt).format("DD-MM-YYYY")} </p> 
    </div>
);

export default ExpenseLisItem;