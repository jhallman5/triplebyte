import 'isomorphic-fetch'

export function initialAction() {
  return {
    type: 'INITIAL',
    payload: new Promise(resolve => {
      fetch('/api/initial')
      .then(response => response.json())
      .then(json => resolve(json))
      .catch(error => console.log('Error in action', error))
    })
  }
}
