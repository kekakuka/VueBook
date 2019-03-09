<template>
    <div><Header :back="false" >Home Page</Header>
<div class="content">   <Swiper  :swiperSlides="swiperSlides"></Swiper>

    <h3>Hot Books</h3><div class="container">
      <br>
                <div v-for="(book,index) in hotBooks" :key="index" class="mycard text-center">

                    <div >
                        {{book.bookName}}
                        <img :src="book.bookCover"/>

                    </div>
                    <hr :v-if="index%2===0">
                  </div>
            </div></div></div>

</template>

<script>
    import Header from '../base/Header';
    import Swiper from '../base/Swiper';
    import {getSliders,getHotBooks} from '../api/index';
  export default {
    data () {
      return {swiperSlides:[],hotBooks:[]}
    },
   async created () {
     this.getSlider();
       this.getHotBook();
   },
    methods: {
        async getSlider(){
            let result= await getSliders();
            this.swiperSlides=result.data;
        },
        async getHotBook(){
            let hotData=await getHotBooks();
            this.hotBooks=hotData.data;
        }

    },
    computed: {},
    components: {
        Header,
        Swiper
    }
  }
</script>

<style scoped lang="less">
.content{
    h3{
        text-align: center;
        color: #999;
    }

    .container{
        display: flex;
        flex-wrap: wrap;
        margin: 0 auto;

    .mycard{
        margin: 1%;
        text-align: center;
        width: 48%;
        img{
            width: 100%;
            height: auto;
        }
    }}
}


</style>
