import Vue from 'vue';
import Vuex from 'vuex';
import { firebasee, db } from '../plugins/firebaseInit'
import router from '../router/'
Vue.use(Vuex);

export const chats = {
    namespaced: true,
    state: {
        frndClickForChat: '',
        messages: []
    },
    mutations: {
        frndClickForChat(state, payload) {
            state.frndClickForChat = payload
        },
        setState(state, payload) {
            Object.keys(payload).map(k => state[k] = payload[k])
        }
    },
    actions: {
        sendMessage(contex, payload) {
            firebasee.auth().onAuthStateChanged(function (user) {
                if (user) {
                    contex.commit('setState', {messages:  contex.state.messages.concat({
                        message: payload.message,
                        recieverId: payload.key,
                        senderId: user.uid,
                    })})
                    if (user.uid > payload.key) {
                        let aa = db.collection('messages').doc(user.uid + payload.key).collection('messages')
                        aa.add({
                            message: payload.message,
                            recieverId: payload.key,
                            senderId: user.uid,
                        }).then(function (docRef) {
                            aa.doc(docRef.id).update({
                                time: firebasee.firestore.FieldValue.serverTimestamp()
                            })
                        })
                    } else {
                        let aa = db.collection('messages').doc(payload.key + user.uid).collection('messages')
                        aa.add({
                            message: payload.message,
                            recieverId: payload.key,
                            senderId: user.uid,
                        }).then(function (docRef) {
                            aa.doc(docRef.id).update({
                                time: firebasee.firestore.FieldValue.serverTimestamp()

                            })
                        })


                    }
                }
            })
        },
        recieveMessages(contex, payload) {
            firebasee.auth().onAuthStateChanged(function (user) {
                if (user) {
                    let docID,
                    messages = [];
                    if (user.uid > payload.key) {
                        docID = user.uid + payload.key;
                    } else {
                        docID = payload.key + user.uid;
                    }
                    db.collection('messages').doc(docID).collection('messages')
                        .orderBy("time", "asc")
                        .onSnapshot( function(snapShot){
                            let docs = snapShot.docs;
                            docs.map(function (doc, index) {
                                messages.push(doc.data())
                                if (index === docs.length - 1) {
                                    contex.commit('setState', {messages})

                                }
                            })
                        })
                }
            })

        },

        frndClickForChat(contex, payload) {
            contex.commit('frndClickForChat', payload)
        }
    },
    getters: {
    }
}