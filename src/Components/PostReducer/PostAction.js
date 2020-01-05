export const ACCEPT = 'ACCEPT';
export const REJECT = 'REJECT';
export const accept = (id) => {
    return { type: ACCEPT, id }
}
export const reject = (id) => {
    return { type: REJECT, id }
}