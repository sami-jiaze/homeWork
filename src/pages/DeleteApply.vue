<template>
  <div>
    <div class="top">
      <span
        style="margin-left: -10vw;"
        @click="$router.push(`/applyprocess/${$route.params.id}`)"
      >&lt; 返回</span>
      <span>取消用证申请</span>
      <span />
    </div>

    <van-form @submit="onSubmit">
      <van-field
        v-model="form.reason"
        name="reason"
        placeholder="请输入原因"
        :rules="[{ required: true}]"
      />
      <div class="btn">
        <van-button
          color="#b13a3d"
          round
          style="width: 80vw;"
          native-type="submit"
        >
          确定
        </van-button>
      </div>
    </van-form>
  </div>
</template>

<script>
export default {
  data () {
    return {
      form: {
        reason: '',
        id: this.$route.params.id
      }
    }
  },
  methods: {
    onSubmit () {
      // console.log(JSON.stringify(this.form))
      this.$store.dispatch('CancelApply', this.form) && this.$router.push('/userapply')
    }
  }
}
</script>

<style scoped lang="scss">
  .top {
    display: flex;
    justify-content: space-around;
    height: 8vh;
    line-height: 8vh;
    color: #fff;
    text-align: center;
    background-color: #b13a3d;
  }

  .btn {
    position: absolute;
    bottom: 0;
    left: 0;
    box-sizing: border-box;
    width: 100%;
    padding: 5.33333vw 8vw;
  }
</style>
