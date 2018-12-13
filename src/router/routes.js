
import SignIn from '../components/SignIn.vue'
import SignUp from '../components/SignUp'
import Dashboard from '../components/Dashboard'

export default [
    { path: '/', name: 'sign-in', component: SignIn },
    { path: '/signup', name: 'sign-up', component: SignUp },
    { path: '/dashboard', name: 'dashboard', component: Dashboard },
 
    
]