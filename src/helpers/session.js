export function checkResponse(res) {
  if (res.status === 'ok') {
    return true
  }
  return false
}
