import {createStore} from './redux.js'

// action (type)
const COUNTER = 'count'

function reducer(state, action) {
    if (action.type === COUNTER) {
        return {...state, counter: action.payload.counter};
    }
    return state;
}

function listener() {
    console.log(store.getState())
}

function actionCreator(type, payload) {
    return {
        type,
        payload
    }
}

const store = createStore(reducer);

store.subscribe(listener);

// (뭘 수정할거야, 이렇게 수정해줘)
// store.dispatch(actionCreator(COUNTER, {  counter: 2}));
// dispatch 는 다시 아래와 같이 진화
function counter(data) {
    store.dispatch(actionCreator(COUNTER, data));
}

counter({counter: 1})