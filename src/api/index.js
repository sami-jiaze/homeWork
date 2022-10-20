import { request } from '@/utils'

// 用户登录
export function reqUserLogin () {
  return request({
    method: 'post',
    url: '/api/login?username=04c4330ad630c93c25338dcb7db9916b8e518a0ddc10a99f9d19cfc501cc0f12df584b77948324a41c44a959da32fe3330e4bfdd3a1561976cc56d710f4dbd6c415362fa3551f0335eeaf28c29137c06d9b1ddfc0f9e5a83d45492166e2035676fab67800c951a&password=041c681df17ee43c60e4a7f34f3499780f34d63c8ca213ff74609cfe39abef2adade32f885e8d6d25c7f281e283d90f999d2e2f860230bd0716fad149bd52589184a7c871be770aa1f47226918471ee63810d13c018bc5635a3809b31bbcab4bf91c9f7154c1be'
  })
}

// 用证记录-已归还
export function reqRecordReturned () {
  return request({
    method: 'get',
    url: '/api/lic/record/v1.0/list?leaderId=396437582486958081&status=1&pageNo=0&pageSize=10'
  })
}
// 用证记录-未归还
// 用证记录-全部
export function reqRecordAll (params) {
  return request({
    method: 'get',
    url: `/api/lic/record/v1.0/list?${params}`
  })
}

// 我的消息
export function reqMyMessage () {
  return request({
    method: 'get',
    url: '/api/lic/message/v1.0/list?pageNo=1&pageSize=10'
  })
}

// 我的申请等待审批
export function reqWaitApply () {
  return request({
    method: 'get',
    url: '/api/lic/approval/v1.0/list?pageNo=1&pageSize=10&status=5'
  })
}
// 我的申请审批通过
export function reqApplyPass () {
  return request({
    method: 'get',
    url: '/api/lic/approval/v1.0/list?pageNo=0&pageSize=10&status=0'
  })
}
// 我的申请审批没通过
export function reqApplyFail () {
  return request({
    method: 'get',
    url: '/api/lic/approval/v1.0/list?pageNo=0&pageSize=10&status=1'
  })
}
// 我的申请全部审批
export function reqMyAllApply () {
  return request({
    method: 'get',
    url: '/api/lic/approval/v1.0/list?pageNo=0&pageSize=10&status='
  })
}
// 审批详情
export function reqMyApplyDetail (id) {
  return request({
    method: 'get',
    url: `/api/lic/approval/v1.0/getProcess/${id}`
  })
}
// --------
// 取消申请 /api/lic/approval/v1.0/delete/502861246492569600
export function reqMyCancelApply (form) {
  return request({
    method: 'delete',
    url: `/api/lic/approval/v1.0/delete/${form.id}`,
    data: `reason:${form.reason}`
  })
}
// 我通过的审批 /api/lic/process/v1.0/list?pageNo=0&pageSize=10&status=0
export function reqMyApplyPass (id) {
  return request({
    method: 'get',
    url: '/api/lic/process/v1.0/list?pageNo=0&pageSize=10&status=0'
  })
}
// 我审核不通过的审批 /api/lic/process/v1.0/list?pageNo=0&pageSize=10&status=1
export function reqMyApplyFail () {
  return request({
    method: 'get',
    url: '/api/lic/process/v1.0/list?pageNo=0&pageSize=10&status=1'
  })
}
// 我审核的所有审批 /api/lic/process/v1.0/list?pageNo=0&pageSize=10&status=
export function reqMyApplyAll () {
  return request({
    method: 'get',
    url: '/api/lic/process/v1.0/list?pageNo=0&pageSize=10&status='
  })
}
