<template>

    <div><Header :back="true">Book List</Header><div  class="content"><ul>
        <router-link  class="list"  v-for="book in bookList"  :to="'/details/'+book.bookId" :key="book.bookId" tag="li"><img :src="book.bookCover"/><div><h5>{{ book.bookName}}</h5>
            <p>{{book.bookInfo}}</p><b >${{book.bookPrice}}</b>
            <button @click.stop="removeOneBook(book.bookId)"  class="btn btn-danger">Delete</button>
        </div>

        </router-link>
    <br></ul></div>
    </div>

</template>

<script>
    import Header from '../base/Header';
    import {getBooks,removeBook}  from '../api/index';
  export default {
    data () {
      return {msg: 'List',bookList:[]}
    },
    created () {
        this.getBookList();
    },
    methods: {
        async getBookList(){
             let list=await getBooks();
            this.bookList=list.data;
        },
         async removeOneBook(id){
          await  removeBook(id);
             this.bookList=this.bookList.filter(item=>item.bookId!==id);
        }

    },
    computed: {},
    components: {Header}
  }
</script>


<style scoped lang="less">
.content{
    .list{
        display: flex;
        border-bottom: #ddd 1px double;
        img{width: 50%;height: 70%}
        b{color: darkred}
        button{
          margin-left: 10%;
        }
    }
}
</style>
