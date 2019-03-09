<template>
   <div> <Header :detail="true" :back="true">{{msg}} {{$route.params.id}} </Header><div class="detail"><div  class="content">
      <img :src="theBook.bookCover"/><div>
      <label for="bookName">Book Name
      <input class="form-control" type="text"  v-model="theBook.bookName" id="bookName" /></label>
      <label for="bookInfo">Book Info
         <textarea class="form-control"    v-model="theBook.bookInfo" id="bookInfo" ></textarea></label>
      <label for="bookPrice">Book Price
      <input class="form-control"  type="text"  v-model.number="theBook.bookPrice" id="bookPrice" /></label>
      <br> <button class="btn btn-primary" @click="changeBookDetails(theBook.bookId,theBook)">Submit</button>
   </div>
 </div></div></div>
</template>

<script>
   import Header from '../base/Header';
   import {getTheBook,changeTheBook} from '../api/index'

  export default {
    data () {
      return {msg: 'Detail',theBook:{}}
    },
    created () {
         this.getBook(this.$route.params.id);
    },
    methods: {
        async getBook(id){
             let book= await getTheBook(id);
            book.data?void 0:this.$router.push('/list');
            this.theBook=  book.data;
        },
      async   changeBookDetails(id,data){
          await changeTheBook(id,data);
          this.$router.push('/list')
        }
    },
      watch:{
          $route(){
              this.getBook(this.$route.params.id);
          }
      },
    computed: {},
    components: {
        Header,
    }
  }
</script>

<style scoped lang="less">
.detail{
position: fixed;
   left: 0;
   top: 27px;
   right: 0;
   bottom: 0;
   z-index: 100;
   background-color: white;
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
