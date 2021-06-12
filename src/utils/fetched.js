export const fetched = (api, method = 'GET') => {
  const options = {
    method,
    'Access-Control-Allow-Credentials': true,
    'Cache-Control': 'no-cache',
    'credentials':'include'
  }
  return fetch(api, options)
}
