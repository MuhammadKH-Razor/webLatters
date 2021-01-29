import actiontype from '../dispatch/dispatchAction';

const initState = {
    Template: ''
  }
  
  // reducer
  const rootReducer = (state = initState, action) => {

  if(action.type === actiontype.TEMPLATEENTER) {
    return {
      ...state,
      Template: action.value
    }
  }

  return state;
}

  export default rootReducer;