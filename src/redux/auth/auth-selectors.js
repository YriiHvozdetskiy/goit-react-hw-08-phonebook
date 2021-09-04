const getIsLoggedIn  = state => state.authReducer.isLoggedIn;

const getUserName = state => state.authReducer.user.name;

const authSelectors = {
  getIsLoggedIn,
  getUserName,
}

export  default authSelectors;