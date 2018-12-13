<template>
  <div class="divClass">
    <div class="logo-container">Chat Application</div>
    <div>
      <h1>Friends</h1>

      <ul v-for=" (frnd,key) in frndsss" :key="key" @click="frndChat(frnd.id,frnd.fname)">
        <li v-show=" frnd.id !== userUid ">{{frnd.fname}}</li>
      </ul>
    </div>
    <div>
      <h1>Groups</h1>
      <ul v-for=" (group,key) in groups" :key="key" @click="grpChat(group.id,group.chatRooms)">
        <li>{{group.chatRooms}}
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {};
    },
    methods: {
      frndChat(key, name) {
        let a = {
          key: key,
          name: name
        };
        this.$emit("find", 1);

        this.$store.dispatch("chats/frndClickForChat", a);
        this.$store.dispatch("chats/recieveMessages", a);
        this.$emit("grp", 2);

      },
      grpChat(key, name) {
        let a = {
          key: key,
          name: name
        };

        this.$store.dispatch("groupchat/grpClickForChat", a);
        this.$store.dispatch("groupchat/recieveMessages", a);
        this.$emit("grp", 1);
        this.$emit("find", 1);
      }
    },

    computed: {
      frndsss: function () {
        return this.$store.state.friends.users;
      },
      userUid: function () {
        return this.$store.state.authentication.userUid;
      },
      groups: function () {
        return this.$store.state.groupchat.groups;
      }
    }
  };
</script>

<style scoped>
  .divClass {
    background: #008080 !important;
    color: #fff !important;
    /* width: 300px !important; */
    min-height: 90vh;
  }
</style>