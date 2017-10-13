<template>
    <div>
        <div v-for="m in subjects" class="hotMovie">
            <img :src="m.images.small" :alt="m.title" style="float:left;">
            <ul class="hotDetail">
                <li style="font-size:1.2rem">{{m.title}}</li>
                <li class="text-style">导演：<span v-for="(n,index) in m.directors">{{n.name}}<span v-if="index<m.directors.length-1">/</span></span>
                </li>
                <li class="text-style">主演：<span v-for="(l,index) in m.casts">{{l.name}}<span v-if="index<m.casts.length-1">/</span></span>
                </li>
            </ul>
            <ul class="hotDetailButton">
                <li style="font-size:9px">{{m.collect_count}}人想看</li>
                <li>
                    <div class="button">
                        想看
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
            subjects: [],
        }
    },
    computed: {

    },
    mounted() {
        jsonp('https://api.douban.com/v2/movie/coming_soon?apikey=0b2bdeda43b5688921839c8ecb20399b&city=广州&start=0&count=20', null, (err, data) => {
            if (err) {
                console.error(err.message);
            } else {
                this.subjects = data.subjects;
                console.log(this.subjects);
                this.subjects.forEach(e=>{
                	console.log(e.mainland_pubdate);
                })
            }
        });
    }
}
</script>
<style scoped lang="sass">
$buttonColor:#ffb300;

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
    color: $buttonColor;
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
    border: 1px solid $buttonColor;
    border-radius: 3px
}
</style>