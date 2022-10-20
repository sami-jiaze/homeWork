import * as types from './mutation-types'

const mutations = {
  // [types.SET_BARRAGE_LIST] (state, barrageList) {
  //   state.barrageList = barrageList
  // }
  [types.USER_MESSAGE] (state, userMessage) {
    state.userMessage = userMessage
  },
  [types.CHANGE_TOKEN] (state, accessToken) {
    state.accessToken = accessToken
  },
  [types.RECORD_RETURNED] (state, list) {
    state.returnedList = list
  },
  [types.ALL_RECORD] (state, list) {
    state.allRecordList = list
  },
  [types.MY_MESSAGE] (state, list) {
    state.messageList = list
  },
  [types.WAIT_APPLY] (state, res) {
    state.waitApplyList = res.list
    state.waitApplyNum = res.count
  },
  [types.APPLY_DETAIL] (state, res) {
    state.approvalFormEntityList = res.item.approvalFormEntityList
    state.approvalFormList = res.item.ApprovalFormList
  },
  [types.APPLY_PASS] (state, list) {
    state.ApplyPassList = list
  },
  [types.APPLY_FAIL] (state, list) {
    state.FailList = list
  },
  [types.APPLY_ALL] (state, list) {
    state.AllApplyList = list
  },
  // -------
  [types.MY_APPLY_PASS] (state, list) {
    state.myPassApply = list
  },
  [types.MY_APPLY_FAIL] (state, list) {
    state.myFailApply = list
  },
  [types.MY_APPLY_ALL] (state, list) {
    state.myApplyAll = list
  }
}

export default mutations
