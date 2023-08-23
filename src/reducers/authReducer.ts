import { types } from "../types/types";

interface AuthState {
  logged: boolean;
}

interface Action {
  type: string;
  payload: any; // Puedes reemplazar 'any' con un tipo más específico si lo tienes definido
}

const initialState: AuthState = {
  logged: false,
};

export const authReducer = (state: AuthState = initialState, action: Action): AuthState => {
  switch (action.type) {
    case types.login:
      return {
        ...action.payload,
        logged: true,
      };

    case types.logout:
      return {
        ...action.payload,
        logged: false,
      };

    default:
      return state;
  }
};
