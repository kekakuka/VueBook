<template>
    <div> <Header :back="true">{{msg}} </Header><div class="add"><div  class="content">
        <label for="bookName">Book Name
            <input class="form-control" type="text"  v-model="theBook.bookName" id="bookName" /></label>
        <label for="bookInfo">Book Info
            <textarea class="form-control"    v-model="theBook.bookInfo" id="bookInfo" ></textarea></label>
        <label for="bookPrice">Book Price
            <input class="form-control"  type="text"  v-model.number="theBook.bookPrice" id="bookPrice" /></label>
        <label for="bookCover">Book Cover
            <input class="form-control"  type="text"  v-model="theBook.bookCover" id="bookCover" /></label>
        <br> <button class="btn btn-primary" @click="addABook(theBook)">Submit</button>
    </div>
    </div></div>
</template>

<script>
    import Header from '../base/Header';
    import {addBook} from '../api/index';
  export default {
    data () {
      return {msg: 'Add Book',theBook:{}}
    },
    created () {
    },
    methods: {
      async   addABook(data){
           await addBook(data);
          this.$router.push('/list');
        }
    },
    computed: {},
    components: {Header}
  }
</script>

<style scoped lang="less">
    .add{
        position: fixed;
        left: 0;
        top: 27px;
        right: 0;
        bottom: 50px;
        margin-left: 6%;
    textarea{

        width: 118%;
    }
    button{
        margin-left: 40%;
    }
    img{
        margin: 2% 32%  4% 12%;
        width: 50%;}
    }
</style>
