<template>
<div class="gridlist-demo-container">
  <h3>今日推荐</h3>
  <mu-grid-list class="gridlist-demo">
    <mu-grid-tile   v-for="tile ,index in lists"  :key="index" class='todays' >
      <img  :src="tile.images.large"/>
      <span slot="title">{{tile.title}}</span>
    </mu-grid-tile>
  </mu-grid-list>
</div>
</template>

<script>
import $ from "jquery";

export default {
  data () {
    return {
      lists:[],
    }
  },
  mounted(){
    console.log(this);
    var self = this;
    $.ajax({
      type:'GET',
      url:"https://api.douban.com/v2/movie/top250?apikey=0b2bdeda43b5688921839c8ecb20399b&city=%E5%8C%97%E4%BA%AC&start=0&count=30&client=somemessage&udid=dddddddddddddddddddddd",
      
      dataType:"jsonp",
      success:function(data){
        console.log(data.subjects);
        self.lists = data.subjects;
      }
    })
  }
}
</script>

<style scoped>

h3{width:100%;background-color:#58bc58;margin:0;padding:10px;text-align:center;color:#fff;margin-bottom:30px;}
.gridlist-demo-container{
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  margin-bottom: 111px;
}

.gridlist-demo{
  width: 500px;
  height: 80% !important;
  overflow-y: auto;
}
.mu-grid-tile-subtitle, .mu-grid-tile-title {
    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    word-wrap: break-word;
   text-align: center !important;
}
</style>