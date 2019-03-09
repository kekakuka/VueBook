
<template>
  <div id="app">
    <router-view/>
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
</style>
