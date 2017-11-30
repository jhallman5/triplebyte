export default function reducer(state = {
  initial: null
}, action) {
  switch(action.type) {
    case 'INITIAL_FULFILLED': {
      return {
        ...state,
        initial: action.payload
      }
    }
    case 'INITIAL_REJECTED': {
      return {
        ...state
      }
    }
    default: {
      return {
        ...state
      }
    }
  }
}
