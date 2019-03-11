import Vue from 'vue'
import Router from 'vue-router'

Vue.use(Router);
import Home from '../components/Home'
import Collect from '../components/Collect.vue'
import Detail from '../components/Detail.vue'
import List from '../components/List.vue'
import Add from '../components/Add.vue'

export default new Router({
    routes: [
        {path:'/home',component:Home,meta:{keepAlive:true}},
        {path:'/collect',component:Collect },
        {path:'/details/:id',component:Detail},
        {path:'/list',component:List},
        {path:'/add',component:Add},
        {path:'/',redirect:'/home'},
    ]
})
