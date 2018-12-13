<template>
  <div>
    <table>
      <tr v-for=" (group,key) in groups[0]" :key="key">
        <td>{{group.chatRooms}}</td>

        <td>
          <el-button size="mini" type="primary" @click="handleAdd(group.id)">Join Group</el-button>
        </td>
      </tr>
    </table>
  </div>
</template>

<script>
export default {
  name: "join-groups",
  data() {
    return {
      groups: []
    };
  },
  computed: {
    // groups: function(){
    //     return this.$store.state.groupchat.groups
    // }
  },
  created() {
    this.groups.push(this.$store.state.groupchat.groups);
  },
  methods:{
    handleAdd(aa){
      this.$store.dispatch('groupchat/joinGroups',aa)
    }
  }
};
</script>
  
<style>
.frnds {
  padding: 10px;
}
</style>
