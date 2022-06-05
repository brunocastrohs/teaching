import { AnyAction, createStore  } from 'redux';

enum ActionCodes {
  CHANGE_VALUE = 200
}

const reducer = (state = '', action:AnyAction): string => {
    let parameter = action.parameter ?? state;
    switch (action.type) {
        case ActionCodes.CHANGE_VALUE:
          return parameter;
        default:
          return state;
      }
}

const myStore = createStore(reducer);

export {myStore, ActionCodes };