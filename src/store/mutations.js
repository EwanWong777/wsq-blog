const OPEN_SIDEBAR = 'OPEN_SIDEBAR'

export default {
  [OPEN_SIDEBAR](state) {
    state.openSideBar = !state.openSideBar
  },
};