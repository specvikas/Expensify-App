import React from 'react';
import moment from 'moment';
import { SingleDatePicker } from 'react-dates';
import 'react-dates/lib/css/_datepicker.css'

export default class ExpenseForm extends React.Component {

    constructor(props){
        super(props);

        this.state = {
            description: props.expense ? props.expense.description : '',
            note: props.expense ? props.expense.note : '',
            amount: props.expense ? (props.expense.amount).toString() : '',
            createdAt: props.expense ? moment(props.expense.createdAt) : moment(),
            calendarFocused: false,
            error: undefined
        };
    }

    onDescriptionChange = (e) => {
        const description = e.target.value;
        this.setState(() => ({description, error: undefined}));
    };

    onNoteChange = (e) => {
        const note = e.target.value;
        this.setState(() => ({note, error: undefined}));
    };

    onAmountChange = (e) => {
        const amount = e.target.value;
    if(!amount || amount.match(/^\d{1,}(\.\d{0,2})?$/)){
            this.setState(() => ({amount, error: undefined}));
        }
    };

    onDateChange = (createdAt) => {
       if(createdAt){
        this.setState(() => ({createdAt, error: undefined}));
       }
    };

    onFocusChange = ({focused}) => {
        this.setState(() => ({calendarFocused: focused}));
    };

    handleSubmit = (e) => {
        e.preventDefault();

        if(!this.state.description || !this.state.amount){
            this.setState(() => ({error: 'Please provide all the details !'}));
        }
        else{
            this.setState(() => ({error: undefined}));
            this.props.onSubmit({
                description: this.state.description,
                amount : parseFloat(this.state.amount, 10),
                createdAt: this.state.createdAt.valueOf(),
                note: this.state.note
            });
        }
    };

    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit}>
                    <input
                        type="text"
                        placeholder="description"
                        autoFocus
                        id="description"
                        value={this.state.description}
                        onChange={this.onDescriptionChange}
                    />  
                        &nbsp; &nbsp; &nbsp; &nbsp;
                    <input
                        type="text"
                        placeholder="amount"
                        value={this.state.amount}
                        onChange={this.onAmountChange}
                    />  
                        &nbsp; &nbsp; &nbsp; &nbsp;

                    <SingleDatePicker 
                        date = {this.state.createdAt}
                        onDateChange = {this.onDateChange}
                        focused = {this.state.calendarFocused}
                        onFocusChange = {this.onFocusChange}
                        numberOfMonths ={1}
                        isOutsideRange = {() => false}
                    />    
                    &nbsp; &nbsp; &nbsp; &nbsp;

                    <textarea
                        placeholder="Add a note (optional)"
                        value={this.state.note}
                        id="TA"
                        onChange={this.onNoteChange}
                    >
                    </textarea>
                        &nbsp; &nbsp; &nbsp; &nbsp;
 
                    <button>
                        Submit
                    </button>
                </form>
                {this.state.error && <h2>{this.state.error}</h2>}
            </div>
        )
    }
}