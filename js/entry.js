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

new Vue({
	template:`<div>
				<xfooter></xfooter>
			</div>`, 
	components:{xfooter}
}).$mount('#box')