import * as types from './mutation-types'
import { setToken } from '@/utils/token.js'
import { reqUserLogin, reqRecordReturned, reqRecordAll, reqMyMessage, reqMyCancelApply, reqWaitApply, reqMyApplyDetail, reqApplyPass, reqApplyFail, reqMyAllApply, reqMyApplyPass, reqMyApplyFail, reqMyApplyAll } from '../api/index.js'

// export const addBarrageList = ({ commit, state }, barrageInfo) => {
//   const list = lang.cloneDeep(state.barrageList)
//   const newList = list.filter(item => !item.isEnd)
//   newList.push(barrageInfo)
//   commit(types.SET_BARRAGE_LIST, newList)
// }

// 用户登录
export const userLogin = async ({ commit }) => {
  const res = await reqUserLogin()
  // console.log(res.errMsg)
  if (res.errMsg === '请求成功.') {
    // console.log(res.item.token.access_token) 获取token
    commit(types.CHANGE_TOKEN, res.item.token.access_token)
    commit(types.USER_MESSAGE, res.item.user)
    setToken(res.item.token.access_token)
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}

// 已归还的用证申请
export const recordReturned = async ({ commit }) => {
  const res = await reqRecordReturned()
  if (res.errMsg === '请求成功.') {
    commit(types.RECORD_RETURNED, res.page.list)
    // console.log(res.page.list)
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}

// 全部用证申请
export const recordAll = async ({ commit }, data) => {
  const res = await reqRecordAll(data)
  if (res.errMsg === '请求成功.') {
    commit(types.ALL_RECORD, res.page.list)
    // console.log(res)
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}
// 获取个人消息 reqMyMessage
export const getMessge = async ({ commit }) => {
  const res = await reqMyMessage()
  if (res.errMsg === '请求成功.') {
    commit(types.MY_MESSAGE, res.page.list)
    // console.log(res.page.list)
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}
// 我的申请等待审批
export const WaitApply = async ({ commit }) => {
  const res = await reqWaitApply()
  if (res.errMsg === '请求成功.') {
    commit(types.WAIT_APPLY, res.page)
    // console.log(res.page.list)
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}
// 审批详情
export const ApplyDetail = async ({ commit }, id) => {
  const res = await reqMyApplyDetail(id)
  if (res.errMsg === '请求成功') {
    commit(types.APPLY_DETAIL, res)
    // console.log(res.item)
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}
// 我的审批通过
export const PassApply = async ({ commit }) => {
  const res = await reqApplyPass()
  if (res.errMsg === '请求成功.') {
    commit(types.APPLY_PASS, res.page.list)
    // console.log(res.page.list)
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}
// 我的审批不通过
export const FailApply = async ({ commit }) => {
  const res = await reqApplyFail()
  if (res.errMsg === '请求成功.') {
    commit(types.APPLY_FAIL, res.page.list)
    // console.log(res.page.list)
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}
// 我的全部审批
export const AllApply = async ({ commit }) => {
  const res = await reqMyAllApply()
  if (res.errMsg === '请求成功.') {
    commit(types.APPLY_ALL, res.page.list)
    // console.log(res.page.list)
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}
// ------------------------
// 取消审批
export const CancelApply = async ({ commit }, data) => {
  const res = await reqMyCancelApply(data)
  if (res.errMsg === '撤回成功!') {
    this.Notify('通知内容')
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}

// 我通过的审批
export const MyApplyPass = async ({ commit }) => {
  const res = await reqMyApplyPass()
  if (res.errMsg === '请求成功.') {
    commit(types.MY_APPLY_PASS, res.page.list)
    // console.log(res.page.list)
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}
// 我不通过的审批
export const MyApplyFail = async ({ commit }) => {
  const res = await reqMyApplyFail()
  if (res.errMsg === '请求成功.') {
    commit(types.MY_APPLY_FAIL, res.page.list)
    // console.log(res.page.list)
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}
// 所有审批
export const MyApplyAll = async ({ commit }) => {
  const res = await reqMyApplyAll()
  if (res.errMsg === '请求成功.') {
    commit(types.MY_APPLY_ALL, res.page.list)
    // console.log(res.page.list)
    return 'ok'
  } else {
    return Promise.reject(new Error(res.message))
  }
}
