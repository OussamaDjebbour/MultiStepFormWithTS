import { Context, createContext } from 'react';

// Not a best Solution

const contextForm = createContext(null);

const initialState = {
  step: 1,
  monthORYear: false,
  active: false,
};

function reducer(state: object, action: any) {
  switch (action.type) {
    case 'start':
      return { ...state, active: true };

    default:
      return { ...state };
  }
}

// function FormProvider({ children }) {}
