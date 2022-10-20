import { getToken } from '@/utils/token.js'
const state = {
  userMessage: {},
  accessToken: getToken(),
  returnedList: [],
  // 所有申请记录
  allRecordList: [],
  // 我的消息
  messageList: [],
  waitApplyList: [],
  // 等待审批消息数
  waitApplyNum: '',
  // 通过的审批
  ApplyPassList: [],
  // 审批不通过
  FailList: [],
  // 全部审批
  AllApplyList: [],
  // 审批具体信息
  approvalFormList: [],
  approvalFormEntityList: [],
  // ------
  // 我通过的审批
  myPassApply: [],
  // 我拒绝通过的审批
  myFailApply: [],
  // 我审核的所有
  myApplyAll: []

}

export default state
