//애플리케이션에서 사용되는 모든 Redux 액션 타입과 액션 생성자를 정의합니다.

export const INCREMENT = "INCREMENT"
export const DECREMENT = "DECREMENT"

export const LATE_INCREMENT = "LATE_INCREMENT"
export const LATE_DECREMENT = "LATE_DECREMENT"


export const increment = () => {
    return{
        type: "INCREMENT"
    }
}

export const decrement = () => {
    return{
        type: "DECREMENT"
    }
}

export const lateIncrement = () => dispatch => {
    setTimeout(() => {
            dispatch({
                type: "LATE_INCREMENT"
        })
    }, 1000)
}

export const lateDecrement = () => dispatch => {
    setTimeout(() => {
        dispatch({
            type: "LATE_DECREMENT"
    })
}, 1000)
}