const initialState = {
  replayName: '',
  liveStatus: false,
};

const rootReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case 'SET_REPLAY_NAME':
      return {
        ...state,
        replayName: action.payload,
      };
    case 'SET_LIVE_STATUS':
      return {
        ...state,
        replayName: action.payload,
      };
    default:
      return state;
  }
};

export default rootReducer;
