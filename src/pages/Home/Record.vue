<template>
  <div class="R-container">
    <div class="top">
      <span
        style="margin-left: -10vw;"
        @click="moveHome"
      >&lt; 返回</span>
      <span>用证记录</span>
      <span />
    </div>

    <van-tabs
      v-model="active"
      color="#b13a3d"
      @click="getRecords"
    >
      <van-tab
        title="未归还"
        badge="0"
        style="height: 100%;"
      >
        <van-empty
          description="暂无数据"
          class="empty"
        />
      </van-tab>

      <van-tab
        title="已归还"
        style="padding: 0 2.66667vw 4vw;"
      >
        <ul>
          <li
            v-for="index in returnedList"
            :key="index.id"
            @click="gotoDetail(index.id)"
          >
            <div class="returned-card">
              <span>{{ index.leader }}的{{ index.certificate }}</span>
              <span style="float: right; color: #868686;">{{ index.certificateId }}</span>
              <div class="content">
                <p>借出时间：{{ index.startTime }}</p>
                <p>归还时间：{{ index.endTime }}</p>
                <p>借出类型：  出国境借出 </p>
                <p>地点： {{ index.destination }}</p>
                <p>事由： {{ index.reason }}</p>
              </div>
              <span class="redBlock">
                <van-tag
                  type="danger"
                  color="#b13a3d"
                  style="margin-right: 3vw;"
                >
                  {{ index.leader[0] }}
                </van-tag>
              </span>
              <span>由 {{ index.leader }} 提交</span>
            </div>
          </li>
        </ul>
        <van-empty
          v-show="!returnedList"
          description="暂无数据"
          class="empty"
        />
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
            v-for="index in allRecordList"
            :key="index.id"
            @click="$router.push(`/recordetail/${index.id}`)"
          >
            <div class="returned-card">
              <span>{{ index.leader }}的{{ index.certificate }}</span>
              <span style="float: right; color: #868686;">{{ index.certificateId }}</span>
              <div class="content">
                <p>借出时间：{{ index.startTime }}</p>
                <p>归还时间：{{ index.endTime }}</p>
                <p>借出类型：  出国境借出 </p>
                <p>地点： {{ index.destination }}</p>
                <p>事由： {{ index.reason }}</p>
              </div>
              <span class="redBlock">
                <van-tag
                  type="danger"
                  color="#b13a3d"
                  style="margin-right: 3vw;"
                >
                  {{ index.leader[0] }}
                </van-tag>
              </span>
              <span>由 {{ index.leader }} 提交</span>
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
import qs from 'qs'
export default {
  name: 'Record',
  data () {
    return {
      // 标签对应索引值
      active: 0,
      // 所有申请记录
      Allform: {
        leaderId: this.$store.state.userMessage.id,
        pageNo: 0,
        pageSize: 10
      }
    }
  },
  computed: {
    returnedList () {
      return this.$store.state.returnedList
    },
    allRecordList () {
      return this.$store.state.allRecordList
    }
  },
  mounted () {
    // console.log(this.$store.state.returnedList.length === 0)
  },
  methods: {
    moveHome () {
      this.$router.push('/home')
    },
    getRecords (index) {
      if (index === 1) {
        this.$store.dispatch('recordReturned')
      } else if (index === 2) {
        // console.log(qs.stringify(this.Allform))
        this.$store.dispatch('recordAll', qs.stringify(this.Allform))
      }
    },
    gotoDetail (id) {
      this.$router.push({ path: `/recordetail/${id}`, query: { message: 'returned' } })
      // this.$router.push({ path: `/recordetail/${id}` })
    }
  }

}
</script>

<style scoped lang="scss">
  .R-container {
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

    .returned-card {
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

    .empty {
      height: calc(var(--vh, 1vh) * 100 - 20.26667vw);
    }
  }
</style>
