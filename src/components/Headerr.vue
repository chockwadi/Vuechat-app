<template>
  <div>
    <el-row>
      <el-col :xs="24" :sm="0" :md="0" :lg="0" :xl="0">
        <el-menu default-active="0" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="0">Toggle</el-menu-item>
          <h1>Chat App</h1>
        </el-menu>
      </el-col>
      <el-col :xs="0" :sm="16" :md="14" :lg="16" :xl="16">
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
          <el-menu-item index="1" @click="home">Home</el-menu-item>
          <el-menu-item index="2" @click="findd">Find Friends</el-menu-item>
          <el-menu-item index="3" @click="join">Join Groups</el-menu-item>
        </el-menu>
      </el-col>
      <el-col :xs="0" :sm="8" :md="0" :lg="0" :xl="0">
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
          <el-menu-item class="signout" index="1">Toggle</el-menu-item>
        </el-menu>
      </el-col>

      <el-col :xs="0" :sm="1" :md="10" :lg="8" :xl="8">
        <el-menu default-active="1" class="el-menu-demo" mode="horizontal">
          <el-menu-item class="signout btns" index="1" @click="signout">Signout</el-menu-item>
          <el-menu-item class="signout btns" @click="cgroup" index="2">Create New Group</el-menu-item>
        </el-menu>
      </el-col>
    </el-row>
  </div>
</template>

<script>
import { mapActions } from "vuex";
export default {
  data() {
    return {};
  },
  methods: {
    findd() {
      this.$emit("find", 2);
    },
    signout() {
      this.signout();
    },
    ...mapActions("authentication", ["signout"]),
    home() {
      this.$emit("find", 1);
    },
    join() {
      this.$emit("find", 3);
    },
    cgroup() {
      this.$emit("find", 4);
    }
  }
};
</script>

<style>
.signout {
  margin-left: 3px !important;
  float: right;
  color: #fff !important;
  background: #008080;
}

.logo-container {
  padding: 20px;
  background: #004d4d;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #004d4d !important;
  color: #004d4d;
}
.el-menu-item {
  font-size: 16px !important;
  font-weight: bold;
  color: #008080;
}
.el-menu--horizontal > .el-menu-item.is-active {
  border-bottom: 2px solid #409eff;
  color: #004d4d;
}
.btns {
  background: #008080 !important;
}
.btns:hover {
  background: #004d4d !important;
}
.btns:focus {
  background: #004d4d !important;
}
.btns:active {
  background: #004d4d !important;
}
</style>
