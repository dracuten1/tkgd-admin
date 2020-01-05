import { LOGIN } from './LoginAction.js'

const init = {
    username: 'editor',
    isLogin: false
}

function LoginReducer(state = init, action) {
    switch (action.type) {
        case LOGIN:
            return {
                ...state,
                isLogin: true,
                username: action.username
            };
        default:
            return state;
    }

}

export default LoginReducer;