import React from 'react';
import { connect } from 'react-redux';
import { DateRangePicker } from 'react-dates';
import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';
class ExpenseListFilters extends React.Component {

    state = {
        calendarFocused: null
    };

    onDatesChange = ({ startDate, endDate }) => {
        this.props.settingStartDate(startDate);
        this.props.settingEndDate(endDate);
    };

    onFocusChange = (calendarFocused) => {
        this.setState(() => ({calendarFocused}))
     };

render() {
    return (
        <div>
            <input type="text" value={this.props.filters.text} onChange={(e) => {
                this.props.settingTextFilter(e.target.value);
            }}/>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <select value={this.props.filters.sortBy} onChange={(e) => {
                if(e.target.value === "date"){
                    this.props.sortingByDate();
                }
                else{
                    this.props.sortingByAmount();
                }
            }}>
                <option value="date">Date</option>
                <option value="amount">Amount</option>
            </select>
            &nbsp; &nbsp; &nbsp; &nbsp;
            <DateRangePicker 
            startDate = {this.props.filters.startDate}
            endDate = {this.props.filters.endDate}
            onDatesChange = {this.onDatesChange}
            focusedInput={this.state.calendarFocused}
            onFocusChange= {this.onFocusChange}
            showClearDates = {true}
            numberOfMonths = {1}
            isOutsideRange = {() => false}
            />
        </div>
    );
}}

const mapStateToProps = state => (
    {
        filters: state.filters
    }
);

const mapDispatchToProps = dispatch => {
    return {
            settingStartDate :  (startDate) => { dispatch(setStartDate(startDate)) },
            settingEndDate : (endDate) => dispatch(setEndDate(endDate)),
            settingTextFilter : (textFilter) => dispatch(setTextFilter(textFilter)),
            sortingByDate : () => dispatch(sortByDate()),
            sortingByAmount : () => dispatch(sortByAmount())
    };
};
export default connect(mapStateToProps, mapDispatchToProps)(ExpenseListFilters);