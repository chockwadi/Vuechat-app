<template>
  <div>
    <el-row>
      <el-col span="4">
        <Aside />
      </el-col>
      <el-col span="20">
        <el-menu :default-active="1" class="el-menu-demo" mode="horizontal">
          <el-menu-item :index="1">Home</el-menu-item>
          <el-menu-item :index="2">Find Friends</el-menu-item>
          <el-menu-item :index="3">Join Groups</el-menu-item>
          <el-menu-item id="signout" :index="5">Signout</el-menu-item>
          <el-menu-item id="signout" :index="4">Create New Group</el-menu-item>
        </el-menu>
        <el-row>
          <el-col span="24">
            <Main />
          </el-col>
        </el-row>
      </el-col>
      <el-row>
        <el-col type="flex" justify="center">
          <Footer />
        </el-col>
      </el-row>
    </el-row>
  </div>
</template>

<script>
  import Main from "./Main.vue";
  import Footer from "./Footer.vue";
  import Header from "./Header.vue";
  import Aside from "./Aside.vue";
  export default {
    name: "dashboard",
    components: {
      Main,
      Footer,
      Header,
      Aside
    }
  };
</script>

<style>
</style>