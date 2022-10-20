<template>
  <div>
    <div class="top">
      <span
        style="margin-left: -10vw;"
        @click="movePersonal"
      >&lt; 返回</span>
      <span>个人信息</span>
      <span />
    </div>
    <van-cell>
      <template #title>
        <van-col span="12">姓名</van-col>
        <van-col span="12">庄晨忠</van-col>
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <van-col span="12">出生日期</van-col>
        <van-col span="12">1969-06-26</van-col>
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <van-col span="12">性别</van-col>
        <van-col span="12">男</van-col>
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <van-col span="12">籍贯</van-col>
        <van-col span="12">福清市</van-col>
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <van-col span="12">民族</van-col>
        <van-col span="12">汉族</van-col>
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <van-col span="12">政治面貌</van-col>
        <van-col span="12">中国共产党员</van-col>
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <van-col span="12">身份证号码</van-col>
        <van-col span="12">350102196906260411</van-col>
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <van-col span="12">文化程度</van-col>
        <van-col span="12">硕士学位</van-col>
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <van-col span="12">工作部门</van-col>
        <van-col span="12">福州大学纪委</van-col>
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <van-col span="12">职务</van-col>
        <van-col span="12">研究员</van-col>
      </template>
    </van-cell>
    <van-cell>
      <template #title>
        <van-col span="12">联系电话</van-col>
        <van-col span="12">13559430571</van-col>
      </template>
    </van-cell>
  </div>
</template>

<script>
export default {
  methods: {
    movePersonal () {
      this.$router.push('/personal')
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
</style>
