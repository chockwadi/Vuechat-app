import Vue from 'vue';
import Vuex from 'vuex';
import { firebasee, db } from '../plugins/firebaseInit'
import router from '../router/'

Vue.use(Vuex);
export const authentication = {
    namespaced: true,
    state: {
        userUid: ''
    },
    mutations: {
        userUid(state) {
            firebasee.auth().onAuthStateChanged(function (user) {
                if (user) {
                    state.userUid = user.uid
                    router.push('/dashboard')
                }else{
                    router.push('/')
                }
            })
        }
    },
    actions: {
        signIn(contex, payload) {
            firebasee.auth().signInWithEmailAndPassword(payload.email, payload.password)
                .then(function () {
                    router.push('/dashboard')
                },
                    function (error) {
                        alert("coud not sign in" + error)
                    })

        },
        signout() {
            firebasee.auth().signOut().then(function () {
                router.push('/')
            }, function (error) {
                alert("Could not sign out" + error)
            });

        },
        signUp(contex, payload) {
            firebasee.auth().createUserWithEmailAndPassword(payload.email, payload.password).then(
                function (user) {
                    let uid = firebasee.auth().currentUser.uid
                    if (user) {
                        db.collection('users').doc(uid).set({
                            fname: payload.fname,
                            lname: payload.lname,
                            email: payload.email,
                            password: payload.password,
                            id: uid
                        })
                        router.push('/dashboard')
                    } else {
                        alert('failed')
                    }

                })
        },
    },
    getters: {

    }
}