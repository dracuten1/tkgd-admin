export const LOGIN = 'LOGIN';
export const login = (username) => {
    return { type: LOGIN, username }
}