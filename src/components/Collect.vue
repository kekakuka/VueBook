<template>
    <div><Header :back="true">Favorite Books</Header></div>
</template>

<script>
    import Header from '../base/Header';
  export default {
    data () {
      return {msg: 'Collect'}
    },
    created () {
    },
    methods: {},
    computed: {},
    components: {Header}
  }
</script>

<style scoped>

</style>
