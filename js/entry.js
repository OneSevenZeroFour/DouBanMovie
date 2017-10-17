//引入
import Vue from "vue";
window.Vue=Vue
import $ from "jquery";
Vue.prototype.$=$;
import VueRouter from 'vue-router'
window.VueRouter=VueRouter
import Vuex from 'vuex'
window.Vuex=Vuex


// museui:
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'

//使用vue的功能时候要用use
Vue.use(MuseUI)
Vue.use(VueRouter)
Vue.use(Vuex)

import xfooter from "../components/museUI/Bottom Navigation.vue"
import xsearch from '../components/museUI/xsearch.vue'
import xdetail from '../components/museUI/xdetail.vue'
import hot from '../components/hot.vue'
import find from '../components/find.vue'
import my from '../components/my.vue'
var router=new VueRouter({
    routes:[
    {
        path:'/hot',
        component:hot
    },
    {
        path:'/find',
        component:find
    },
    {
        path:'/my',
        component:my
    },
    {
        path:'/search',
        component:xsearch,
    },
    {
        path:'/detail/:id',
        component:xdetail,
    }
    ]
})
new Vue({
	template:`<div>
				<xfooter></xfooter>
                <router-view></router-view>
			</div>`,
	components:{
        xfooter
    },
    router
}).$mount('#box')
