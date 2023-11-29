export default function handleResponseFromAPI(promise) {
    return promise
      .then(() => ({ status: 200, body: 'success' }))
      .catch(() => Error('Error occurred during API request'))
      .finally(() => { console.log('Got a response from the API'); });
  }