<template>
  <div class="p-container">
    <div class="top">
      我的
    </div>

    <div class="info">
      <div class="table">
        <img src="../images/userImg.jpg">
        <p>{{ UserName }}</p>
        <div class="message">
          <van-icon
            name="envelop-o"
            badge="0"
            size="20"
            @click="info()"
          />
        </div>
      </div>
    </div>

    <div class="plate">
      <img src="../images/person_img.png">
    </div>

    <div class="functions">
      <van-cell
        is-link
        @click="$router.push('/usermessage')"
      >
        <template #title>
          <div class="box">
            <img src="../images/icon1.png">
            <p>我的消息</p>
          </div>
        </template>
      </van-cell>
      <van-cell
        is-link
        @click="$router.push('/personalinfo')"
      >
        <template #title>
          <div class="box">
            <img src="../images/icon2.png">
            <p>个人信息</p>
          </div>
        </template>
      </van-cell>
      <van-cell
        is-link
        @click="$router.push('/userapply')"
      >
        <template #title>
          <div class="box">
            <img src="../images/icon3.png">
            <p>我的申请</p>
          </div>
        </template>
      </van-cell>
      <van-cell
        is-link
        @click="$router.push('/userapprove')"
      >
        <template #title>
          <div class="box">
            <img src="../images/icon4.png">
            <p>我的审批</p>
          </div>
        </template>
      </van-cell>
    </div>

    <div class="exit">
      退出登录
    </div>

    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Personal',
  data () {
    return {

    }
  },
  computed: {
    UserName () {
      return this.$store.state.userMessage.name
    }
  },
  created () {
    if (this.$store.state.userMessage.name === undefined) {
      this.$store.dispatch('userLogin')
    }
  },
  methods: {
    info () {
      this.$router.push('/usermessage')
    }
  }
}
</script>

<style scoped lang="scss">
  .p-container {
    height: 100%;
    background-color: #f1f3f5;

    .top {
      height: 8vh;
      line-height: 8vh;
      color: #fff;
      text-align: center;
      background-color: #b13a3d;
    }

    .info {
      display: flex;
      height: 15vh;
      background-color: #fff;

      .table {
        position: relative;
        display: flex;
        align-items: center;
        padding: 6vw 4vw 16vw;

        .message {
          position: absolute;
          right: -60vw;
        }
      }

      img {
        height: 6vh;
        margin-right: 5vw;
        border-radius: 5vw;
      }
    }

    .plate {
      height: 26.66667vw;
      margin: -11vw 4vw 0;
      overflow: hidden;
      border-radius: 4vw;

      img {
        width: 100%;
        height: 100%;
      }
    }

    .functions {
      margin-top: 5vh;

      .box {
        display: flex;
        line-height: 2vh;

        p {
          margin-left: 2vw;
        }
      }

      img {
        width: 1em;
        height: 1em;
      }
    }

    .exit {
      height: 7vh;
      margin-top: 5vh;
      line-height: 7vh;
      color: #b13a3d;
      text-align: center;
      background-color: #fff;
    }
  }
</style>
