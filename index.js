import {createStore} from './redux.js'

function reducer(state, data) {
    state = data;
    return state;
}

const store = createStore(reducer);



// (뭘 수정할거야, 이렇게 수정해줘)
store.dispatch({counter: 1});

console.log(store.getState())