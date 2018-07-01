const users = (state = {}, action) => {
  switch (action.type) {
    // 设置当前用户
    case 'SET_CURRENT':
      state.currentUser = action.name;
      return state; // { currentName: XXX }
    default:
      return state
  }
}

export default users