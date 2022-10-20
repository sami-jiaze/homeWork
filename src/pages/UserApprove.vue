<template>
  <div class="uap-container">
    <div class="top">
      <span
        style="margin-left: -10vw;"
        @click="movePersonal"
      >&lt; 返回</span>
      <span>我的审批</span>
      <span />
    </div>

    <van-tabs
      v-model="active"
      color="#b13a3d"
      @click="getApprove"
    >
      <van-tab
        title="等待审批"
        badge="0"
      >
        <van-empty
          description="暂无数据"
          class="empty"
        />
      </van-tab>

      <van-tab
        title="通过"
        style="padding: 0 2.66667vw 4vw;"
      >
        <ul>
          <li
            v-for="item in myPassApply"
            :key="item.id"
            @click="$router.push(`/approvedetain/${item.applyId}`)"
          >
            <div class="wait-apply">
              <span style="font-size: 4.26667vw;">{{ item.leader }}提交的用证申请</span>
              <span style="float: right; color: #868686;">{{ item.createDate }}</span>
              <div class="content">
                <div>联系电话:{{ item.tellphone }}</div>
                <div>工作部门:{{ item.department }}</div>
                <div>当前审批节点:{{ item.approvalProcessList[0].currentOrganization }} {{ item.approvalProcessList[0].approval }}</div>
              </div>
              <span class="redBlock">
                <van-tag
                  type="danger"
                  color="#1989fa"
                  style="margin-right: 3vw;"
                >
                  {{ item.leader[0] }}
                </van-tag>
              </span>
              <span>由{{ item.leader }}提交</span>
              <span class="pass status">通过</span>
            </div>
          </li>
        </ul>
        <p class="noMore">
          没有更多了
        </p>
      </van-tab>

      <van-tab
        title="拒绝"
        style="padding: 0 2.66667vw 4vw;"
      >
        <ul>
          <li
            v-for="item in myFailApply"
            :key="item.id"
            @click="$router.push(`/approvedetain/${item.applyId}`)"
          >
            <div class="wait-apply">
              <span style="font-size: 4.26667vw;">{{ item.leader }}提交的用证申请</span>
              <span style="float: right; color: #868686;">{{ item.createDate }}</span>
              <div class="content">
                <div>联系电话:{{ item.tellphone }}</div>
                <div>工作部门:{{ item.department }}</div>
                <div>当前审批节点:{{ item.approvalProcessList[0].currentOrganization }} {{ item.approvalProcessList[0].approval }}</div>
              </div>
              <span class="redBlock">
                <van-tag
                  type="danger"
                  color="#1989fa"
                  style="margin-right: 3vw;"
                >
                  {{ item.leader[0] }}
                  <!-- 庄 -->
                </van-tag>
              </span>
              <span>由{{ item.leader }}提交</span>
              <span class="fail status">拒绝</span>
            </div>
          </li>
        </ul>
        <p class="noMore">
          没有更多了
        </p>
      </van-tab>

      <van-tab
        title="全部"
        style="padding: 0 2.66667vw 4vw;"
      >
        <ul>
          <li
            v-for="(item) in myApplyAll"
            :key="item.id"
            @click="$router.push(`/approvedetain/${item.applyId}`)"
          >
            <div class="wait-apply">
              <span style="font-size: 4.26667vw;">{{ item.leader }}提交的用证申请</span>
              <span style="float: right; color: #868686;">{{ item.createDate }}</span>
              <div class="content">
                <div>联系电话:{{ item.tellphone }}</div>
                <div>工作部门:{{ item.department }}</div>
                <div>当前审批节点:{{ item.department }}</div>
                <div>{{ item.department }}</div>
              </div>
              <span class="redBlock">
                <van-tag
                  type="danger"
                  color="#1989fa"
                  style="margin-right: 3vw;"
                >
                  {{ item.leader[0] }}
                </van-tag>
              </span>
              <span>由{{ item.leader }}提交</span>
              <span
                class="status"
                :class="{
                  cancel: item.status==='4',
                  pass: item.status==='0',
                  fail: item.status==='1',
                  wait: item.status==='5'
                }"
              >
                {{ filterStatus(item.status) }}
              </span>
            </div>
          </li>
        </ul>
        <p class="noMore">
          没有更多了
        </p>
      </van-tab>
    </van-tabs>
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data () {
    return {
      active: 0
    }
  },
  computed: {
    ...mapState({
      myPassApply: state => state.myPassApply,
      myFailApply: state => state.myFailApply,
      myApplyAll: state => state.myApplyAll
    })
  },
  created () {
  },
  methods: {
    movePersonal () {
      this.$router.push('/personal')
    },
    getApprove (index) {
      if (index === 1) {
        this.$store.dispatch('MyApplyPass')
      } else if (index === 2) {
        this.$store.dispatch('MyApplyFail')
      } else if (index === 3) {
        this.$store.dispatch('MyApplyAll')
      }
    },
    filterStatus (val) {
      if (val === '5') {
        return '等待审批'
      } else if (val === '4') {
        return '撤回'
      } else if (val === '0') {
        return '成功'
      } else if (val === '1') {
        return '拒绝'
      }
    }
  }
}
</script>

<style scoped lang="scss">
  .uap-container {
    background-color: #f4f4f4;

    .top {
      display: flex;
      justify-content: space-around;
      height: 8vh;
      line-height: 8vh;
      color: #fff;
      text-align: center;
      background-color: #b13a3d;
    }

    .empty {
      height: calc(var(--vh, 1vh) * 100 - 20.26667vw);
    }

    .wait-apply {
      padding: 5.33333vw;
      margin-top: 4vw;
      font-size: 2.93vw;
      background-color: #fff;
      border-radius: 2.66667vw;

      .content {
        padding: 4vw 0;
        font-size: 3.46667vw;
        line-height: 1.8;
        color: #868686;
      }
    }

    .noMore {
      padding: 2.66667vw;
      margin-left: 40%;
      font-size: 2.93333vw;
      color: #b13a3d;
    }

    .status {
      position: absolute;
      right: 5vw;
      border-radius: 20px;
    }

    .pass {
      color: #07c160;
      border: 1px solid #07c160;
    }

    .fail {
      color: #ee0a24;
      border: 1px solid #ee0a24;
    }

    .wait {
      color: #1989fa;
      border: 1px solid #1989fa;
    }
  }
</style>
