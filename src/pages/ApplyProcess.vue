<template>
  <div class="ap-container">
    <div class="top">
      <span
        style="margin-left: -10vw;"
        @click="moveBack"
      >&lt; 返回</span>
      <span>申请详情</span>
      <span />
    </div>

    <div>
      <div class="nav">
        <div>{{ approvalFormList.leader }}提交的用证申请</div>
        <p class="mydeal">
          等待我处理
        </p>
      </div>
      <div class="rd-content">
        <ul>
          <li>
            <div>姓名</div>
            <p>{{ approvalFormList.leader }}</p>
          </li>
          <li>
            <div>性别</div>
            <p>男</p>
          </li>
          <li>
            <div>出生日期</div>
            <p>{{ approvalFormList.birthDate }}</p>
          </li>
          <li>
            <div>籍贯</div>
            <p>{{ approvalFormList.birthplace }}</p>
          </li>
          <li>
            <div>民族</div>
            <p>{{ approvalFormList.nation }}</p>
          </li>
          <li>
            <div>政治面貌</div>
            <p>{{ approvalFormList.politicsStatus }}</p>
          </li>
          <li>
            <div>身份证号码</div>
            <p>{{ approvalFormList.idCard }}</p>
          </li>
          <li>
            <div>文化程度</div>
            <p>{{ approvalFormList.education }}</p>
          </li>
          <li>
            <div>工作部门</div>
            <p>{{ approvalFormList.department }}</p>
          </li>
          <li>
            <div>职务</div>
            <p>{{ approvalFormList.job }}</p>
          </li>
          <li>
            <div>联系电话</div>
            <p>{{ approvalFormList.tellphone }}</p>
          </li>
          <li>
            <div>证件名称</div>
            <p>{{ approvalFormList.certificate }}</p>
          </li>
          <li>
            <div>出发时间</div>
            <p>{{ approvalFormList.startTime }}</p>
          </li>
          <li>
            <div>回程时间</div>
            <p>{{ approvalFormList.endTime }}</p>
          </li>
          <li>
            <div>目的地</div>
            <p>{{ approvalFormList.destination }}</p>
          </li>
          <li>
            <div>使用事由</div>
            <p>{{ approvalFormList.reason }}</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="ad-graph">
      <p>流程</p>
      <div class="ad-first-graph">
        <div class="first-left-icon">
          <div class="first-graph">
            <p>{{ approvalFormList.leader[0] }}</p>
          </div>
        </div>
        <div class="first-text">
          <div>发起申请</div>
          <p>{{ approvalFormList.leader }}</p>
          <span class="time">{{ approvalFormList.createDate }}</span>
        </div>
      </div>
      <ul>
        <li
          v-for="(item,index) in approvalProcessList"
          :key="item.id"
        >
          <div class="ad-first-graph">
            <div class="first-left-icon">
              <div style="height: 8vw; margin: 1.33333vw auto; border-left: 0.66667vw solid #ccc;" />
              <div class="first-graph">
                <p>{{ approvalProcessList[index].approval[0] }}</p>
              </div>
            </div>
            <div class="first-text">
              <div style="font-size: 3.73333vw;">
                {{ approvalProcessList[index].currentOrganization }}
              </div>
              <p>{{ approvalProcessList[index].approval }}</p>
              <span class="time">{{ approvalProcessList[index].createDate }}</span>
            </div>
          </div>
        </li>
      </ul>
    </div>

    <div class="btn">
      <van-button
        color="#b13a3d"
        round
        style="width: 80vw;"
        @click="$router.push(`/deleteapply/${$route.params.id}`)"
      >
        取消申请
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: '',
      // sex: this.$store.state.approvalFormEntityList.sex === '0' ? '男' : '女',
      reason: ''
    }
  },
  computed: {
    approvalFormList () {
      return this.$store.state.approvalFormList
    },
    approvalFormEntityList () {
      return this.$store.state.approvalFormEntityList
    },
    approvalProcessList () {
      return this.$store.state.approvalFormList.approvalProcessList
    }
  },
  created () {
    this.$store.dispatch('ApplyDetail', this.$route.params.id)
  },
  mounted () {
    // console.log(this.$route.params.id)
  },
  methods: {
    moveBack () {
      this.$router.push('/userapply')
    }
  }
}
</script>

<style scoped lang="scss">
  .ap-container {
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

    .nav {
      padding: 2.66667vw 4vw;
      font-size: 4.8vw;
      line-height: 1.6;
      background-color: #fff;

      .mydeal {
        font-size: 3.2vw;
        line-height: 1.6;
        color: #ff976a;
      }
    }

    .rd-content {
      height: 65vh;
      padding: 4vw 4vw 1.33333vw;
      margin: 4vw 2.66667vw;
      margin-top: 3vh;
      overflow: hidden;
      overflow-y: scroll;
      background-color: #fff;
      border-radius: 2.66667vw;

      div {
        font-size: 3.2vw;
        color: #868686;
      }

      p {
        font-size: 4vw;
      }

      li {
        margin-bottom: 2.66667vw;
        line-height: 1.6;
      }
    }

    .btn {
      margin: 2vh auto;
      line-height: 6vh;
      color: black;
      text-align: center;
      background-color: #fff;
    }

    .ad-graph {
      position: relative;
      padding: 4vw 4vw 1.33333vw;
      margin: 4vw 2.66667vw;
      background-color: #fff;

      p {
        margin-bottom: 1vw;
        font-size: 6vw;
        font-weight: 500;
      }
    }

    .first-left-icon {
      display: flex;
      flex-direction: column;
    }

    .ad-first-graph {
      display: flex;
      align-items: flex-end;

      .first-graph {
        // position: relative;
        width: 9.33333vw;
        height: 9.33333vw;
        text-align: center;
        background-color: #1989fa;
        border-radius: 1.33333vw;

        p {
          font-size: 4vw;
          line-height: 9.33333vw;
          color: #fff;
        }
      }

      .first-text {
        position: relative;
        flex: 1;
        padding-left: 4vw;
        line-height: 3vw;

        div {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: 2.93333vw;
        }

        p {
          font-size: 3.2vw;
          color: #868686;
        }
      }
    }

    .time {
      position: absolute;
      top: 8vw;
      right: 1vw;
      font-size: 2.93333vw;
      color: #868686;
    }
  }
</style>
