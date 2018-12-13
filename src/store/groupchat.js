import Vue from 'vue';
import Vuex from 'vuex';
import { firebasee, db } from '../plugins/firebaseInit'
import router from '../router/'
Vue.use(Vuex);

export const groupchat = {
    namespaced: true,
    state: {
        groups: [],
        grpClickForChat:'',
        chats:[]
    },
    mutations: {
        getGroups(state) {
            state.groups.length = 0

            db.collection("chatRooms").get().then(function (querySnapshot) {
                querySnapshot.forEach(function (doc) {
                    state.groups.push(doc.data())
                });
            });
        },
        grpClickForChat(state,payload){
            state.grpClickForChat = payload
        },
        recieveMessages(state,payload){
            state.chats.length = 0
            firebasee.auth().onAuthStateChanged( function(user){
                if(user){
                    db.collection('chatRooms')
                    .doc(payload.key)
                    .collection('chat')
                    .orderBy("time", "asc")
                    .get()
                    .then( function (snapShot) {
                        snapShot.forEach( function(doc){
                            state.chats.push(doc.data())
                        })
                    })
                }
            })
        }

    },
    actions: {
        recieveMessages(contex,payload){
           contex.commit('recieveMessages',payload)
        },
        sendMessage(contex, payload){
            firebasee.auth().onAuthStateChanged( function(user){
                if(user){
                    db.collection('chatRooms')
                    .doc(payload.key)
                    .collection('chat')
                    .add({
                        message: payload.message,
                        senderId: user.uid
                    }).then(
                        function(ref){
                            db.collection('chatRooms')
                    .doc(payload.key)
                    .collection('chat')
                    .doc(ref.id).update({
                        time: firebasee.firestore.FieldValue.serverTimestamp()
                    }) 
                        }
                    )
                }
            })
        },
        grpClickForChat(contex,payload){
            contex.commit('grpClickForChat',payload)
        },
        joinGroups(contex, payload) {
            firebasee.auth().onAuthStateChanged(function (user) {
                if (user) {
                    db.collection('chatRooms').doc(payload)
                        .collection('users').doc(user.uid).set({
                            userId: user.uid
                        })
                }
            })

        },
        getGroups(contex) {
            contex.commit('getGroups')
        },
        createGroup(contex, payload) {
            firebasee.auth().onAuthStateChanged(function (user) {
                if (user) {
                    db.collection('chatRooms').add({
                        chatRooms: payload
                    })
                        .then(function (ref) {
                            db.collection('chatRooms').doc(ref.id)
                                .collection('users').doc(user.uid).set({
                                    userId: user.uid
                                })
                            db.collection('chatRooms').doc(ref.id).update({
                                id: ref.id
                            })
                        })
                }
            })

        },
    },
    getters: {
    }
}