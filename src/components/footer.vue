<template>
  <div>
    <van-tabbar
      v-model="active"
      active-color="#ee0a24"
    >
      <van-tabbar-item
        name="home"
        icon="home-o"
        to="/home"
      >
        ้ฆ้กต
      </van-tabbar-item>
      <van-tabbar-item
        name="personal"
        icon="contact"
        to="/personal"
      >
        ๆ็
      </van-tabbar-item>
    </van-tabbar>
  </div>
</template>

<script>
export default {
  name: 'Footer',
  data () {
    return {
      active: 'home'
    }
  },
  computed: {
  },
  mounted () {
    if (this.$route.path === '/personal') {
      this.active = 'personal'
    }
  }
}
</script>
