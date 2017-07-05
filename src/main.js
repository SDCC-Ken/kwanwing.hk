import Vue from 'vue'
import Vuetify from 'vuetify'
import VueRouter from 'vue-router'
import App from './App.vue'
import Index from './Index.vue'
import Cv from './Cv.vue'
import Project from './Project.vue'
import Contact from './Contact.vue'

Vue.use(VueRouter)
Vue.use(Vuetify)

const routes = [
  { path: '/', component: Index },
  { path: '/cv', component: Cv },
	{ path: '/project', component: Project },
	{ path: '/contact', component: Contact }
]

// 3. Create the router instance and pass the `routes` option
// You can pass in additional options here, but let's
// keep it simple for now.
const router = new VueRouter({
  routes // short for `routes: routes`
})

new Vue({
  el: '#app',
  render: h => h(App),
	router
})
