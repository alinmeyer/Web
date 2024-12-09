export const authReducer = (state, action) => {
    switch (action.type) {
      case "LOGIN_START":
        return {
          ...state,
          user: null,
          isFetching: true,
          error: false,
        };
      case "LOGIN_SUCCESS":
        return {
          ...state,
          user: action.payload, // Usuário autenticado vindo da API
          isFetching: false,
          error: false,
        };
      case "LOGIN_FAILURE":
        return {
          ...state,
          user: null,
          isFetching: false,
          error: true,
        };
      case "LOGOUT":
        return {
          user: null,
          isFetching: false,
          error: false,
        };
      default:
        return state;
    }
  };
  
