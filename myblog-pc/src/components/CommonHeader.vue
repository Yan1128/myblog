<template>
  <header>
    <div class="header">
      <router-link to="/Index">返回</router-link> |
      <router-link to="/blog/post">发表文章</router-link>
    </div>
    <div class="exit">
      {{ loginUser.username }} |
      <span @click="exit">退出</span>
    </div>
  </header>
</template>

<script>
import { mapState, mapMutations, mapActions } from "vuex";

export default {
  computed: {
    ...mapState(["loginUser"]),
  },
  methods: {
    ...mapMutations(["storeLoginUser"]),
    ...mapActions(["setToken"]),
    exit() {
      this.$router.push("/"), this.storeLoginUser(null), this.setToken(null);
    },
  },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  //height: 1rem;
  //background: #ebbbf3;
  //line-height: 1rem;
  //text-align: center;
  font-weight: bolder;
  //position: relative;
  display: flex;
  //justify-content: space-between;
  color: #000000;
  font-size: 1.15rem;
}
</style>
