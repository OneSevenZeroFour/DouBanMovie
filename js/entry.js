import Vue from "vue";

import $ from "jquery";

// $.ajax({
// 		type : "get", //jquey是不支持post方式跨域的
// 		async:false,
// 		url : "https://api.douban.com/v2/movie/in_theaters", //跨域请求的URL
// 		dataType: "jsonp",
// 		success : function(json){
// 			console.log(json);
// 		}
// 	});

// museui:
import MuseUI from 'muse-ui'
import 'muse-ui/dist/muse-ui.css'
Vue.use(MuseUI)

import xfooter from "../components/museUI/Bottom Navigation.vue"
import xfindMoives from "../components/museUI/xfindMoives.vue"
import xfMdetailMove from "../components/museUI/xfMdetailMove.vue"
import VueRouter from 'vue-router'
// require('../css/font-awesome.min.css')
// require('../css/style.css')


// import icon from '../css/font-awesome.min.css'
// import icons from '../css/style.css'

Vue.use(VueRouter)
var router = new VueRouter({
	routes: [{
			path: '/findMoives',
			component: xfindMoives
		},{
			path: '/fMdetailMove',
			component: xfMdetailMove
		}
	]
})

new Vue({
	template:`<div>
				<router-view></router-view>
				<xfooter></xfooter>
			</div>`,
	components:{xfooter},
	router
}).$mount('#box') 
