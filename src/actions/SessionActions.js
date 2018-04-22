export const LOG_IN = 'LOG_IN'
export const LOG_OUT = 'LOG_OUT'

export function logIn(params) {
  return {
    type: LOG_IN,
    payload: {
      name: params.username,
    },
  }
}

export function logOut() {
  return {
    type: LOG_OUT,
  }
}
