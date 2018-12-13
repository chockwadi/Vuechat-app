<template>
  <div>
    <el-row>
      <el-col :xs="0" :sm="6" :md="6" :lg="6" :xl="6">
        <Asidee v-on:find="findchange($event)" v-on:grp="grpon($event)"></Asidee>
      </el-col>
      <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
        <Headerr v-on:find="findchange($event)" v-on:homecomponent="homecomponentRender($event)"></Headerr>
      </el-col>
      <el-col :xs="24" :sm="18" :md="18" :lg="18" :xl="18">
        <Mainn v-bind:findd="find" v-bind:grp="grp" />
      </el-col>
    </el-row>
    <el-row>
      <el-col :span="24">
        <Footerr />
      </el-col>
    </el-row>
  </div>
</template>

<style>
  body {
    margin: 0;
  }
</style>

<script>
  import Asidee from "./Asidee.vue";
  import Headerr from "./Headerr.vue";
  import Footerr from "./Footerr.vue";
  import Mainn from "./Mainn.vue";
  export default {
    components: {
      Asidee,
      Headerr,
      Footerr,
      Mainn
    },
    data() {
      return {
        find: 0,
        homecomponent: true,
        grp: 0
      };
    },
    methods: {
      findchange(a) {
        this.find = a;
      },
      homecomponentRender(a) {
        this.homecomponent = a;
      },
      grpon(a) {
        this.grp = a
      }
    },
    created() {
      this.$store.commit("authentication/userUid");
      this.$store.dispatch("groupchat/getGroups");
      this.$store.dispatch("friends/getUsersList");
      document.body.className = "";

    }
  };
</script>