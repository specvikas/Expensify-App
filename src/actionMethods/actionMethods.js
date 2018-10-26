import { setTextFilter, sortByDate, sortByAmount, setStartDate, setEndDate } from '../actions/filters';

export function settingStartDate (startDate) {
  return dispatch => dispatch(setStartDate(startDate));
}

export function settingEndDate (endDate) {
  return dispatch => dispatch(setEndDate(endDate));
}
          
export function settingTextFilter  (textFilter) {
  return dispatch => dispatch(setTextFilter(textFilter));
}
    
export function sortingByDate() {
  return dispatch => dispatch(sortByDate());
}

export function sortingByAmount () {
  return dispatch => dispatch(sortByAmount());
}
