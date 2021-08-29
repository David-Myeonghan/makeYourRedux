// 자신의 컴포넌트가 필요한 상태에만 관심
// 수정은 한곳에서만 발생. 구독 컴포넌트가 아닌
// 리덕스는 앱의 상태 디자인이 어떤지 알 수 없다.
// 수정 제공 불가
// 리덕스는 수정 해야할 시점에 수정 함수를 호출만 해줘

export function createStore(reducer)  {
    let state;

    function dispatch(data){
        state = reducer(state, data);

    }

    function getState() {
        return state;
    }

    return {
        dispatch,
        // 직접 state 리턴하면 바깥에서 직접 수정 가능, doUpdate()통해서가 아닌.
        getState,
    }

}