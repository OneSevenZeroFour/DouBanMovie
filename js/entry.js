import Vue from "vue"; 

import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)




import VueAwesomeSwiper from 'vue-awesome-swiper'
Vue.use(VueAwesomeSwiper)

import axios from "axios";

import VueRouter from 'vue-router'
import Vuex from 'vuex'
import jsonp from 'jsonp'
window.jsonp = jsonp

Vue.use(VueRouter)
Vue.use(Vuex)

import xfooter from "../components/museUI/Bottom Navigation.vue"

import hotTabs from "../components/museUI/hotTab.vue"
import hotting from "../components/hotting.vue"
import willing from "../components/willing.vue"
import person from "../components/person.vue"
import xfindMoives from "../components/museUI/xfindMoives.vue"
import xfMdetailMove from "../components/museUI/xfMdetailMove.vue"
import xtodayTVdetail from "../components/museUI/todayTVdetail.vue"

var router = new VueRouter({


    routes: [{
        path: '/',
        redirect: '/hot'
    }, {
        path: '/hot',
        component: 
            hotTabs
        ,
        children: [{
            path: '/',
            redirect: 'hotting'
        }, {
            path: 'hotting',
            component: hotting
        },{
            path: 'willing',
            component: willing
        }]
    },{
        path:"/person",
        component:person
    },{
            path: '/findMoives',
            component: xfindMoives
        },{
            path: '/fMdetailMove',
            component: xfMdetailMove
        },{
            path: '/todayTVdetail',
            component: xtodayTVdetail
        }]

})

new Vue({
    template: `<div>
                <router-view></router-view>
                <xfooter></xfooter>
              </div>`,
    components: { xfooter},
    router,
}).$mount('#box')
