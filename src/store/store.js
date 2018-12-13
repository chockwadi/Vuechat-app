import Vue from 'vue';
import Vuex from 'vuex';
import { authentication } from './authentication'
import { friends } from './friends'
import { chats } from './chats'
import { groupchat } from './groupchat'
Vue.use(Vuex);


export const store = new Vuex.Store({
    modules: {
        authentication,
        friends,
        chats,
        groupchat
    }
})