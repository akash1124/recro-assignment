import * as constant from '../constants/index';

const initialState = {
  cockpitData: [],
  page: 0
};

export function cockpitReducer(state = initialState, action) {
  switch (action.type) {
    case constant.SET_COCKPIT_DATA: {
      return {
        ...state,
        cockpitData: state.cockpitData.concat(action.payload.data),
        page: state.page + 10
      };
    }
    default:
      return state;
  }
}

