import {createStore} from './redux.js'

function reducer(state, data) {
    if (data.type === 'count') {
        return {...state, counter: data.payload.counter};
    }
    return state;
}

const store = createStore(reducer);



// (뭘 수정할거야, 이렇게 수정해줘)
store.dispatch({
    type: 'count',
    payload: {
        counter: 1
    },
});

console.log(store.getState())