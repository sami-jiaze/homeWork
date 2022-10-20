import Home from '@/pages/Home/Home.vue'
import Login from '@/pages/Login.vue'
import Personal from '@/pages/Personal.vue'
import Apply from '@/pages/Home/Apply.vue'
import Record from '@/pages/Home/Record.vue'
import RecordDetail from '@/pages/RecordDetail.vue'
import UserMessage from '@/pages/UserMessage.vue'
import UserApply from '@/pages/UserApply.vue'
import ApplyProcess from '@/pages/ApplyProcess.vue'
import UserApprove from '@/pages/UserApprove.vue'
import ApproveDetain from '@/pages/ApproveDetail.vue'
import PersonalInfo from '@/pages/PersonalInfo.vue'
import DeleteApply from '@/pages/DeleteApply.vue'

export default [
  {
    path: '/home',
    component: Home
  },
  {
    path: '/personal',
    component: Personal
  },
  {
    path: '/apply',
    component: Apply
  },
  {
    path: '/record',
    component: Record
  },
  {
    path: '/recordetail/:id',
    component: RecordDetail
  },
  {
    path: '/usermessage',
    component: UserMessage
  },
  {
    path: '/userapply',
    component: UserApply
  },
  {
    path: '/applyprocess/:id',
    component: ApplyProcess
  },
  {
    path: '/approvedetain/:id',
    component: ApproveDetain
  },
  {
    path: '/deleteapply/:id',
    component: DeleteApply
  },
  {
    path: '/userapprove',
    component: UserApprove
  },
  {
    path: '/personalinfo',
    component: PersonalInfo
  },
  {
    path: '/',
    component: Login
  }
]
