<template>
  <div>
    <table>
      <tr v-for=" (frnd,key) in frndsss[0]" :key="key">
        <td>{{frnd.fname}}</td>

        <td>
          <el-button size="mini" type="primary" @click="handleAdd(frnd.id)">Add Friends</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>
   
<script>
export default {
  name: "find-friends",
  data() {
    return {
      frndsss: []
    };
  },
  methods: {
    handleAdd(key) {
      console.log(key);
    }
  },
  beforeCreate() {
    this.$store.dispatch("friends/getUsersList");
  },
  created() {
    this.frndsss.push(this.$store.state.friends.users);
  }
};
</script>

<style>
.frnds {
  padding: 10px;
}
</style>
