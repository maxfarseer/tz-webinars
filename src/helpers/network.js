const API_ROOT = 'https://5ab9ca1ed9ac5c001434ecb4.mockapi.io'

export const httpGet = async endPoint => {
  try {
    const response = await fetch(`${API_ROOT}/${endPoint}`)
    if (response.ok) {
      const json = await response.json()
      return json
    } else {
      throw new Error(response.status)
    }
  } catch (err) {
    console.warn('httpGet error ', err)
  }
}

// without async/await
export const httpGetWithoutAsyncAwait = endPoint => {
  return fetch(`${API_ROOT}/${endPoint}`)
    .then(response => {
      if (response.ok) {
        return response.json()
      } else {
        throw new Error(response.status)
      }
    })
    .then(json => json)
    .catch(err => console.warn('httpGetWithoutAsyncAwait error ', err))
}
