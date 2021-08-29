// 자신의 컴포넌트가 필요한 상태에만 관심
// 수정은 한곳에서만 발생. 구독 컴포넌트가 아닌
// 리덕스는 앱의 상태 디자인이 어떤지 알 수 없다.
// 수정 제공 불가
// 리덕스는 수정 해야할 시점에 수정 함수를 호출만 해줘

// 두 컴포넌트가 공통의 관심사를 갖고, 한 컴포넌트가 상태를 바꿀 때, 다른 한 컴포넌트는 그것을 어떻게 알 수 있는가? (예, addEventListener('click', function() )
// => pop(s) up 패턴.
export function createStore(reducer)  {
    let state;
    const handler = [];

    function dispatch(action){
        state = reducer(state, action);
        handler.forEach((listener) => {
            listener();
        })

    }

    function getState() {
        return state;
    }

    function subscribe(listener) {
        handler.push(listener);

    }

    return {
        dispatch,
        // 직접 state 리턴하면 바깥에서 직접 수정 가능, doUpdate()통해서가 아닌.
        getState,
        subscribe
    }

}