<template>
  <div class="Login">
    <div class="login_container">
      <img src="../images/fzu.png">

      <van-form
        label-align="center"
        @submit="onSubmit"
      >
        <van-field
          v-model="username"
          name="username"
          left-icon="manager"
          placeholder="请输入账号"
        />
        <van-field
          v-model="password"
          type="password"
          name="password"
          left-icon="lock"
          placeholder="请输入密码"
        />
        <div style="margin: 16px; margin-top: 16vw;">
          <van-button
            style="width: 70vw;"
            round
            block
            type="info"
            color="#b13a3d"
            native-type="submit"
          >
            提交
          </van-button>
        </div>
      </van-form>
      <van-button
        style="width: 70vw; margin: 16px;"
        round
        block
        color="#b13a3d"
        native-type="submit"
      >
        统一身份认证登录
      </van-button>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Login',
  data () {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    onSubmit () {
      if (this.username === 'T90040' && this.password === 'T90040') {
        this.$store.dispatch('userLogin') && this.$router.push('./home')
      }

      // console.log('submit', values)
    }
  }
}
</script>

<style scoped lang="scss">
.Login {
  width: 100%;
  height: 100vw;
  background-image: url(../images/login_bgc.png);
  background-size: 100% 100%;

  .login_container {
    padding: 10.73333vw 12.33333vw 0;

    .van-form {
      margin-top: 37vw;
    }
  }

  img {
    width: 66.4vw;
    height: 19.2vw;
    background-size: cover;
  }
}
</style>
