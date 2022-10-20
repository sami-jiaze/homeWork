<template>
  <div class="rd-container">
    <div class="top">
      <span
        style="margin-left: -10vw;"
        @click="moveHome"
      >&lt; 返回</span>
      <span>记录详情</span>
      <span />
    </div>
    <div class="nav">
      <span>{{ element.leader }}的{{ element.certificate }}</span>
      <span class="nav-status">已归还</span>
      <div class="nav-id">
        {{ element.certificateId }}
      </div>
    </div>
    <div class="rd-content">
      <ul>
        <li>
          <div>借出时间</div>
          <p>{{ element.startTime }}</p>
        </li>
        <li>
          <div>归还时间</div>
          <p>{{ element.endTime }}</p>
        </li>
        <li>
          <div>借出类型</div>
          <p>出国境借出</p>
        </li>
        <li>
          <div>地点</div>
          <p>{{ element.destination }}</p>
        </li>
        <li>
          <div>事由</div>
          <p>{{ element.reason }}</p>
        </li>
        <li>
          <div>归还提醒时间</div>
          <p>{{ element.returnTime }}</p>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      status: ''
    }
  },
  computed: {
    returnedList () {
      return this.$store.state.returnedList
    },
    element () {
      let element = {}
      for (let index = 0; index < this.$store.state.returnedList.length; index++) {
        if (this.$route.params.id === this.$store.state.returnedList[index].id) {
          element = this.$store.state.returnedList[index]
        }
      }
      return element
    }
  },
  created () {
    // console.log(this.$route.params.id)
    // console.log(this.$route.query.message)
    this.$store.dispatch('recordReturned')
  },
  mounted () {
    if (this.$route.query.message === 'returned') {
      // this.tempList = this.$store.state.returnedList
      // this.status = '已归还'
      console.log(this.status)
    // console.log(this.$store.state.returnedList)
    }
  },
  methods: {
    moveHome () {
      this.$router.push('/record')
    }
  }
}
</script>

<style scoped lang="scss">
  .rd-container {
    height: 100%;
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

      .nav-id {
        font-size: 3.2vw;
        color: #868686;
      }

      .nav-status {
        margin-left: 10px;
        font-size: 3vw;
        color: rgb(177, 58, 61);
        border: 1px solid rgb(177, 58, 61);
        border-radius: 20vw;
      }
    }

    .rd-content {
      padding: 4vw 4vw 1.33333vw;
      margin: 4vw 2.66667vw;
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
  }
</style>
