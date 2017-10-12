<template>
<mu-paper>
  <mu-bottom-nav :value="bottomNav" @change="handleChange">
    <mu-bottom-nav-item value="hotMovie" title="热映" icon="event_seat" iconClass="lighterColor" />
    <mu-bottom-nav-item value="findMovie" title="找片" icon="remove_red_eye" iconClass="lighterColor" />
    <mu-bottom-nav-item value="myAccount" title="我的" icon="person_outline" iconClass="lighterColor" />
  </mu-bottom-nav>
</mu-paper>
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
  }
</style>
