<template>
  <div class="home_container">
    <div class="head">
      <p>因私出国服务平台</p>
      <van-cell
        class="cell1"
        is-link
        arrow-direction
        to="/personal"
      >
        <template #title>
          <div class="user">
            <img src="../../images/userImg.jpg">
            <span>{{ UserName }}</span>
          </div>
        </template>
      </van-cell>
    </div>
    <div class="body">
      <p>证照服务</p>
      <img src="../../images/home_img2.png">
      <ul>
        <li @click="moveApply">
          <img src="../../images/li1.png">
          <div>
            <p>用证申请</p>
            <span>证照使用申请</span>
          </div>
        </li>
        <li @click="moveRecord">
          <img src="../../images/li2.png">
          <div>
            <p>用证记录</p>
            <span>用在哪何时在用</span>
          </div>
        </li>
      </ul>
    </div>
    <Footer />
  </div>
</template>

<script>
export default {
  name: 'Home',
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
  mounted () {
    // console.log(this.$store.state.userMessage)
  },
  methods: {
    moveApply () {
      this.$router.push('/apply')
    },
    moveRecord () {
      this.$router.push('/record')
    }
  }
}
</script>

<style scoped lang="scss">
.home_container {
  font-size: 28px;

  .head {
    position: relative;
    height: 64vw;
    background-image: url(../../images/home_img.png);
    background-size: 100% 100%;

    p {
      padding: 4vw;
      font-size: 5.33333vw;
      color: #fff;
    }

    .cell1 {
      position: absolute;
      right: 4.7vw;
      bottom: 0;
      left: 4.7vw;
      width: 90vw;
      border-radius: 1.6vw;
      box-shadow: 0 0.8vw 1.86667vw rgb(0 0 0 / 10%);

      .user {
        display: flex;
        align-items: center;
      }

      img {
        height: 5vh;
        margin-right: 5vw;
        border-radius: 5vw;
      }
    }
  }

  .body {
    padding: 0 4vw;
    // background-color: pink;

    p {
      padding: 4.7vw 0;
      font-size: 5.8vw;
    }

    img {
      width: 100%;
      height: 100%;
      background-size: 100% 100%;
    }

    ul {
      display: flex;
      // flex-wrap: wrap;
      padding: 4vw 4vw 1.33333vw;

      li {
        display: flex;
        align-items: center;
        width: 39vw;
        height: 12vh;
        padding-left: 2.7vw;
        margin-right: 1.67vw;
        background-color: #f4f4f4;
        border-radius: 2.67vw;

        img {
          width: 8vw;
          height: 8vw;
        }

        p {
          margin-top: -5vw;
          margin-left: 2.67vw;
          font-size: 4vw;
          font-weight: 500;
        }

        span {
          margin-left: 2.67vw;
          font-size: 3.5vw;
        }
      }
    }
  }
}
</style>
