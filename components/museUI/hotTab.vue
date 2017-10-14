<template>
    <div>
        <searchButton></searchButton>
        <Carousel></Carousel>
        <div style="min-width:320px">
            <mu-tabs :value="activeTab" @change="handleTabChange">
                <mu-tab value="tab1" title="正在热映" href="#/hot/hotting"/>
                <mu-tab value="tab2" title="即将上映" href="#/hot/willing"/>
            </mu-tabs>
            <router-view style="margin-bottom: 50px">
            </router-view>
        </div>
    </div>
</template>
<script>
import Carousel from "../Carousel.vue"
import searchButton from "../searchButton.vue"

export default {
    data() {
        return {
            activeTab: 'tab1',
            subjects: []
        }
    },
    methods: {
        handleTabChange(val) {
            this.activeTab = val
        }
    },
    mounted(){
      var willingReg=/^\/hot\/willing(?:\/(?=$))?$/i;
      this.$route.matched.forEach(e=>{
        if(willingReg.test(e.path)){this.activeTab='tab2'}
      })
    },
    components:{Carousel,searchButton}
}
</script>
<style lang="sass">
.mu-tabs {
    background-color: #fff;
    height: 30px;
    border-bottom: 1px solid #eee;
}

.mu-tab-link {
    color: #ccc;
}

.mu-tab-link-highlight {
    background-color: #333;
}

.mu-tab-active {
    color: #333;
}
</style>