<template>
    <div>
        <div v-for="m in subjects" class="hotMovie">
            <img :src="m.images.small" :alt="m.title" style="float:left;">
            <ul class="hotDetail">
                <li style="font-size:1.2rem">{{m.title}}</li>
                <li class="text-style">
                    <div class="icon-contaner" v-if="m.rating.average>0">
                        <span v-if="m.rating.stars>10"><mu-icon value="star" color="#ffb300" :size="12.5" /></span>
                        <span v-else-if="m.rating.stars>=5"><mu-icon value="star_half" color="#ffb300" :size="12.5" /></span>
                        <span v-else><mu-icon value="star_border" color="#ffb300" :size="12.5" /></span>
                        <span v-if="m.rating.stars>20"><mu-icon value="star" color="#ffb300" :size="12.5" /></span>
                        <span v-else-if="m.rating.stars>=15"><mu-icon value="star_half" color="#ffb300" :size="12.5" /></span>
                        <span v-else><mu-icon value="star_border" color="#ffb300" :size="12.5" /></span>
                        <span v-if="m.rating.stars>30"><mu-icon value="star" color="#ffb300" :size="12.5" /></span>
                        <span v-else-if="m.rating.stars>=25"><mu-icon value="star_half" color="#ffb300" :size="12.5" /></span>
                        <span v-else><mu-icon value="star_border" color="#ffb300" :size="12.5" /></span>
                        <span v-if="m.rating.stars>40"><mu-icon value="star" color="#ffb300" :size="12.5" /></span>
                        <span v-else-if="m.rating.stars>=35"><mu-icon value="star_half" color="#ffb300" :size="12.5" /></span>
                        <span v-else><mu-icon value="star_border" color="#ffb300" :size="12.5" /></span>
                        <span v-if="m.rating.stars>=50"><mu-icon value="star" color="#ffb300" :size="12.5" /></span>
                        <span v-else-if="m.rating.stars>=45"><mu-icon value="star_half" color="#ffb300" :size="12.5" /></span>
                        <span v-else><mu-icon value="star_border" color="#ffb300" :size="12.5" /></span>
                        <span style="position:relative;top:-1.8px">{{m.rating.average}}</span>
                    </div>
                    <div v-else>
                        <span>暂无评分</span>
                    </div>
                </li>
                <li class="text-style">导演：<span v-for="(n,index) in m.directors">{{n.name}}<span v-if="index<m.directors.length-1">/</span></span>
                </li>
                <li class="text-style">主演：<span v-for="(l,index) in m.casts">{{l.name}}<span v-if="index<m.casts.length-1">/</span></span>
                </li>
            </ul>
            <ul class="hotDetailButton">
                <li style="font-size:9px">{{m.collect_count}}人看过</li>
                <li>
                    <div class="button">
                        购票
                    </div>
                </li>
            </ul>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            subjects: []
        }
    },
    computed: {

    },
    mounted() {
        jsonp('https://api.douban.com/v2/movie/in_theaters?city=广州', null, (err, data) => {
            if (err) {
                console.error(err.message);
            } else {
                this.subjects = data.subjects;
                console.log(this.subjects);
            }
        });
    }
}
</script>
<style scoped lang="sass">
.hotDetail {
    float: left;
    list-style: none;
    margin: 0;
    padding: 0 20px;
    width: 57%;
}

.hotMovie {
    padding: 10px;
    overflow: hidden;
    border-bottom: 1px solid #eee;
}

.hotDetailButton {
    list-style: none;
    float: right;
    padding: 0;
    width: 21%;
    text-align: center;
    vertical-align: middle;
    margin: 25px 0 0;
    color: #ff1744;
}

.text-style {
    font-size: 8px;
    color: #888;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 1;
    overflow: hidden;
}

.button {
    width: 100%;
    border: 1px solid #ff4081;
    border-radius: 3px
}
</style>