<template>
<div>
<mu-paper>
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="hotMovie" title="热映" icon="event_seat" iconClass="lighterColor" href='#/hot'/>
    <mu-bottom-nav-item value="findMovie" title="找片" icon="remove_red_eye" iconClass="lighterColor" href='#/find'/>
    <mu-bottom-nav-item value="myAccount" title="我的" icon="person_outline" iconClass="lighterColor" href='#/my'/>
  </mu-bottom-nav>
</mu-paper>
  </div>
</template>

<script>
export default {
  data() {
    return {
      bottomNav: 'hotMovie'
    }
  },
  methods: {
    handleChange(val) {
      this.bottomNav = val
    }
  }
}
</script>

<style lang="sass">
  .lighterColor{
    color:#bbb;
  }
  .mu-bottom-item-active{
        .mu-bottom-item-icon,.mu-bottom-item-text {
          color: #333;
        }
  }
  .mu-paper{
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    border-top:1px solid #bbb;
    z-index:1
  }
</style>
