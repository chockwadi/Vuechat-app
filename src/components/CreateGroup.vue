<template>
  <el-row>
    <el-card style="padding:10px">
      <h1>Create A New Group</h1>
      <form @submit="create">
        <el-form ref="form" label-width="120px">
          <el-form-item label="Group Name">
            <el-input type="text" v-model="grp"></el-input>
          </el-form-item>
        </el-form>
        <button id="btn" type="submit">Create</button>
      </form>
    </el-card>
    <el-col></el-col>
  </el-row>
</template>

<script>
  export default {
    data() {
      return {
        grp: ""
      };
    },
    methods: {
      create(e) {
        e.preventDefault();
        this.$store.dispatch("groupchat/createGroup", this.grp);
        this.grp = "";
      }
    }
  };
</script>

<style scoped>
  #btn {
    border-radius: 5;
    background: #008080;
    color: #fff;
    border: 2px solid #008080;
    width: 300px;
    height: 30px;
  }
</style>