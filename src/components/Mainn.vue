<template>
  <div v-if="findd == 1">
    <el-card>
      <div slot="header">
        <h1 v-show="grp === 1">{{ grpsss.name !== '' ? grpsss.name:'' }}</h1>
        <h3 v-show="grp === 1">Group Chat</h3>
        <h1 v-show="grp === 2">{{ frndsss.name !== '' ? frndsss.name:'' }}</h1>
        <h3 v-show="grp === 2">Conversation</h3>
      </div>
<div v-show="grp === 1"
        v-chat-scroll="{always: false, smooth: true}"
        v-if="chats !== ''"
        style="padding: 0 30px ; height: 50vh; overflow-y: auto;margin-bottom:10px;
     
      "
      >
        <ul v-for="(chat,key) in chats" :key="key">
          <li
            :style="{ textAlign: chat.senderId === uid? 'right' : 'left'}"
          >{{ chat.message}}
          </li>
        </ul>
      </div>
      <div v-show="grp === 2"
        v-chat-scroll="{always: false, smooth: true}"
        v-if="messages !== ''"
        style="padding: 0 30px ; height: 50vh; overflow-y: auto;margin-bottom:10px;
     
      "
      >
        <ul v-for="(message,key) in messages" :key="key">
          <li
            :style="{ textAlign: message.recieverId === frndsss.key ? 'right' : 'left'}"
          >{{ message.message}}</li>
        </ul>
      </div>
      <div v-if="chats == '' && grp === 1 " style=" color:gray;text-align:center ">
        <p>No messages</p>
        <p>Send message to start Group chating</p>
      </div>
      <div v-if="messages == '' && grp === 2 " style=" color:gray;text-align:center ">
        <p>No messages</p>
        <p>Send message to start conversation</p>
      </div>
      <div class="bottom">
        <form @submit.prevent="sendMessage">
          <el-input placeholder="type message" type="text" v-model="message"></el-input>
          <button type="submit" id="btnnn">
            <i class="el-icon-upload2"></i>
          </button>
        </form>
      </div>
    </el-card>
  </div>
  <find-friends v-else-if="findd == 2"/>
  <join-groups v-else-if="findd == 3"/>
  <create-group v-else-if=" findd== 4"/>
</template>

<script>
import { mapState, mapGetters } from "vuex";
import FindFriends from "./FindFriends";
import JoinGroups from "./JoinGroups";
import CreateGroup from "./CreateGroup";

export default {
  props: ["findd","grp"],
  data() {
    return {
      message: ""
    };
  },
  components: {
    FindFriends,
    JoinGroups,
    CreateGroup
  },
  methods: {
    findchange(a) {
      this.find = a;
    },
    sendMessage(e) {
      e.preventDefault();
      var message = {
        message: this.message,
        key: this.frndsss.key
      };
      var chat = {
        
        message: this.message,
        key:this.$store.state.groupchat.grpClickForChat.key
      }

      if(this.grp == 2){
        this.$store.dispatch("chats/sendMessage", message);
        // this.$store.dispatch("chats/recieveMessages", message);
      }else if(this.grp == 1){
        this.$store.dispatch("groupchat/sendMessage", chat);
        // this.$store.dispatch("groupchat/recieveMessages", chat);
      }

      this.message = "";
    }
  },
  computed: {
    frndsss: function() {
      return this.$store.state.chats.frndClickForChat;
    },
    messages: function() {
      return this.$store.state.chats.messages;
    },
    grpsss: function() {
      return this.$store.state.groupchat.grpClickForChat;
    },
    chats: function() {
      return this.$store.state.groupchat.chats;
    },
    uid: function() {
      return  this.$store.state.authentication.userUid 
    }
  }
};
</script>
 
<style scoped>
#btnnn {
  font-size: 32px;
  font-weight: bolder;
  position: fixed;
  bottom: 5%;
  right: 0;
  color: #fff;
  background: #000;
}

.bottom .el-input {
  position: fixed;
  bottom: 5%;
}
li {
  list-style-type: none;
}
</style>
