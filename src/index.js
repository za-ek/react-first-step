import React from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux'

/***** CHECK REACT */
class HelloMessage extends React.Component {
    render() {
        return (
            <div>
                Running on {this.props.name} environment
            </div>
        );
    }
}


ReactDOM.render(
    <HelloMessage name={process.env.NODE_ENV} />,
    document.getElementsByTagName('body')[0]
);

/***** CHECK REDUX */
function counter(state = 0, action) {
    switch (action.type) {
        case 'INCREMENT':
            return state + 1;
        case 'DECREMENT':
            return state - 1;
        default:
            return state
    }
}
let store = createStore(counter);
store.subscribe(() =>
    console.log(store.getState())
);
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'INCREMENT' });
store.dispatch({ type: 'DECREMENT' });

