<template>
  <div class="um-container">
    <div class="top">
      <span
        style="margin-left: -10vw;"
        @click="movePersonal"
      >&lt; 返回</span>
      <span>我的消息</span>
      <span />
    </div>

    <van-collapse
      v-for="(item,index) in mlist"
      :key="item.id"
      v-model="activeNames"
      style="padding: 4vw 4vw;"
    >
      <van-collapse-item
        :name="index"
        :is-link="false"
        title-class="mstit"
      >
        <template #title>
          <div class="mstit">过期提醒</div>
        </template>
        <template #value>
          <div>已读</div>
          <div>{{ item.createDate }}</div>
        </template>
        <div class="mscontent">{{ item.message }}</div>
        <hr>
        <div style="text-align: center;">收起</div>
      </van-collapse-item>
    </van-collapse>
    <p class="noMore">
      没有更多了
    </p>
  </div>
</template>

<script>
export default {
  data () {
    return {
      activeNames: ['1']
    }
  },
  computed: {
    mlist () {
      return this.$store.state.messageList
    }
  },
  created () {
    this.$store.dispatch('getMessge')
  },
  methods: {
    movePersonal () {
      this.$router.push('/personal')
    }
  }
}
</script>

<style lang="scss" scoped>
  .um-container {
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
  }

  .mstit {
    font-size: 4vw;
    font-weight: 700;
    color: #282828;
  }

  .mscontent {
    padding-bottom: 4vw;
    font-size: 2.93333vw;
    line-height: 1.8;
    color: black;
    text-indent: 2em;
  }

  .noMore {
    padding: 2.66667vw;
    margin-left: 40%;
    font-size: 2.93333vw;
    color: #b13a3d;
  }
</style>
