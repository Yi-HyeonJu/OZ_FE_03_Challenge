// 애플리케이션의 상태 변화를 처리하는 리듀서 함수를 정의합니다.
// 각 액션에 따라 앱의 상태를 어떻게 변경할지 정의합니다.

import { INCREMENT, DECREMENT, LATE_INCREMENT, LATE_DECREMENT } from './action'

const basicState = {count: 0} 

const reducer = (state = basicState, action) => {
    switch (action.type) {
        case INCREMENT:
            return {count: state.count + 1}

        case DECREMENT:
            return {count: state.count - 1}

        case LATE_INCREMENT:
            return {count: state.count + 1}
    
            case LATE_DECREMENT:
                return {count: state.count - 1}

        default:
            return state
    }
}

export default reducer