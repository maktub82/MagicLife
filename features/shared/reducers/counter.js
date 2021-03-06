import { increment, decrement, reset, changeNumberOfPlayers } from '../actions/counter'

const INITIAL_LIFE_COUNT = 20;

const initialState = [INITIAL_LIFE_COUNT, INITIAL_LIFE_COUNT];

const counter = (state = INITIAL_LIFE_COUNT, action) => {
  switch (action.type) {
    case increment.getType():
      return state + 1;
    case decrement.getType():
      return state > 0 ? state - 1 : state;
    default:
      return state;
  }
}

export const counters = (state = initialState, action) => {
  switch (action.type) {
    case increment.getType():
    case decrement.getType():
      return [
        ...state.slice(0, action.payload.index),
        counter(state[action.payload.index], action),
        ...state.slice(action.payload.index + 1)];
    case reset.getType():
        return initialState;
    case changeNumberOfPlayers.getType():
        return new Array(action.payload).fill(INITIAL_LIFE_COUNT);
    default:
      return state;
  }
}
