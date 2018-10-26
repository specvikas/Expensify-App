import { createStore } from 'redux';

const incerementCount = ({incrementBy = 1} = {}) => ({
    type : 'INCREMENT',
    incrementBy 
});

const decerementCount = ({decrementBy = 1} = {}) => ({
    type : 'DECREMENT',
    decrementBy
});

const setCount = ({count = store.getState().count} = {}) => ({
    type : 'SET',
    count 
});

const reset = () => ({
    type : 'RESET'
});



const counterReducer = (state = { count : 0 }, action) => {
    switch(action.type){
        case 'INCREMENT' :
            return {
                count : state.count + action.incrementBy
            };
        case 'DECREMENT' :
            return {
                count : state.count - action.decrementBy
            };
        case 'RESET' :
            return {
                count : 0
            };
        case 'SET' :
            return {
                count : action.count
            };
        default : 
            return state;
    }
};

/* createStore() is the method used to create and initialize the store object. So what actually is going on behind the
   scenes ?? --> createStore() takes a function as a parameter which is reducer, reducer will return an object with the 
   initialized state and createStore will assign that object to the STORE object. */

const store = createStore(counterReducer); 


/* This is the method called whenever there is any update with the state, subscribe() --> it returns the method
   which can be called whenever you feel that updates are not required anymore  */

const unSubscribe =  store.subscribe(() => {
    console.log(store.getState().count);
});

/* dispatch() method is called on the store object with some object passed in the method as a parameter which evetually
   updates your state by calling the reducer and ending updating the store */

store.dispatch(incerementCount({incrementBy : 20}));

store.dispatch(incerementCount({incrementBy : 10}));

store.dispatch(reset());

store.dispatch(decerementCount({decrementBy : 10}));    

store.dispatch(decerementCount());

store.dispatch(setCount({count : 10}));
