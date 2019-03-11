
<template>
  <div id="app">
    <transition name="fadeIn">
    <keep-alive>
    <router-view v-if="$route.meta.keepAlive"/>
    </keep-alive>
    </transition>
    <transition  name="fadeIn">
    <router-view v-if="!$route.meta.keepAlive"/>
    </transition>
    <Tab></Tab>
  </div>
</template>

<script>
    import Tab from './base/Tab.vue'
export default {
  name: 'App',
    components:{
      Tab
    }
}

</script>

<style>

*{margin: 0;
  padding: 0;
}
  a{text-decoration: none}
  .content{
    position: fixed;width: 100%;top: 27px;bottom: 50px;overflow: auto;background-color: #ffffff;
  }
  .fadeIn-enter{
    opacity: 0;
  }
.fadeIn-enter-active{
  transition: all 0.5s linear;
}
.fadeIn-leave-active{
  transition: all 0.5s linear;
  opacity: 0;
}
</style>
