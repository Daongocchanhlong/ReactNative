import * as types from './../Constants/actiontypes';

initialState = {
  isLoading: true,
};

var moveReducer = (state = initialState, action) => {
  if (action.type === types.ISLOADING) 
      return {isLoading: !state.isLoading};  
  return state;
};

export default moveReducer;
