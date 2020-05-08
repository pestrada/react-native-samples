import {
  FETCH_JOBS
} from '../actions/types';

const INITIAL_STATE = {
  results: [],
  region: {}
};

export default (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case FETCH_JOBS:
      return { region: action.payload.region, results: action.payload.data };
    default:
      return state;
  }
}