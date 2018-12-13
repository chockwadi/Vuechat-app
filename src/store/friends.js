import Vue from 'vue';
import Vuex from 'vuex';
import { firebasee, db } from '../plugins/firebaseInit'
import router from '../router/'
Vue.use(Vuex);

export const friends = {
    namespaced: true,
    state: {
        users: []
    },
    mutations: {
        users(state) {
            state.users.length = 0
            db.collection("users").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    state.users.push(doc.data())
                });
            });


        }
    },

    actions: {
        getUsersList(contex) {
            contex.commit('users')


        }
    },
    getters: {

    }
}